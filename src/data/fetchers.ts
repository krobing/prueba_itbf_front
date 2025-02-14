import { notFound } from 'next/navigation'

// models
import { Hotel } from '@/app/hotel/types/hotel.model'
import { GroupedTypeAccommodation } from '@/app/hotel/types/accommodation.model'

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`

/**
 * Fetches hotel data from the backend API using the provided hotel ID.
 *
 * @param {string} id - The unique identifier of the hotel to fetch.
 * @returns {Promise<Hotel>} A promise that resolves to the hotel data.
 * @throws Will throw an error if the hotel data is not found.
 */
export const getHotel = async (id: string): Promise<Hotel> => {
  const resp = await fetch(`${apiUrl}/hoteles/${id}`, {
    next: { revalidate: 60, tags: ['hotel'] },
  })

  if (!resp.ok) {
    notFound()
  }

  const data = await resp.json()
  return data
}

export const getHoteles = async (): Promise<Hotel[]> => {
  const resp = await fetch(`${apiUrl}/hoteles`, {
    cache: 'force-cache',
    next: { tags: ['hoteles'] },
  })

  if (!resp.ok) {
    notFound()
  }

  const data = await resp.json()
  return data
}

/**
 * Fetches types and accommodations of rooms.
 *
 * @returns {Promise<GroupedTypeAccommodation>} A promise that resolves to the grouped type accommodation data.
 * @throws Will throw an error if the response is not ok.
 */
export const getTypesAccommodations = async (): Promise<GroupedTypeAccommodation> => {
  const resp = await fetch(`${apiUrl}/tipo-acomodaciones`, {
    cache: 'force-cache',
  })

  if (!resp.ok) {
    notFound()
  }

  const data = await resp.json()
  return data
}
