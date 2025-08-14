import {
    Mail,
    Phone,
    MapPin,

} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-white pt-12 pb-6">
            <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
                {/* Logo */}
                <div>
                    <h2 className="text-2xl font-bold text-red-500 mb-4">FinanceConnect</h2>
                    <p className="text-sm text-red-400">Votre plateforme d’expertise financière en toute confiance.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-black mb-4">Liens rapides</h3>
                    <ul className="space-y-2 text-red-600">
                        <li><a href="#" className="hover:text-red-600 transition">Accueil</a></li>
                        <li><a href="#" className="hover:text-red-600 transition">Trouver un expert</a></li>
                        <li><a href="#" className="hover:text-red-600 transition">À propos</a></li>
                        <li><a href="#" className="hover:text-red-600 transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-red-600 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-red-600 transition">CGU</a></li>
                        <li><a href="#" className="hover:text-red-600 transition">Politique de confidentialité</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
                    <ul className="space-y-3 text-red-600">
                        <li className="flex items-center">
                            <Mail className="w-5 h-5 text-red-600 mr-2" /> contact@financeconnect.com
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-5 h-5 text-red-600 mr-2" /> +33 1 23 45 67 89
                        </li>
                        <li className="flex items-center">
                            <MapPin className="w-5 h-5 text-red-600 mr-2" /> Voir sur la carte
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-4 text-center text-red-600 text-sm">
                © 2025 FinanceConnect. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;
