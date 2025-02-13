'use client'

import React, { use } from 'react'
import Link from 'next/link'

import { MdOutlineBedroomParent, MdFormatListBulletedAdd } from 'react-icons/md'

// vendor components
import { Tooltip } from 'flowbite-react'

// UI components
import { Table, Thead, Th, Tbody, Tr, Td, TableWrapper } from '@/components/ui/table'

import type { Hotel } from '../../types/hotel.model'

type HotelsGridProps = {
  hotels: Promise<Hotel[]>
}

export default function HotelsGrid({ hotels }: HotelsGridProps) {
  const allHotels = use(hotels)

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <tr>
            <Th>Hotel</Th>
            <Th>Nit</Th>
            <Th>Capacidad Hab.</Th>
            <Th>Dirección</Th>
            <Th>Ciudad</Th>
            <Th>&nbsp;</Th>
          </tr>
        </Thead>

        <Tbody>
          {allHotels.map(
            ({
              id,
              nit,
              nombre,
              capacidad_habitaciones,
              direccion,
              ciudad,
              cantidad_habitaciones,
            }) => (
              <Tr key={nit}>
                <Td>{nombre}</Td>
                <Td>{nit}</Td>
                <Td>{capacidad_habitaciones}</Td>
                <Td>{direccion}</Td>
                <Td>{ciudad}</Td>
                <Td>
                  <ul tw="grid grid-flow-col gap-1 justify-items-end">
                    {cantidad_habitaciones ? (
                      <li>
                        <Tooltip
                          content="Consultar habitaciones"
                          style="light"
                          animation="duration-300"
                        >
                          <Link href={`/hotel/${id}`} title="Consultar habitaciones">
                            <MdOutlineBedroomParent tw="size-5" />
                          </Link>
                        </Tooltip>
                      </li>
                    ) : null}
                    <li>
                      <Tooltip
                        content="Agregar habitación"
                        style="light"
                        animation="duration-300"
                      >
                        <Link
                          href={`/hotel/room?hotel_id=${id}`}
                          title="Agregar habitación"
                        >
                          <MdFormatListBulletedAdd tw="size-5" />
                        </Link>
                      </Tooltip>
                    </li>
                  </ul>
                </Td>
              </Tr>
            ),
          )}
        </Tbody>
      </Table>
    </TableWrapper>
  )
}
