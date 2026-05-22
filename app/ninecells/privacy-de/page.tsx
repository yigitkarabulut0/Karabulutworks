import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyDE() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · Gültig ab 21. Mai 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Diese Datenschutzerklärung beschreibt, wie die NineCells-App (die „App“) mit Informationen umgeht. NineCells ist ein offline-first Sudoku-Spiel, entwickelt von Yigit Karabulut (dem „Entwickler“).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Informationen, die wir nicht erfassen
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells erfasst, speichert, verkauft oder teilt <strong>keine</strong> personenbezogenen Daten. Die App benötigt keinen Account, fragt weder nach Namen, E-Mail, Telefonnummer noch Standort und enthält keine Werbe- oder Analyse-SDKs Dritter.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Lokal auf deinem Gerät gespeicherte Daten
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Um das Spielerlebnis zu ermöglichen, speichert die App folgende Daten <strong>ausschließlich auf deinem Gerät</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Spielfortschritt (aktuelles Rätsel, Spielfeldzustand, Timer)</li>
              <li>Statistik (gelöste Rätsel, Bestzeiten, Serien)</li>
              <li>App-Einstellungen (Design, Ton, Haptik, Schwierigkeit)</li>
            </ul>
            <p className="mt-3">
              Diese Daten verlassen dein Gerät nur, wenn du iCloud für die App aktiviert hast — dann werden sie über Apples iCloud-Dienst zwischen deinen eigenen Apple-Geräten synchronisiert.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. iCloud-Sync
            </h2>
            <p>
              Wenn du iCloud für NineCells in den iOS-Einstellungen aktivierst, werden deine Spieldaten in deinem privaten iCloud-Container gespeichert und von Apple gemäß deren Datenschutzrichtlinie verarbeitet. Der Entwickler hat keinen Zugriff darauf.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Apple-Dienste
            </h2>
            <p>
              Die App kann gegebenenfalls standardmäßige Apple-Systemdienste wie Live Activities, watchOS-Verbindung und Game Center nutzen. Die von diesen Diensten verarbeiteten Daten unterliegen Apples eigener Datenschutzrichtlinie.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Datenschutz für Kinder
            </h2>
            <p>
              NineCells ist für alle Altersgruppen geeignet und erfasst nicht wissentlich Informationen von Kindern.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Änderungen dieser Erklärung
            </h2>
            <p>
              Diese Erklärung kann gelegentlich aktualisiert werden, um neue Funktionen oder gesetzliche Anforderungen abzubilden. Die jeweils aktuelle Fassung ist immer unter dieser URL verfügbar.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Kontakt
            </h2>
            <p>
              Bei Fragen zu dieser Datenschutzerklärung wende dich an:
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
          <span className="text-neutral-300">Deutsch</span>
          <span>•</span>
          <Link href="/ninecells/privacy-fr" className="hover:text-neutral-300">
            Français
          </Link>
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
          <p>© 2026 Yigit Karabulut. Alle Rechte vorbehalten.</p>
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
