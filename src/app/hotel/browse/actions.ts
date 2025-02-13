'use server'

import { notFound } from 'next/navigation'
import type { Hotel } from '../types/hotel.model'

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const fetchHotels = async (): Promise<Hotel[]> => {
  const resp = await fetch(`${apiUrl}/api/hoteles`, {
    cache: 'force-cache',
    next: { revalidate: 60 },
  })
  const data = await resp.json()

  if (!resp.ok) {
    notFound()
  }

  return data
}
