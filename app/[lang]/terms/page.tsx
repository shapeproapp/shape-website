import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Conditions d'Utilisation - SHAPE",
    description: "Conditions d'utilisation de l'application SHAPE",
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background py-20">
            <div className="max-w-3xl mx-auto px-6">
                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Retour à l'accueil
                </Link>

                <h1 className="text-4xl font-black tracking-tight mb-4">
                    Conditions d'Utilisation
                </h1>
                <p className="text-muted-foreground mb-12">
                    Dernière mise à jour : Janvier 2025
                </p>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptation des Conditions</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            En téléchargeant, installant ou utilisant l'application SHAPE, vous acceptez d'être lié
                            par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas
                            utiliser notre application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Description du Service</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            SHAPE est une application de fitness et nutrition qui utilise l'intelligence artificielle pour :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-4">
                            <li>Générer des programmes d'entraînement personnalisés</li>
                            <li>Analyser vos repas via notre scanner Food AI</li>
                            <li>Suivre votre progression fitness et nutritionnelle</li>
                            <li>Fournir des recommandations adaptées à vos objectifs</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Avertissement Santé</h2>
                        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-foreground/80">
                            <p className="font-semibold mb-2">⚠️ Important</p>
                            <p>
                                SHAPE ne remplace pas un avis médical professionnel. Avant de commencer tout programme
                                d'exercice ou régime alimentaire, consultez votre médecin, surtout si vous avez des
                                conditions médicales préexistantes. Les informations nutritionnelles fournies par notre
                                IA sont des estimations et peuvent varier des valeurs réelles.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Compte Utilisateur</h2>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            Pour utiliser SHAPE, vous devez :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                            <li>Avoir au moins 16 ans</li>
                            <li>Fournir des informations exactes lors de l'inscription</li>
                            <li>Maintenir la confidentialité de vos identifiants</li>
                            <li>Nous informer immédiatement de toute utilisation non autorisée</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Abonnement & Paiement</h2>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            SHAPE propose des abonnements payants avec les conditions suivantes :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                            <li>Les paiements sont traités via l'App Store d'Apple</li>
                            <li>L'abonnement se renouvelle automatiquement sauf annulation</li>
                            <li>Vous pouvez annuler à tout moment dans les paramètres de votre compte Apple</li>
                            <li>L'annulation prend effet à la fin de la période de facturation en cours</li>
                            <li>Aucun remboursement au prorata n'est effectué pour les annulations en cours de période</li>
                            <li>L'abonnement annuel bénéficie d'une garantie satisfait ou remboursé de 30 jours</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Utilisation Acceptable</h2>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            Vous vous engagez à ne pas :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                            <li>Utiliser l'application à des fins illégales</li>
                            <li>Tenter de contourner les mesures de sécurité</li>
                            <li>Partager votre compte avec d'autres personnes</li>
                            <li>Reproduire ou redistribuer le contenu de l'application</li>
                            <li>Utiliser des robots ou scripts automatisés</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Propriété Intellectuelle</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            L'application SHAPE, incluant son design, code, algorithmes d'IA, et contenu, est protégée
                            par les droits d'auteur et autres lois sur la propriété intellectuelle. Vous recevez une
                            licence limitée, non-exclusive et non-transférable pour utiliser l'application à des fins
                            personnelles uniquement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Limitation de Responsabilité</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            SHAPE est fourni "tel quel". Nous ne garantissons pas que l'application sera exempte
                            d'erreurs ou ininterrompue. Dans la mesure permise par la loi, nous déclinons toute
                            responsabilité pour les dommages indirects, accidentels ou consécutifs résultant de
                            l'utilisation de l'application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Modifications du Service</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect de
                            l'application à tout moment. Nous nous efforcerons de vous informer des changements
                            significatifs avec un préavis raisonnable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">10. Résiliation</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Nous pouvons suspendre ou résilier votre accès à SHAPE si vous violez ces conditions.
                            Vous pouvez résilier votre compte à tout moment en nous contactant ou via les
                            paramètres de l'application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">11. Droit Applicable</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Ces conditions sont régies par le droit français. Tout litige sera soumis à la
                            compétence exclusive des tribunaux français.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Pour toute question concernant ces conditions d'utilisation, contactez-nous à :
                            <a href="mailto:legal@shapefitness.app" className="text-accent hover:underline ml-1">legal@shapefitness.app</a>
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
