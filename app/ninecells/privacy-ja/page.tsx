import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyJA() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · 2026年5月21日施行
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: '本プライバシーポリシーは、NineCellsモバイルアプリ(以下「本アプリ」)が情報をどのように扱うかを説明します。NineCellsはYigit Karabulut(以下「開発者」)が開発するオフラインファーストの数独ゲームです。' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. 収集しない情報
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCellsは個人を識別できる情報を<strong>一切</strong>収集、保存、販売、共有しません。アカウントは不要で、氏名・メールアドレス・電話番号・位置情報を要求せず、サードパーティの広告や解析SDKを含みません。' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. 端末内にのみ保存されるデータ
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'ゲーム体験を提供するために、本アプリは以下のデータを<strong>端末内にのみ</strong>保存します:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>ゲームの進行(現在のパズル、盤面、タイマー)</li>
              <li>統計(クリア数、ベストタイム、連続記録)</li>
              <li>アプリ設定(テーマ、サウンド、ハプティクス、難易度)</li>
            </ul>
            <p className="mt-3">
              これらのデータは、本アプリでiCloudを有効にしていない限り端末外に出ません。有効な場合は、AppleのiCloudサービスを通じてご自身のApple端末間でのみ同期されます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. iCloud同期
            </h2>
            <p>
              iOSの設定でNineCellsのiCloudを有効にすると、ゲームデータはあなたのプライベートiCloudコンテナに保存され、Appleのプライバシーポリシーに従ってAppleが取り扱います。開発者はそのデータにアクセスできません。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Appleのサービス
            </h2>
            <p>
              本アプリはLive Activities、watchOS連携、Game Centerなど標準のAppleサービスを利用する場合があります(該当する場合)。これらのサービスが処理するデータはAppleの独自のプライバシーポリシーに従います。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. 子どものプライバシー
            </h2>
            <p>
              NineCellsはあらゆる年齢層に適しており、子どもから情報を意図的に収集することはありません。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. 本ポリシーの変更
            </h2>
            <p>
              本ポリシーは、新機能や法的要件を反映するために随時更新されることがあります。最新版は常にこのURLで公開されます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. お問い合わせ
            </h2>
            <p>
              本プライバシーポリシーに関するお問い合わせは下記まで:
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
          <span className="text-neutral-300">日本語</span>
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
          <p>© 2026 Yigit Karabulut. All rights reserved.</p>
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
