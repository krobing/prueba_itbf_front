'use client'

import React from 'react'

// UI components
import { Table, Thead, Th, Tbody, Tr, Td, TableWrapper } from '@/components/ui/table'

// models
import type { RoomsXTipoAcomodacion } from '../../types/room.model'

type RoomsGridProps = {
  roomsXAccommodation: RoomsXTipoAcomodacion
}

export default function RoomsGrid({ roomsXAccommodation }: RoomsGridProps) {
  return (
    <TableWrapper>
      <Table>
        <Thead>
          <tr>
            <Th>Id</Th>
            <Th>Tipo Habitación</Th>
            <Th>Acomodación</Th>
            <Th>Habitaciones</Th>
          </tr>
        </Thead>

        <Tbody>
          {Object.values(roomsXAccommodation).map(
            ({ tipo_acomodacion_id, tipo, acomodacion, count }) => (
              <Tr key={tipo_acomodacion_id}>
                <Td>{tipo_acomodacion_id}</Td>
                <Td>{tipo}</Td>
                <Td>{acomodacion}</Td>
                <Td>{count}</Td>
              </Tr>
            ),
          )}
        </Tbody>
      </Table>
    </TableWrapper>
  )
}
