import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyKO() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            개인정보 처리방침
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · 2026년 5월 21일부터 시행
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: '본 개인정보 처리방침은 NineCells 모바일 앱(“본 앱”)이 정보를 어떻게 처리하는지 설명합니다. NineCells는 Yigit Karabulut(“개발자”)가 개발한 오프라인 우선 스도쿠 게임입니다.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. 수집하지 않는 정보
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells는 개인을 식별할 수 있는 어떠한 정보도 <strong>수집·저장·판매·공유하지 않습니다</strong>. 본 앱은 계정이 필요 없고, 이름·이메일·전화·위치를 요구하지 않으며, 타사 광고나 분석 SDK도 포함하지 않습니다.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. 기기에만 저장되는 데이터
            </h2>
            <p dangerouslySetInnerHTML={{ __html: '게임 경험을 제공하기 위해 본 앱은 다음 데이터를 <strong>기기에만</strong> 저장합니다:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>게임 진행(현재 퍼즐, 보드 상태, 타이머)</li>
              <li>통계(완료한 퍼즐, 최고 기록, 연속 기록)</li>
              <li>앱 환경 설정(테마, 사운드, 햅틱, 난이도)</li>
            </ul>
            <p className="mt-3">
              본 앱에서 iCloud를 활성화하지 않는 한 이 데이터는 기기를 떠나지 않습니다. 활성화한 경우 Apple의 iCloud 서비스를 통해 본인의 Apple 기기 간에만 동기화됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. iCloud 동기화
            </h2>
            <p>
              iOS 설정에서 NineCells의 iCloud를 활성화하면 게임 데이터는 본인의 비공개 iCloud 컨테이너에 저장되고, Apple의 개인정보 처리방침에 따라 Apple이 처리합니다. 개발자는 이 데이터에 접근할 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Apple 서비스
            </h2>
            <p>
              본 앱은 해당되는 경우 Live Activities, watchOS 연결, Game Center 등 표준 Apple 시스템 서비스를 사용할 수 있습니다. 이러한 서비스가 처리하는 데이터는 Apple의 개인정보 처리방침에 따라 처리됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. 어린이의 개인정보
            </h2>
            <p>
              NineCells는 모든 연령에 적합하며, 어린이로부터 의도적으로 정보를 수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. 본 방침의 변경
            </h2>
            <p>
              본 방침은 새로운 앱 기능이나 법적 요구 사항을 반영하기 위해 수시로 업데이트될 수 있습니다. 최신 버전은 항상 이 URL에서 확인할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. 문의
            </h2>
            <p>
              본 개인정보 처리방침에 대한 문의는 아래로 연락 주세요:
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
          <span className="text-neutral-300">한국어</span>
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
          <p>© 2026 Yigit Karabulut. 모든 권리 보유.</p>
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
