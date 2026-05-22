import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NineCells - Privacy Policy",
  description: "Privacy Policy for the NineCells Sudoku game.",
};

export default function NineCellsPrivacyVI() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-light tracking-tight md:text-5xl">
            Chính sách bảo mật
          </h1>
          <p className="text-sm text-neutral-500">
            NineCells · Có hiệu lực từ ngày 21 tháng 5 năm 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <p dangerouslySetInnerHTML={{ __html: 'Chính sách bảo mật này mô tả cách ứng dụng di động NineCells (“Ứng dụng”) xử lý thông tin. NineCells là một trò chơi Sudoku ưu tiên ngoại tuyến do Yigit Karabulut (“Nhà phát triển”) phát triển.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              1. Thông tin chúng tôi không thu thập
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'NineCells <strong>không</strong> thu thập, lưu trữ, bán hoặc chia sẻ bất kỳ thông tin nhận dạng cá nhân nào. Ứng dụng không yêu cầu tài khoản, không hỏi tên, email, điện thoại hoặc vị trí của bạn và không chứa SDK quảng cáo hoặc phân tích của bên thứ ba.' }} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              2. Dữ liệu được lưu cục bộ trên thiết bị
            </h2>
            <p dangerouslySetInnerHTML={{ __html: 'Để mang lại trải nghiệm chơi, Ứng dụng lưu các dữ liệu sau <strong>chỉ trên thiết bị của bạn</strong>:' }} />
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Tiến trình chơi (câu đố hiện tại, trạng thái bảng, đồng hồ)</li>
              <li>Thống kê (câu đố đã hoàn thành, thời gian tốt nhất, chuỗi)</li>
              <li>Tuỳ chọn (chủ đề, âm thanh, rung phản hồi, độ khó)</li>
            </ul>
            <p className="mt-3">
              Những dữ liệu này không rời khỏi thiết bị của bạn trừ khi bạn bật iCloud cho Ứng dụng; khi đó, dữ liệu được đồng bộ giữa các thiết bị Apple của bạn qua dịch vụ iCloud của Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              3. Đồng bộ iCloud
            </h2>
            <p>
              Nếu bạn bật iCloud cho NineCells trong cài đặt iOS, dữ liệu trò chơi của bạn được lưu trong container iCloud riêng tư và do Apple xử lý theo chính sách bảo mật của Apple. Nhà phát triển không có quyền truy cập.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              4. Dịch vụ của Apple
            </h2>
            <p>
              Ứng dụng có thể sử dụng các dịch vụ Apple tiêu chuẩn như Live Activities, kết nối watchOS và Game Center (nếu có). Mọi dữ liệu mà các dịch vụ này xử lý đều tuân theo chính sách bảo mật của Apple.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              5. Quyền riêng tư của trẻ em
            </h2>
            <p>
              NineCells phù hợp với mọi lứa tuổi và không cố ý thu thập thông tin từ trẻ em.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              6. Thay đổi chính sách
            </h2>
            <p>
              Chính sách này có thể được cập nhật theo thời gian để phản ánh tính năng mới hoặc yêu cầu pháp lý. Phiên bản mới nhất luôn có sẵn tại URL này.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-light text-white">
              7. Liên hệ
            </h2>
            <p>
              Mọi câu hỏi về chính sách này, vui lòng liên hệ:
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
          <Link href="/ninecells/privacy-hi" className="hover:text-neutral-300">
            हिन्दी
          </Link>
          <span>•</span>
          <Link href="/ninecells/privacy-id" className="hover:text-neutral-300">
            Indonesia
          </Link>
          <span>•</span>
          <span className="text-neutral-300">Tiếng Việt</span>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-neutral-600">
          <p>© 2026 Yigit Karabulut. Bảo lưu mọi quyền.</p>
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
