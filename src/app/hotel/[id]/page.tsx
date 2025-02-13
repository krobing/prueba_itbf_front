import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'

// components
import RoomsGrid from './inc/RoomsGrid'
import HotelResume from './inc/HotelResume'

// models
import type { Hotel } from '../types/hotel.model'

// server functions
import { getHotel } from '@/data/fetchers'

interface RoomPageProps {
  params: Promise<{ id: string }>
}

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

// Go to https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration
// to understand the ISR (Incremental Static Regeneration)
export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const hotels = await fetch(`${apiUrl}/api/hoteles`, {
    cache: 'force-cache',
  }).then((res) => res.json())

  return hotels.map((hotel: Hotel) => ({
    id: String(hotel.id),
  }))
}

export async function generateMetadata({ params }: Pick<RoomPageProps, 'params'>) {
  const { id } = await params
  const hotel = await getHotel(id)

  return {
    title: hotel.nombre,
  }
}

export default async function HotelPage({ params }: RoomPageProps) {
  const { id } = await params

  const { habitaciones_tipo_acomodacion, ...hotel } = await getHotel(id)

  return (
    <>
      <Link
        href="/hotel/browse"
        className="flex items-center text-sub-dominant-link hover:underline float-right self-end"
      >
        <IoMdArrowRoundBack /> Regresar al listado
      </Link>
      <HotelResume hotel={hotel} />
      {habitaciones_tipo_acomodacion ? (
        <RoomsGrid roomsXAccommodation={habitaciones_tipo_acomodacion} />
      ) : null}
    </>
  )
}
