// UI components
import { Container, ContentWrapper, MainContent } from '@/components/content'
import { NavTabs, ActiveTabLink } from '@/components/ui/nav-tabs'

type HotelLayoutProps = {
  children: React.ReactNode
}

export default function HotelLayout({ children }: HotelLayoutProps) {
  return (
    <Container>
      <ContentWrapper>
        <NavTabs>
          <ActiveTabLink path="/hotel">Inicio</ActiveTabLink>
          <ActiveTabLink path="/hotel/browse">Hoteles</ActiveTabLink>
          <ActiveTabLink path="/hotel/create">Crear Hotel</ActiveTabLink>
          <ActiveTabLink path="/hotel/room">Crear Habitación</ActiveTabLink>
        </NavTabs>

        <MainContent>{children}</MainContent>
      </ContentWrapper>
    </Container>
  )
}
