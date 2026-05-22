import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyEN() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · Effective 21 May 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'This Privacy Policy describes how the NineCells mobile application (the “App”) handles information. NineCells is an offline-first Sudoku game developed by Yigit Karabulut (the “Developer”).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Information We Do Not Collect
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells does <strong>not</strong> collect, store, sell, or share any personally identifiable information. The App does not require an account, does not ask for your name, email, phone number, or location, and does not contain third-party advertising or analytics SDKs.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Data Stored Locally on Your Device
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'To provide the game experience, the App stores the following data <strong>only on your device</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Game progress (current puzzle, board state, timer)</li>
              <li>Statistics (completed puzzles, best times, streaks)</li>
              <li>App preferences (theme, sound, haptics, difficulty)</li>
            </ul>
            <p className="mt-3">
              This data never leaves your device unless you have iCloud enabled for the App, in which case it is synchronised between your own Apple devices through Apple’s iCloud service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. iCloud Sync
            </h2>
            <p>
              If you enable iCloud for NineCells in your iOS settings, your game data is stored in your private iCloud container and handled by Apple under Apple’s privacy policy. The Developer has no access to that data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Apple Services
            </h2>
            <p>
              The App may use standard Apple system services such as Live Activities, watchOS connectivity, and Game Center (where applicable). Any data processed by these services is governed by Apple’s own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Children’s Privacy
            </h2>
            <p>
              NineCells is suitable for all ages and does not knowingly collect any information from children.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Changes to This Policy
            </h2>
            <p>
              This policy may be updated occasionally to reflect new App features or legal requirements. The latest version will always be available at this URL.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Contact
            </h2>
            <p>
              For any questions about this Privacy Policy, please contact:
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
          <span className="text-neutral-300">English</span>
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
          <p>© 2026 Yigit Karabulut. All rights reserved.</p>
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
