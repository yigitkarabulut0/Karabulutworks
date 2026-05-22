import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyFR() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · En vigueur depuis le 21 mai 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Cette politique de confidentialité décrit la façon dont l’application mobile NineCells (l’«\xa0App\xa0») traite les informations. NineCells est un jeu de Sudoku offline-first développé par Yigit Karabulut (le «\xa0Développeur\xa0»).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Informations que nous ne collectons pas
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells <strong>ne collecte pas, ne stocke pas, ne vend pas et ne partage pas</strong> d’informations personnellement identifiables. L’App ne nécessite pas de compte, ne demande ni nom, e-mail, téléphone ou localisation, et n’intègre aucun SDK publicitaire ou d’analyse tiers.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Données stockées localement sur ton appareil
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Pour fournir l’expérience de jeu, l’App stocke les données suivantes <strong>uniquement sur ton appareil</strong>\xa0:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Progression (puzzle en cours, état du plateau, chronomètre)</li>
              <li>Statistiques (puzzles terminés, meilleurs temps, séries)</li>
              <li>Préférences (thème, son, haptique, difficulté)</li>
            </ul>
            <p className="mt-3">
              Ces données ne quittent jamais ton appareil sauf si iCloud est activé pour l’App ; elles sont alors synchronisées via le service iCloud d’Apple entre tes propres appareils Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Synchronisation iCloud
            </h2>
            <p>
              Si tu actives iCloud pour NineCells dans les réglages iOS, tes données de jeu sont stockées dans ton conteneur iCloud privé et traitées par Apple selon sa politique de confidentialité. Le Développeur n’y a pas accès.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Services Apple
            </h2>
            <p>
              L’App peut utiliser des services Apple standards comme Live Activities, la connectivité watchOS et Game Center (le cas échéant). Les données traitées par ces services relèvent de la politique de confidentialité d’Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Vie privée des enfants
            </h2>
            <p>
              NineCells convient à tous les âges et ne collecte pas sciemment d’informations auprès des enfants.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Modifications de cette politique
            </h2>
            <p>
              Cette politique peut être mise à jour occasionnellement pour refléter de nouvelles fonctionnalités ou des exigences légales. La dernière version est toujours disponible à cette URL.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Contact
            </h2>
            <p>
              Pour toute question sur cette politique, contacte :
            </p>
            <p className="mt-2">
              <a
                href="mailto:yigit@karabulut.work"
                className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
              >
                yigit@karabulut.work
              </a>
            </p>
          </section>
        </div>

        {/* Language Switcher */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 text-sm text-neutral-500">
          <Link href="/ninecells/privacy-en" className="hover:text-neutral-300">
            English
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-tr" className="hover:text-neutral-300">
            Türkçe
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-pt" className="hover:text-neutral-300">
            Português
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-ja" className="hover:text-neutral-300">
            日本語
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-zh" className="hover:text-neutral-300">
            简体中文
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-ko" className="hover:text-neutral-300">
            한국어
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-de" className="hover:text-neutral-300">
            Deutsch
          </Link>
          <span>•</span>
          <span className="text-neutral-300">Français</span>
          <span>•</span>
          <Link href="/ninecells/privacy-es" className="hover:text-neutral-300">
            Español
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-it" className="hover:text-neutral-300">
            Italiano
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-ru" className="hover:text-neutral-300">
            Русский
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-es-mx" className="hover:text-neutral-300">
            Español (MX)
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-ar" className="hover:text-neutral-300">
            العربية
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-hi" className="hover:text-neutral-300">
            हिन्दी
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-id" className="hover:text-neutral-300">
            Indonesia
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-vi" className="hover:text-neutral-300">
            Tiếng Việt
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-neutral-600">
          <p>© 2026 Yigit Karabulut. Tous droits réservés.</p>
          <Link
            href="https://karabulut.work"
            className="mt-2 inline-block hover:text-neutral-400"
          >
            karabulut.work
          </Link>
        </div>
      </div>
    </main>
  );
}
