export default function Home() {
  return (
    <div className="flex min-h-svh flex-col px-6 sm:px-12">
      <header className="mx-auto flex w-full max-w-5xl items-center gap-2.5 py-8 text-sm font-semibold tracking-tight">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-emerald-600" />
        hello.
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center py-20 sm:py-28">
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-emerald-700">
          A LITTLE BEGINNING
        </p>
        <h1 className="text-6xl leading-[1.05] font-semibold tracking-[-0.065em] sm:text-8xl md:text-9xl">
          Hello,
          <br />
          World<span className="text-emerald-600">!</span>
        </h1>
        <p className="mt-8 text-base leading-8 text-stone-600 sm:text-lg">
          안녕하세요, 반가워요.
          <br />
          이곳에서 새로운 이야기를 시작합니다.
        </p>
        <a
          href="https://nextjs.org/docs"
          className="mt-10 inline-flex min-h-12 items-center gap-6 rounded-full bg-stone-900 px-6 text-sm font-medium text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          Next.js 문서 보기
          <span aria-hidden="true">↗</span>
        </a>
      </main>

      <footer className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 border-t border-stone-200 py-6 text-xs text-stone-500">
        <p>작은 시작, 무한한 가능성.</p>
        <p>Next.js + Tailwind CSS</p>
      </footer>
    </div>
  );
}
