from django.shortcuts import render

# Create your views here.
# accounts/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, LoginSerializer, PasswordResetRequestSerializer, PasswordResetConfirmSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.conf import settings
from django.utils.http import urlsafe_base64_decode

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "user": serializer.data}, status=201)
        return Response(serializer.errors, status=400)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token, _ = Token.objects.get_or_create(user=user)

            # 👇 Inclure le rôle de l'utilisateur dans la réponse
            return Response({
                "token": token.key,
                "role": user.role  # Assure-toi que `user` a bien un attribut `role`
            })

        return Response(serializer.errors, status=400)
    
    
class PasswordResetRequestView(APIView):
    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            reset_link = f"{settings.FRONTEND_URL}/reset-password/{uid}/{token}"

            # Envoyer le mail
            send_mail(
                "Réinitialisation du mot de passe",
                f"Voici votre lien de réinitialisation : {reset_link}",
                settings.DEFAULT_FROM_EMAIL,
                [email]
            )

            return Response({"message": "Lien de réinitialisation envoyé."})
        return Response(serializer.errors, status=400)


class PasswordResetConfirmView(APIView):
    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        if serializer.is_valid():
            uid = urlsafe_base64_decode(serializer.validated_data['uid']).decode()
            token = serializer.validated_data['token']
            new_password = serializer.validated_data['new_password']
            try:
                user = User.objects.get(pk=uid)
                if default_token_generator.check_token(user, token):
                    user.set_password(new_password)
                    user.save()
                    return Response({"message": "Mot de passe réinitialisé."})
                else:
                    return Response({"error": "Lien invalide"}, status=400)
            except User.DoesNotExist:
                return Response({"error": "Utilisateur introuvable"}, status=400)
        return Response(serializer.errors, status=400)
