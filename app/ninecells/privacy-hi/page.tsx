import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyHI() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            गोपनीयता नीति
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · 21 मई 2026 से प्रभावी
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'यह गोपनीयता नीति बताती है कि NineCells मोबाइल ऐप (“ऐप”) जानकारी को कैसे संभालता है। NineCells, Yigit Karabulut (“डेवलपर”) द्वारा बनाया गया ऑफ़लाइन-फ़र्स्ट सुडोकू गेम है।' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. हम जो जानकारी एकत्र नहीं करते
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells किसी भी प्रकार की व्यक्तिगत पहचान वाली जानकारी को <strong>एकत्र, संग्रहीत, बेचता या साझा नहीं</strong> करता। ऐप के लिए खाता ज़रूरी नहीं है, यह आपका नाम, ईमेल, फ़ोन या लोकेशन नहीं माँगता और इसमें कोई तीसरे पक्ष का विज्ञापन या एनालिटिक्स SDK नहीं है।' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. आपके डिवाइस पर लोकल रूप से सहेजे जाने वाले डेटा
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'गेम अनुभव देने के लिए, ऐप निम्न डेटा को <strong>केवल आपके डिवाइस पर</strong> सहेजता है:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>गेम प्रगति (मौजूदा पहेली, बोर्ड स्थिति, टाइमर)</li>
              <li>आँकड़े (हल पहेलियाँ, सर्वश्रेष्ठ समय, लय)</li>
              <li>ऐप वरीयताएँ (थीम, ध्वनि, हैप्टिक्स, कठिनाई)</li>
            </ul>
            <p className="mt-3">
              जब तक आप ऐप के लिए iCloud चालू नहीं करते, यह डेटा आपके डिवाइस से बाहर नहीं जाता; चालू करने पर यह Apple की iCloud सेवा के ज़रिए केवल आपके अपने Apple डिवाइसों के बीच सिंक होता है।
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. iCloud सिंक
            </h2>
            <p>
              अगर आप iOS सेटिंग्स में NineCells के लिए iCloud चालू करते हैं, तो आपके गेम डेटा आपके निजी iCloud कंटेनर में सहेजे जाते हैं और Apple अपनी गोपनीयता नीति के तहत उन्हें संभालता है। डेवलपर की उन तक पहुँच नहीं है।
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Apple सेवाएँ
            </h2>
            <p>
              ऐप ज़रूरत के मुताबिक Live Activities, watchOS कनेक्टिविटी और Game Center जैसी मानक Apple सेवाएँ इस्तेमाल कर सकता है। इन सेवाओं द्वारा प्रोसेस होने वाला कोई भी डेटा Apple की अपनी गोपनीयता नीति के अधीन है।
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. बच्चों की गोपनीयता
            </h2>
            <p>
              NineCells हर उम्र के लिए उपयुक्त है और जानबूझकर बच्चों से कोई जानकारी नहीं लेता।
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. इस नीति में परिवर्तन
            </h2>
            <p>
              नई सुविधाओं या कानूनी आवश्यकताओं के अनुसार इस नीति को समय-समय पर अपडेट किया जा सकता है। नवीनतम संस्करण हमेशा इसी URL पर उपलब्ध रहेगा।
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. संपर्क
            </h2>
            <p>
              इस गोपनीयता नीति के बारे में किसी भी प्रश्न के लिए संपर्क करें:
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
          <span className="text-neutral-300">हिन्दी</span>
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
          <p>© 2026 Yigit Karabulut. सर्वाधिकार सुरक्षित।</p>
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
