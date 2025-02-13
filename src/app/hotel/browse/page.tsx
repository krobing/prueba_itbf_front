import { Suspense } from 'react'
import { PropagateLoader } from '@/components/loaders'

import HotelsGrid from './inc/HotelsGrid'
import { fetchHotels } from './actions'

export default function BrowseHotelPage() {
  const hotels = fetchHotels()

  return (
    <>
      <h1 className="text-dominant-light">Hoteles y habitaciones</h1>
      <Suspense fallback={<PropagateLoader />}>
        <HotelsGrid hotels={hotels} />
      </Suspense>
    </>
  )
}
