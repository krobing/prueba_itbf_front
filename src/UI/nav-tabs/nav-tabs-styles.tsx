import tw, { styled } from 'twin.macro'

export const NabTabs = styled.nav`
  ${tw`inline-flex justify-center p-4`}
`

export const TabLink = styled.a`
  /* ${tw`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} */

  ${tw`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
`
