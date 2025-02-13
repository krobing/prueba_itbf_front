'use client'

import tw, { styled } from 'twin.macro'

export const Table = tw.table`w-full mt-2 border-collapse rounded-md overflow-hidden`

export const Thead = tw.thead`bg-dominant text-white`

export const Th = tw.th`px-2 py-3 border-gray-300 first:border-l-0 last:border-r-0 text-left`

export const Tbody = tw.tbody``

export const Tr = styled.tr`
  ${tw`p-2 border hover:bg-gray-100 odd:bg-slate-100`}
`

export const Td = tw.td`px-2 py-3`

export const TableWrapper = tw.div`w-full overflow-x-auto`
