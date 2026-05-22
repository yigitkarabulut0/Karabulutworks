import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyZH() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            隐私政策
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · 自 2026 年 5 月 21 日生效
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: '本隐私政策说明 NineCells 移动应用程序(以下简称“本应用”)如何处理信息。NineCells 是由 Yigit Karabulut(以下简称“开发者”)开发的离线优先数独游戏。' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. 我们不收集的信息
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells <strong>不</strong>收集、存储、出售或分享任何可识别个人身份的信息。本应用不需要账户,不会询问您的姓名、邮箱、电话或位置,也不包含任何第三方广告或分析 SDK。' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. 仅存储在您设备上的数据
            </h2>
            <p dangerouslySetInnerHTML={{ __html: '为了提供游戏体验,本应用仅在您的<strong>设备本地</strong>存储以下数据:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>游戏进度(当前谜题、棋盘状态、计时)</li>
              <li>统计数据(完成的谜题、最佳时间、连胜)</li>
              <li>应用偏好(主题、声音、触感、难度)</li>
            </ul>
            <p className="mt-3">
              除非您为本应用启用了 iCloud,否则这些数据永远不会离开您的设备;启用后,数据通过 Apple 的 iCloud 服务在您自己的 Apple 设备之间同步。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. iCloud 同步
            </h2>
            <p>
              如果您在 iOS 设置中为 NineCells 启用了 iCloud,您的游戏数据将存储在您专属的 iCloud 容器中,并由 Apple 根据其隐私政策处理。开发者无权访问这些数据。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Apple 服务
            </h2>
            <p>
              本应用可能使用 Live Activities、watchOS 连接、Game Center 等标准 Apple 系统服务(如适用)。这些服务处理的任何数据均受 Apple 自有隐私政策约束。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. 儿童隐私
            </h2>
            <p>
              NineCells 适合所有年龄段,且不会有意收集儿童信息。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. 本政策的变更
            </h2>
            <p>
              本政策可能会不定期更新,以反映新的应用功能或法律要求。最新版本始终可在本 URL 获取。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. 联系方式
            </h2>
            <p>
              如对本隐私政策有任何疑问,请联系:
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
          <span className="text-neutral-300">简体中文</span>
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
          <p>© 2026 Yigit Karabulut. 保留所有权利。</p>
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
