'use client'

import { type LinkProps } from 'next/link'
import { RouteType } from 'next/dist/lib/load-custom-routes'
import { usePathname } from 'next/navigation'
import tw from 'twin.macro'

import { TabLink } from './nav-tabs-styles'

type ActiveTabLinkProps = Omit<LinkProps<RouteType>, 'href'> & {
  path: LinkProps<RouteType>['href']
}

export default function ActiveTabLink({ path, children, ...props }: ActiveTabLinkProps) {
  const currentPath = usePathname()

  return (
    <TabLink
      href={path}
      {...props}
      css={[
        path === currentPath
          ? tw`bg-dominant/90 text-white focus:ring-dominant-light hover:bg-dominant-dark`
          : '',
      ]}
    >
      {children}
    </TabLink>
  )
}
