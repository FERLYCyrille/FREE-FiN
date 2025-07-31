from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
            ('client', 'Client'),
            ('freelance', 'Freelance'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='client')


# Create your models here.
