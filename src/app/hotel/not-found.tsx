'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main tw="flex-auto h-full w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 tw="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div tw="bg-sub-dominant px-2 text-sm rounded rotate-12 absolute">
        El recurso no se encontró
      </div>
      <div tw="mt-5">
        <button
          className="group"
          tw="relative inline-block text-sm font-medium text-sub-dominant active:text-sub-dominant-dark focus:outline-none focus:ring"
        >
          <span tw="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-sub-dominant group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span tw="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link href="/hotel/browse">Volver {'>>'}</Link>
          </span>
        </button>
      </div>
    </main>
  )
}
