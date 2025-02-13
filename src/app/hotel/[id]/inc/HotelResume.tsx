import React from 'react'

import { InfoCard, InfoDescription, InfoTitle } from '@/components/ui/list'
import { Hotel } from '../../types/hotel.model'

type Props = {
  hotel: Omit<Hotel, 'habitaciones'>
}

export default function HotelResume({ hotel }: Props) {
  return (
    <InfoCard className="mt-3">
      <InfoTitle>Hotel:</InfoTitle>
      <InfoDescription>{hotel.nombre}</InfoDescription>
      <InfoTitle>Cantidad de habitaciones:</InfoTitle>
      <InfoDescription>{hotel.cantidad_habitaciones}</InfoDescription>
      <InfoTitle>Capacidad de habitaciones:</InfoTitle>
      <InfoDescription>{hotel.capacidad_habitaciones}</InfoDescription>
      <InfoTitle>Ciudad:</InfoTitle>
      <InfoDescription>{hotel.ciudad}</InfoDescription>
      <InfoTitle>Dirección:</InfoTitle>
      <InfoDescription>{hotel.direccion}</InfoDescription>
    </InfoCard>
  )
}
