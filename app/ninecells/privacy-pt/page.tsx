import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyPT() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Política de Privacidade
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · Em vigor desde 21 de maio de 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Esta Política de Privacidade descreve como o aplicativo móvel NineCells (o “App”) lida com informações. NineCells é um jogo de Sudoku offline-first desenvolvido por Yigit Karabulut (o “Desenvolvedor”).' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Informações que Não Coletamos
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'O NineCells <strong>não</strong> coleta, armazena, vende nem compartilha informações de identificação pessoal. O App não exige conta, não pede seu nome, e-mail, telefone ou localização e não contém SDKs de publicidade ou análise de terceiros.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Dados Armazenados Localmente no Seu Dispositivo
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Para oferecer a experiência do jogo, o App armazena os seguintes dados <strong>apenas no seu dispositivo</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Progresso do jogo (puzzle atual, estado do tabuleiro, cronômetro)</li>
              <li>Estatísticas (puzzles concluídos, melhores tempos, sequências)</li>
              <li>Preferências do app (tema, som, hápticos, dificuldade)</li>
            </ul>
            <p className="mt-3">
              Esses dados nunca saem do seu dispositivo, a menos que o iCloud esteja ativado para o App; nesse caso, são sincronizados entre seus próprios dispositivos Apple através do serviço iCloud da Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Sincronização com iCloud
            </h2>
            <p>
              Se você ativar o iCloud para o NineCells nas configurações do iOS, seus dados de jogo são armazenados em seu contêiner privado do iCloud e tratados pela Apple sob a política de privacidade dela. O Desenvolvedor não tem acesso a esses dados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Serviços da Apple
            </h2>
            <p>
              O App pode usar serviços padrão da Apple, como Live Activities, conectividade watchOS e Game Center (quando aplicável). Quaisquer dados processados por esses serviços são regidos pela política de privacidade da Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Privacidade Infantil
            </h2>
            <p>
              O NineCells é adequado para todas as idades e não coleta deliberadamente nenhuma informação de crianças.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Alterações nesta Política
            </h2>
            <p>
              Esta política pode ser atualizada de tempos em tempos para refletir novos recursos do App ou requisitos legais. A versão mais recente estará sempre disponível neste URL.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Contato
            </h2>
            <p>
              Para quaisquer dúvidas sobre esta Política de Privacidade, entre em contato:
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
          <span className="text-neutral-300">Português</span>
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
          <p>© 2026 Yigit Karabulut. Todos os direitos reservados.</p>
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
