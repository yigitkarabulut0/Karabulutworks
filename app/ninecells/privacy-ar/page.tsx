import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyAR() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white" dir="rtl">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            سياسة الخصوصية
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · سارية من 21 مايو 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'تصف سياسة الخصوصية هذه كيفية تعامل تطبيق NineCells للجوال (“التطبيق”) مع المعلومات. NineCells لعبة سودوكو تعمل دون اتصال أولًا، طوّرها Yigit Karabulut (“المطوّر”).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. المعلومات التي لا نجمعها
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'لا يقوم NineCells <strong>بجمع أو تخزين أو بيع أو مشاركة</strong> أي معلومات تعريف شخصية. لا يتطلب التطبيق حسابًا، ولا يطلب اسمك أو بريدك الإلكتروني أو هاتفك أو موقعك، ولا يحتوي على أي SDK إعلانات أو تحليلات تابع لجهات خارجية.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. بيانات محفوظة محليًا على جهازك
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'لتقديم تجربة اللعب، يقوم التطبيق بتخزين البيانات التالية <strong>على جهازك فقط</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>تقدم اللعبة (اللغز الحالي، حالة اللوحة، المؤقت)</li>
              <li>الإحصاءات (الألغاز المكتملة، أفضل الأوقات، السلاسل)</li>
              <li>تفضيلات التطبيق (السمة، الصوت، الاهتزاز، الصعوبة)</li>
            </ul>
            <p className="mt-3">
              لا تغادر هذه البيانات جهازك إلا إذا فعّلت iCloud للتطبيق، وعندها تتم مزامنتها بين أجهزة Apple الخاصة بك عبر خدمة iCloud من Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. مزامنة iCloud
            </h2>
            <p>
              إذا فعّلت iCloud لتطبيق NineCells من إعدادات iOS، تُحفظ بيانات اللعبة في حاوية iCloud الخاصة بك وتتعامل معها Apple وفقًا لسياسة خصوصيتها. لا يمكن للمطوّر الوصول إليها.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. خدمات Apple
            </h2>
            <p>
              قد يستخدم التطبيق خدمات Apple القياسية مثل Live Activities، اتصال watchOS و Game Center (حسب الاقتضاء). تخضع أي بيانات تعالجها هذه الخدمات لسياسة خصوصية Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. خصوصية الأطفال
            </h2>
            <p>
              NineCells مناسب لجميع الأعمار ولا يجمع عن قصد أي معلومات من الأطفال.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. تعديلات هذه السياسة
            </h2>
            <p>
              قد تُحدّث هذه السياسة من وقت لآخر لتعكس ميزات جديدة أو متطلبات قانونية. سيكون أحدث إصدار متاحًا دائمًا على هذا الرابط.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. التواصل
            </h2>
            <p>
              لأي استفسار بشأن سياسة الخصوصية هذه، تواصل معنا:
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
          <span className="text-neutral-300">العربية</span>
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
          <p>© 2026 Yigit Karabulut. جميع الحقوق محفوظة.</p>
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
