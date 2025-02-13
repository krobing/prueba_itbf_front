'use client'

import tw, { styled } from 'twin.macro'

export const Container = styled.main`
  ${tw`container flex flex-col justify-center min-h-screen mx-auto`}
`

export const ContentWrapper = styled.div`
  ${tw`flex flex-col flex-auto w-full md:w-11/12 lg:w-9/12 mx-auto my-15 sm:rounded-xl px-2 md:px-10 lg:px-20 xl:px-40 py-10 bg-slate-50 shadow-xl`}
`

export const MainContent = styled.section`
  ${tw`flex-auto flex flex-col`}
`
