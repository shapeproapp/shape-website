import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Politique de Confidentialité - SHAPE",
    description: "Politique de confidentialité de l'application SHAPE",
};

export default function PrivacyPolicy() {
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
                    Politique de Confidentialité
                </h1>
                <p className="text-muted-foreground mb-12">
                    Dernière mise à jour : Janvier 2025
                </p>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Chez SHAPE, nous prenons votre vie privée très au sérieux. Cette politique de confidentialité
                            explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles
                            lorsque vous utilisez notre application de fitness et nutrition propulsée par l'IA.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Données Collectées</h2>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            Pour vous offrir une expérience personnalisée, nous collectons :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                            <li><strong>Informations de profil :</strong> nom, email, âge, sexe, poids, taille</li>
                            <li><strong>Objectifs fitness :</strong> objectifs de transformation, zones ciblées, niveau d'expérience</li>
                            <li><strong>Données d'entraînement :</strong> exercices effectués, séries, répétitions, progression</li>
                            <li><strong>Données nutritionnelles :</strong> repas scannés, calories, macronutriments</li>
                            <li><strong>Photos de repas :</strong> uniquement pour l'analyse nutritionnelle via notre IA</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Utilisation des Données</h2>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            Vos données sont utilisées exclusivement pour :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                            <li>Générer des programmes d'entraînement personnalisés via notre IA</li>
                            <li>Analyser vos repas et calculer les informations nutritionnelles</li>
                            <li>Suivre votre progression et adapter vos programmes</li>
                            <li>Améliorer nos algorithmes d'IA (données anonymisées uniquement)</li>
                            <li>Vous envoyer des notifications pertinentes (si autorisé)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Intelligence Artificielle & Scanner Food</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Notre fonctionnalité Food AI analyse vos photos de repas pour identifier les aliments et
                            estimer les valeurs nutritionnelles. Les photos sont traitées de manière sécurisée et ne sont
                            pas stockées de façon permanente après traitement, sauf si vous choisissez de les sauvegarder
                            dans votre historique.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Stockage & Sécurité</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Vos données sont stockées de manière sécurisée via des services cloud conformes au RGPD.
                            Nous utilisons le chiffrement de bout en bout pour protéger vos informations sensibles.
                            Vos données ne sont jamais vendues à des tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Vos Droits</h2>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                            Conformément au RGPD, vous avez le droit de :
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                            <li><strong>Accéder</strong> à toutes vos données personnelles</li>
                            <li><strong>Rectifier</strong> les informations inexactes</li>
                            <li><strong>Supprimer</strong> votre compte et toutes vos données</li>
                            <li><strong>Exporter</strong> vos données dans un format lisible</li>
                            <li><strong>Retirer</strong> votre consentement à tout moment</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Cookies & Analytics</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Notre site web utilise des cookies essentiels pour son fonctionnement. Nous utilisons
                            également des outils d'analytics anonymisés pour comprendre comment améliorer nos services.
                            Aucune donnée personnellement identifiable n'est partagée avec des tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Pour toute question concernant vos données personnelles ou cette politique de confidentialité,
                            contactez-nous à : <a href="mailto:privacy@shapefitness.app" className="text-accent hover:underline">privacy@shapefitness.app</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            Nous pouvons mettre à jour cette politique de temps à autre. Les modifications importantes
                            vous seront notifiées via l'application ou par email. L'utilisation continue de SHAPE après
                            ces modifications constitue votre acceptation de la nouvelle politique.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
