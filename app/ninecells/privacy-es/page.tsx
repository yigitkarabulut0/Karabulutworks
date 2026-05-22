import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyES() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Política de privacidad
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · En vigor desde el 21 de mayo de 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Esta política de privacidad describe cómo la aplicación móvil NineCells (la “App”) gestiona la información. NineCells es un juego de Sudoku offline-first desarrollado por Yigit Karabulut (el “Desarrollador”).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Información que no recopilamos
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells <strong>no</strong> recopila, almacena, vende ni comparte información de identificación personal. La App no requiere cuenta, no pide nombre, correo, teléfono ni ubicación, y no contiene SDK de publicidad o analítica de terceros.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Datos almacenados localmente en tu dispositivo
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Para ofrecer la experiencia de juego, la App almacena los siguientes datos <strong>solo en tu dispositivo</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Progreso de juego (puzzle actual, estado del tablero, temporizador)</li>
              <li>Estadísticas (puzzles completados, mejores tiempos, rachas)</li>
              <li>Preferencias (tema, sonido, hápticos, dificultad)</li>
            </ul>
            <p className="mt-3">
              Estos datos nunca salen de tu dispositivo a menos que tengas iCloud activado para la App; en ese caso, se sincronizan entre tus propios dispositivos Apple a través del servicio iCloud de Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Sincronización con iCloud
            </h2>
            <p>
              Si activas iCloud para NineCells en los ajustes de iOS, tus datos de juego se almacenan en tu contenedor privado de iCloud y los gestiona Apple según su política de privacidad. El Desarrollador no tiene acceso a ellos.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Servicios de Apple
            </h2>
            <p>
              La App puede usar servicios estándar de Apple como Live Activities, conectividad watchOS y Game Center (cuando proceda). Cualquier dato procesado por estos servicios se rige por la propia política de privacidad de Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Privacidad infantil
            </h2>
            <p>
              NineCells es apta para todas las edades y no recopila intencionadamente información de menores.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Cambios en esta política
            </h2>
            <p>
              Esta política puede actualizarse ocasionalmente para reflejar nuevas funciones o requisitos legales. La última versión estará siempre disponible en esta URL.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Contacto
            </h2>
            <p>
              Para cualquier consulta sobre esta política, contacta con:
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
          <span className="text-neutral-300">Español</span>
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
          <p>© 2026 Yigit Karabulut. Todos los derechos reservados.</p>
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
