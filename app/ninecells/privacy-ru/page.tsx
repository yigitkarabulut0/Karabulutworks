import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyRU() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Политика конфиденциальности
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · Действует с 21 мая 2026 г.
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Настоящая Политика конфиденциальности описывает, как мобильное приложение NineCells (далее «Приложение») работает с информацией. NineCells — это offline-first игра в судоку, разработанная Yigit Karabulut (далее «Разработчик»).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Какие данные мы не собираем
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells <strong>не</strong> собирает, не хранит, не продаёт и не передаёт никакие персональные данные. Приложение не требует регистрации, не запрашивает имя, e-mail, телефон или геолокацию и не содержит сторонних рекламных или аналитических SDK.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Данные, хранимые локально на вашем устройстве
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Чтобы обеспечить игровой процесс, Приложение хранит следующие данные <strong>только на вашем устройстве</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Прогресс игры (текущая головоломка, состояние поля, таймер)</li>
              <li>Статистика (решённые головоломки, лучшее время, серии)</li>
              <li>Настройки приложения (тема, звук, тактильный отклик, сложность)</li>
            </ul>
            <p className="mt-3">
              Эти данные не покидают ваше устройство, если вы не включили iCloud для Приложения; в этом случае они синхронизируются между вашими Apple-устройствами через сервис iCloud.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Синхронизация iCloud
            </h2>
            <p>
              Если вы включите iCloud для NineCells в настройках iOS, ваши игровые данные сохраняются в вашем приватном iCloud-контейнере и обрабатываются Apple в соответствии с её политикой конфиденциальности. Разработчик не имеет к ним доступа.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Сервисы Apple
            </h2>
            <p>
              Приложение может использовать стандартные сервисы Apple, такие как Live Activities, подключение watchOS и Game Center (где применимо). Данные, обрабатываемые этими сервисами, регулируются собственной политикой конфиденциальности Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Конфиденциальность детей
            </h2>
            <p>
              NineCells подходит для любого возраста и не собирает сведения о детях преднамеренно.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Изменения в политике
            </h2>
            <p>
              Политика может периодически обновляться для отражения новых функций приложения или законодательных требований. Актуальная версия всегда доступна по этому URL.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Контакты
            </h2>
            <p>
              По вопросам, связанным с этой Политикой, обращайтесь:
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
          <span className="text-neutral-300">Русский</span>
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
          <p>© 2026 Yigit Karabulut. Все права защищены.</p>
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
