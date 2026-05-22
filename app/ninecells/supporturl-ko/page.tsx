import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Support",
  description: "NineCells Sudoku game support page. Contact: yigit@karabulut.work",
};

const screenshots = [
  "/work/ninecells/ko/01-device-bottom.jpg",
  "/work/ninecells/ko/02-device-bottom.jpg",
  "/work/ninecells/ko/03-device-bottom.jpg",
  "/work/ninecells/ko/04-device-bottom.jpg",
];

export default function NineCellsSupportKO() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-light tracking-tight md:text-5xl">
            NineCells
          </h1>
          <p className="text-lg text-neutral-400">
            모던 스도쿠 — 깔끔한 타이포그래피, 차분한 페이스, watchOS와 라이브 액티비티 지원.
          </p>
        </div>

        {/* Screenshots */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {screenshots.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={`NineCells 스크린샷 ${i + 1}`}
                width={320}
                height={693}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center">
          <h2 className="mb-2 text-xl font-light">지원 및 문의</h2>
          <p className="mb-4 text-neutral-400">
            질문, 제안, 또는 버그 신고는 언제든 편하게 연락 주세요.
          </p>
          <a
            href="mailto:yigit@karabulut.work"
            className="text-lg text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
          >
            yigit@karabulut.work
          </a>
        </div>

        {/* Language Switcher */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-neutral-500">
          <Link href="/ninecells/supporturl-en" className="hover:text-neutral-300">
            English
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-tr" className="hover:text-neutral-300">
            Türkçe
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-pt" className="hover:text-neutral-300">
            Português
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-ja" className="hover:text-neutral-300">
            日本語
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-zh" className="hover:text-neutral-300">
            简体中文
          </Link>
          <span>•</span>
          <span className="text-neutral-300">한국어</span>
          <span>•</span>
          <Link href="/ninecells/supporturl-de" className="hover:text-neutral-300">
            Deutsch
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-fr" className="hover:text-neutral-300">
            Français
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-es" className="hover:text-neutral-300">
            Español
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-it" className="hover:text-neutral-300">
            Italiano
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-ru" className="hover:text-neutral-300">
            Русский
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-es-mx" className="hover:text-neutral-300">
            Español (MX)
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-ar" className="hover:text-neutral-300">
            العربية
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-hi" className="hover:text-neutral-300">
            हिन्दी
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-id" className="hover:text-neutral-300">
            Indonesia
          </Link>
          <span>•</span>
          <Link href="/ninecells/supporturl-vi" className="hover:text-neutral-300">
            Tiếng Việt
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-neutral-600">
          <p>© 2026 Yigit Karabulut. 모든 권리 보유.</p>
          <Link href="https://karabulut.work" className="mt-2 inline-block hover:text-neutral-400">
            karabulut.work
          </Link>
        </div>
      </div>
    </main>
  );
}
