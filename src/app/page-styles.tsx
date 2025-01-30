import tw, { styled } from 'twin.macro'

export const Container = styled.main`
  ${tw`container flex flex-col justify-center min-h-screen mx-auto`}
`

export const Wrapper = styled.div`
  ${tw`w-full md:w-9/12 mx-auto flex-auto my-15 sm:rounded-xl px-2 md:px-10 lg:px-20 xl:px-40 py-10 bg-slate-50 shadow-xl`}
`
