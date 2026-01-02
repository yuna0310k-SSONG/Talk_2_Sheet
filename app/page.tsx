"use client";

import Link from "next/link";

const FEATURES = [
  {
    icon: <i className="ri-upload-cloud-2-line"></i>,
    title: "파일 하나만 올리면",
    desc: "카카오톡에서 내보낸 txt 파일을 그대로 올리면 돼요.",
  },
  {
    icon: <i className="ri-filter-3-line"></i>,
    title: "필요한 대화만 골라서",
    desc: "날짜나 참여자 기준으로 메시지를 정리할 수 있어요.",
  },
  {
    icon: <i className="ri-file-download-line"></i>,
    title: "원하는 형식으로 정리 끝",
    desc: "복잡한 대화도 엑셀, CSV, PDF로 한 번에 정리돼요.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-24">
        {/* Hero */}
        <section className="mb-16 text-center sm:mb-24">
          <h1 className="mb-4 text-2xl font-bold leading-tight text-[#2F2F2F] sm:mb-6 sm:text-4xl">
            카톡 대화,
            <br />
            정리하려다{" "}
            <span className="text-flicker-in-glow inline-block text-[#FBE27A]">
              포기
            </span>
            한 적 있죠?
          </h1>

          <p className="mb-8 text-base text-gray-600 sm:mb-10 sm:text-lg">
            회의 기록, 거래 내역, 일정 정리…
            <br />
            이제 복붙 말고 원하는 형식으로 한 번에 정리하세요.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/upload"
              className="w-full rounded-lg bg-[#FBE27A] px-6 py-3 text-base font-semibold text-[#2F2F2F] transition hover:bg-[#fff0b3] sm:w-auto sm:px-8 sm:text-lg"
            >
              지금 파일 올려보기
            </Link>

            <Link
              href="/guide"
              className="w-full rounded-lg border border-[#3FAF8E] bg-white px-6 py-3 text-base font-medium text-[#2F2F2F] transition hover:bg-[#EAF7F2] sm:w-auto sm:px-8 sm:text-lg"
            >
              처음이라면 사용 방법 보기
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16 grid gap-6 sm:mb-24 sm:gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="bounce-top rounded-2xl border border-gray-100 bg-white p-5 text-center sm:p-6"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="mb-3 text-3xl sm:mb-4 flex justify-center items-center">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-[#2F2F2F] sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
