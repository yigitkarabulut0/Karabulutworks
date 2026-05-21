import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Gizlilik Politikası",
  description: "NineCells Sudoku oyunu için gizlilik politikası.",
};

export default function NineCellsPrivacyTR() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Gizlilik Politikası
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · Yürürlük tarihi 21 Mayıs 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p>
              Bu Gizlilik Politikası, NineCells mobil uygulamasının
              (&ldquo;Uygulama&rdquo;) bilgileri nasıl işlediğini açıklar.
              NineCells, Yigit Karabulut (&ldquo;Geliştirici&rdquo;)
              tarafından geliştirilen çevrimdışı çalışan bir Sudoku
              oyunudur.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Toplamadığımız Bilgiler
            </h2>
            <p>
              NineCells, kişisel olarak tanımlanabilecek hiçbir bilgiyi{" "}
              <strong>toplamaz, depolamaz, satmaz veya paylaşmaz</strong>.
              Uygulama hesap açmanızı gerektirmez; adınız, e-posta
              adresiniz, telefon numaranız veya konumunuz sorulmaz.
              Uygulama içinde üçüncü taraf reklam veya analiz SDK&rsquo;ları
              bulunmaz.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Yalnızca Cihazınızda Saklanan Veriler
            </h2>
            <p>
              Oyun deneyimini sunabilmek için Uygulama aşağıdaki verileri{" "}
              <strong>yalnızca cihazınızda</strong> saklar:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Oyun ilerlemesi (mevcut bulmaca, tahta durumu, sayaç)</li>
              <li>İstatistikler (tamamlanan bulmacalar, en iyi süreler, seriler)</li>
              <li>Uygulama tercihleri (tema, ses, dokunsal geri bildirim, zorluk)</li>
            </ul>
            <p className="mt-3">
              Bu veriler, Uygulama için iCloud&rsquo;u etkinleştirmediğiniz
              sürece cihazınızdan dışarı çıkmaz. iCloud açıksa veriler Apple
              hizmetleri aracılığıyla yalnızca kendi Apple cihazlarınız
              arasında senkronize edilir.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. iCloud Senkronizasyonu
            </h2>
            <p>
              iOS ayarlarından NineCells için iCloud&rsquo;u
              etkinleştirirseniz, oyun verileriniz özel iCloud
              konteynerinizde saklanır ve Apple tarafından kendi gizlilik
              politikası kapsamında işlenir. Geliştiricinin bu verilere
              erişimi yoktur.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Apple Hizmetleri
            </h2>
            <p>
              Uygulama; Live Activities, watchOS bağlantısı ve Game Center
              gibi standart Apple sistem hizmetlerini kullanabilir. Bu
              hizmetler tarafından işlenen tüm veriler Apple&rsquo;ın kendi
              gizlilik politikasına tabidir.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Çocukların Gizliliği
            </h2>
            <p>
              NineCells her yaşa uygundur ve çocuklardan bilerek hiçbir
              bilgi toplamaz.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Politikadaki Değişiklikler
            </h2>
            <p>
              Bu politika, yeni Uygulama özelliklerini veya yasal
              gereklilikleri yansıtmak için zaman zaman güncellenebilir. En
              güncel sürüm her zaman bu URL&rsquo;de yer alır.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. İletişim
            </h2>
            <p>
              Bu Gizlilik Politikası hakkında sorularınız için lütfen iletişime
              geçin:
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
        <div className="mt-12 flex justify-center gap-4 text-sm text-neutral-500">
          <Link href="/ninecells/privacy-en" className="hover:text-neutral-300">
            English
          </Link>
          <span>•</span>
          <span className="text-neutral-300">Türkçe</span>
          <span>•</span>
          <Link href="/ninecells/privacy-pt" className="hover:text-neutral-300">
            Português
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-neutral-600">
          <p>© 2026 Yigit Karabulut. Tüm hakları saklıdır.</p>
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
