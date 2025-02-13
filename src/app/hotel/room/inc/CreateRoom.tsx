'use client'

import React, { use, useActionState, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { HiInformationCircle } from 'react-icons/hi'

// vendor components
import { Alert } from 'flowbite-react'

// UI components
import {
  Form,
  Label,
  WrapFields,
  Select,
  FormGroup,
  ErrorMessage,
  Fieldset,
  RadioButton,
} from '@/components/ui/form'
import { SubmitButton } from '@/components/ui/button'

// actions & models
import { createRoom } from '../actions'
import { roomSchema } from '../schema'
import { Hotel } from '../../types/hotel.model'
import { GroupedTypeAccommodation } from '../../types/accommodation.model'

type CreateRoomProps = {
  hotels: Promise<Hotel[]>
  typesAccommodations: Promise<GroupedTypeAccommodation>
}

export default function CreateRoom({ hotels, typesAccommodations }: CreateRoomProps) {
  const [lastResult, formAction] = useActionState(createRoom, undefined)
  const [typeChecked, setTypeChecked] = useState('')
  const groupedAccommodations = use(typesAccommodations)
  const hoteles = use(hotels)
  const params = useSearchParams()
  // const params = new URLSearchParams(currentParams)

  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    defaultValue: {
      hotel_id: '',
    },

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: roomSchema })
    },

    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  return (
    <Form id={form.id} onSubmit={form.onSubmit} action={formAction} noValidate>
      {form.status === 'error' && form.errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="mb-2">
          {form.errors.map((err, indx) => (
            <p key={indx}>{err}</p>
          ))}
        </Alert>
      ) : null}

      <FormGroup>
        <Label htmlFor="hotel_id">Hoteles</Label>
        <Select
          key={fields.hotel_id.key}
          name={fields.hotel_id.name}
          defaultValue={params.get('hotel_id') || fields.hotel_id.initialValue}
          aria-placeholder="Seleccione Hotel"
          required
        >
          <option value="">Seleccione Hotel</option>
          {hoteles.map((hotel) => (
            <option key={hotel.nit} value={hotel.id}>
              {hotel.nombre} - ({hotel.ciudad})
            </option>
          ))}
        </Select>
        <ErrorMessage show={!!fields.hotel_id.errors} message={fields.hotel_id.errors} />
      </FormGroup>

      <WrapFields>
        <Fieldset>
          <legend>Seleccione el tipo de habitación</legend>
          <FormGroup>
            {Object.entries(groupedAccommodations).map(([typeAcc, [accommodation]]) => (
              <Label key={typeAcc}>
                <RadioButton
                  name="tipo_acomodacion"
                  value={accommodation.tipo}
                  onChange={() => setTypeChecked(accommodation.tipo)}
                />
                {typeAcc}
              </Label>
            ))}
            <ErrorMessage
              show={!!fields.tipo_acomodacion_id.errors}
              message={fields.tipo_acomodacion_id.errors}
            />
          </FormGroup>
        </Fieldset>

        {typeChecked.length > 0 && (
          <Fieldset>
            <legend>Seleccione la acomodación</legend>
            <FormGroup>
              {groupedAccommodations[typeChecked].map((accommodation) => (
                <Label key={accommodation.id}>
                  <RadioButton
                    name={fields.tipo_acomodacion_id.name}
                    value={accommodation.id}
                    defaultChecked={
                      fields.tipo_acomodacion_id.initialValue ===
                      accommodation.id.toString()
                    }
                  />
                  {accommodation.acomodacion}
                </Label>
              ))}
              <ErrorMessage
                show={!!fields.tipo_acomodacion_id.errors}
                message={fields.tipo_acomodacion_id.errors}
              />
            </FormGroup>
          </Fieldset>
        )}
      </WrapFields>

      <div tw="flex justify-end w-full">
        <SubmitButton type="submit" tw="w-full xs:w-auto">
          Crear hotel
        </SubmitButton>
      </div>
    </Form>
  )
}
