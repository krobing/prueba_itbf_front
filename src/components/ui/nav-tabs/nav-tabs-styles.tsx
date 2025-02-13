'use client'

import Link from 'next/link'
import tw, { styled } from 'twin.macro'

export const NavTabs = styled.nav`
  ${tw`flex flex-row justify-center m-4 overflow-x-auto`}
`

export const TabLink = styled(Link)`
  ${tw`px-4 py-2 text-center text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-dominant-light first:rounded-l-md last:rounded-r-md`}
`
