import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyIT() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Informativa sulla privacy
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · In vigore dal 21 maggio 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Questa Informativa sulla privacy descrive come l’app mobile NineCells (l’“App”) gestisce le informazioni. NineCells è un gioco di Sudoku offline-first sviluppato da Yigit Karabulut (lo “Sviluppatore”).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Informazioni che non raccogliamo
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells <strong>non</strong> raccoglie, conserva, vende o condivide alcuna informazione personalmente identificabile. L’App non richiede un account, non chiede nome, e-mail, telefono o posizione, e non contiene SDK pubblicitari o di analisi di terze parti.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Dati salvati localmente sul tuo dispositivo
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Per fornire l’esperienza di gioco, l’App memorizza i seguenti dati <strong>solo sul tuo dispositivo</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Progresso di gioco (puzzle attuale, stato della griglia, timer)</li>
              <li>Statistiche (puzzle completati, tempi migliori, serie)</li>
              <li>Preferenze (tema, audio, feedback aptico, difficoltà)</li>
            </ul>
            <p className="mt-3">
              Questi dati non lasciano mai il tuo dispositivo a meno che tu non abbia abilitato iCloud per l’App; in tal caso vengono sincronizzati tra i tuoi dispositivi Apple tramite il servizio iCloud di Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Sincronizzazione iCloud
            </h2>
            <p>
              Se abiliti iCloud per NineCells nelle impostazioni iOS, i dati di gioco vengono memorizzati nel tuo container iCloud privato e gestiti da Apple secondo la sua informativa. Lo Sviluppatore non vi ha accesso.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Servizi Apple
            </h2>
            <p>
              L’App può usare servizi Apple standard come Live Activities, connettività watchOS e Game Center (ove applicabile). I dati elaborati da questi servizi sono regolati dall’informativa di Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Privacy dei minori
            </h2>
            <p>
              NineCells è adatta a tutte le età e non raccoglie consapevolmente informazioni dai minori.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Modifiche a questa informativa
            </h2>
            <p>
              L’informativa può essere aggiornata di tanto in tanto per riflettere nuove funzioni dell’App o requisiti legali. La versione più recente è sempre disponibile a questo URL.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Contatti
            </h2>
            <p>
              Per qualsiasi domanda su questa informativa, contattare:
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
          <Link href="/ninecells/privacy-fr" className="hover:text-neutral-300">
            Français
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-es" className="hover:text-neutral-300">
            Español
          </Link>
          <span>•</span>
          <span className="text-neutral-300">Italiano</span>
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
          <p>© 2026 Yigit Karabulut. Tutti i diritti riservati.</p>
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
