import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyID() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · Berlaku 21 Mei 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Kebijakan Privasi ini menjelaskan bagaimana aplikasi seluler NineCells (“App”) menangani informasi. NineCells adalah game Sudoku offline-first yang dikembangkan oleh Yigit Karabulut (“Pengembang”).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Informasi yang Tidak Kami Kumpulkan
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells <strong>tidak</strong> mengumpulkan, menyimpan, menjual, atau membagikan informasi pengenal pribadi apa pun. App tidak memerlukan akun, tidak meminta nama, email, telepon, atau lokasi, dan tidak berisi SDK iklan atau analitik pihak ketiga.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Data yang Disimpan Secara Lokal di Perangkat
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Untuk memberikan pengalaman permainan, App menyimpan data berikut <strong>hanya di perangkatmu</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Kemajuan permainan (teka-teki saat ini, status papan, pewaktu)</li>
              <li>Statistik (teka-teki selesai, waktu terbaik, beruntun)</li>
              <li>Preferensi (tema, suara, haptik, kesulitan)</li>
            </ul>
            <p className="mt-3">
              Data ini tidak pernah meninggalkan perangkatmu kecuali kamu mengaktifkan iCloud untuk App; jika aktif, data disinkronkan antar perangkat Apple-mu melalui layanan iCloud milik Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Sinkronisasi iCloud
            </h2>
            <p>
              Jika kamu mengaktifkan iCloud untuk NineCells di pengaturan iOS, data permainanmu disimpan di kontainer iCloud pribadimu dan ditangani oleh Apple sesuai kebijakan privasinya. Pengembang tidak memiliki akses ke data tersebut.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Layanan Apple
            </h2>
            <p>
              App dapat menggunakan layanan Apple standar seperti Live Activities, konektivitas watchOS, dan Game Center (jika berlaku). Data yang diproses layanan ini tunduk pada kebijakan privasi Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Privasi Anak
            </h2>
            <p>
              NineCells cocok untuk semua usia dan tidak dengan sengaja mengumpulkan informasi dari anak-anak.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Perubahan Kebijakan
            </h2>
            <p>
              Kebijakan ini dapat diperbarui sewaktu-waktu untuk mencerminkan fitur baru atau persyaratan hukum. Versi terbaru selalu tersedia di URL ini.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Kontak
            </h2>
            <p>
              Untuk pertanyaan tentang kebijakan ini, hubungi:
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
          <span className="text-neutral-300">Indonesia</span>
          <span>•</span>
          <Link href="/ninecells/privacy-vi" className="hover:text-neutral-300">
            Tiếng Việt
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-neutral-600">
          <p>© 2026 Yigit Karabulut. Hak cipta dilindungi.</p>
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
