import { Suspense } from 'react'
import { getHoteles, getTypesAccommodations } from '@/data/fetchers'

// components
import { PropagateLoader } from '@/components/loaders'
import CreateRoom from './inc/CreateRoom'

export default function HotelRoomPage() {
  const hotels = getHoteles()
  const typesAccommodations = getTypesAccommodations()

  return (
    <>
      <h1 className="text-dominant-light">Crear Habitación</h1>
      <Suspense fallback={<PropagateLoader />}>
        <CreateRoom hotels={hotels} typesAccommodations={typesAccommodations} />
      </Suspense>
    </>
  )
}
