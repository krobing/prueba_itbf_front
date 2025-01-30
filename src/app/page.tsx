'use client'

// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'

import { Container, Wrapper } from './page-styles'

// components styles
import {
  Form,
  Label,
  Input,
  TextArea,
  Select,
  Checkbox,
  RadioButton,
  Fieldset,
  ErrorMessage,
} from '@/UI/form'
import { Button } from '@/UI/button'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <div tw="flex justify-center p-4">
          <div tw="inline-flex">
            <Link
              href="/hotel"
              tw="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Navegación 1
            </Link>
            <a
              href="#"
              tw="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Navegación 2
            </a>
            <a
              href="#"
              tw="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Navegación 3
            </a>
            <a
              href="#"
              tw="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Navegación 4
            </a>
          </div>
        </div>

        <Form>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" />

          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" />

          <Label htmlFor="category">Category</Label>
          <Select id="category" name="category">
            <option value="luxury">Luxury</option>
            <option value="budget">Budget</option>
          </Select>

          <Fieldset>
            <legend>Preferences</legend>
            <Label>
              <Checkbox name="pool" />
              Pool
            </Label>
            <Label>
              <Checkbox name="gym" />
              Gym
            </Label>
          </Fieldset>

          <Fieldset>
            <legend>Room Type</legend>
            <Label>
              <RadioButton name="roomType" value="single" />
              Single
            </Label>
            <Label>
              <RadioButton name="roomType" value="double" />
              Double
            </Label>
          </Fieldset>

          <ErrorMessage>Please fill out all fields</ErrorMessage>

          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
