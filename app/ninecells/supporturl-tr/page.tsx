import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Support",
  description: "NineCells Sudoku game support page. Contact: yigit@karabulut.work",
};

const screenshots = [
  "/work/ninecells/tr/01-device-bottom.jpg",
  "/work/ninecells/tr/02-device-bottom.jpg",
  "/work/ninecells/tr/03-device-bottom.jpg",
  "/work/ninecells/tr/04-device-bottom.jpg",
];

export default function NineCellsSupportTR() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-light tracking-tight md:text-5xl">
            NineCells
          </h1>
          <p className="text-lg text-neutral-400">
            Modern Sudoku — Temiz tipografi, sakin tempo, watchOS desteği ve Live Activities.
          </p>
        </div>

        {/* Screenshots */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {screenshots.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={`NineCells ekran görüntüsü ${i + 1}`}
                width={320}
                height={693}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center">
          <h2 className="mb-2 text-xl font-light">Destek & İletişim</h2>
          <p className="mb-4 text-neutral-400">
            Sorularınız, önerileriniz veya hata bildirimleriniz için bizimle iletişime geçin.
          </p>
          <a
            href="mailto:yigit@karabulut.work"
            className="text-lg text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
          >
            yigit@karabulut.work
          </a>
        </div>

        {/* Language Switcher */}
        <div className="mt-8 flex justify-center gap-4 text-sm text-neutral-500">
          <Link href="/ninecells/supporturl-en" className="hover:text-neutral-300">
            English
          </Link>
          <span>•</span>
          <span className="text-neutral-300">Türkçe</span>
          <span>•</span>
          <Link href="/ninecells/supporturl-pt" className="hover:text-neutral-300">
            Português
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-neutral-600">
          <p>© 2025 Yigit Karabulut. Tüm hakları saklıdır.</p>
          <Link href="https://karabulut.work" className="mt-2 inline-block hover:text-neutral-400">
            karabulut.work
          </Link>
        </div>
      </div>
    </main>
  );
}
