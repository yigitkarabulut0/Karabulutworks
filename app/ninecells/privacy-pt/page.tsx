import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Política de Privacidade",
  description: "Política de Privacidade do jogo NineCells Sudoku.",
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
            <p>
              Esta Política de Privacidade descreve como o aplicativo móvel
              NineCells (o &ldquo;Aplicativo&rdquo;) trata as informações. O
              NineCells é um jogo de Sudoku offline desenvolvido por Yigit
              Karabulut (o &ldquo;Desenvolvedor&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Informações que Não Coletamos
            </h2>
            <p>
              O NineCells <strong>não</strong> coleta, armazena, vende nem
              compartilha qualquer informação pessoalmente identificável. O
              Aplicativo não exige criação de conta e não solicita nome,
              e-mail, telefone ou localização. O Aplicativo também não
              contém SDKs de publicidade ou análise de terceiros.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Dados Armazenados Localmente no Seu Dispositivo
            </h2>
            <p>
              Para oferecer a experiência de jogo, o Aplicativo armazena os
              seguintes dados <strong>apenas no seu dispositivo</strong>:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Progresso do jogo (puzzle atual, estado do tabuleiro,
                cronômetro)
              </li>
              <li>
                Estatísticas (puzzles concluídos, melhores tempos,
                sequências)
              </li>
              <li>
                Preferências (tema, som, vibração, dificuldade)
              </li>
            </ul>
            <p className="mt-3">
              Esses dados não saem do seu dispositivo, a menos que você
              tenha o iCloud habilitado para o Aplicativo; nesse caso, os
              dados são sincronizados entre os seus próprios dispositivos
              Apple através do serviço iCloud da Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Sincronização via iCloud
            </h2>
            <p>
              Se você ativar o iCloud para o NineCells nas configurações do
              iOS, os dados do jogo serão armazenados no seu contêiner
              privado do iCloud e tratados pela Apple sob a política de
              privacidade da Apple. O Desenvolvedor não tem acesso a esses
              dados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Serviços da Apple
            </h2>
            <p>
              O Aplicativo pode utilizar serviços padrão do sistema da Apple,
              como Live Activities, conectividade com watchOS e Game Center
              (quando aplicável). Todos os dados processados por esses
              serviços estão sujeitos à política de privacidade da
              própria Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Privacidade de Crianças
            </h2>
            <p>
              O NineCells é adequado para todas as idades e não coleta
              conscientemente qualquer informação de crianças.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Alterações nesta Política
            </h2>
            <p>
              Esta política pode ser atualizada ocasionalmente para refletir
              novos recursos do Aplicativo ou exigências legais. A versão
              mais recente estará sempre disponível nesta URL.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade, entre
              em contato:
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
          <Link href="/ninecells/privacy-tr" className="hover:text-neutral-300">
            Türkçe
          </Link>
          <span>•</span>
          <span className="text-neutral-300">Português</span>
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
