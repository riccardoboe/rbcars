import { MouseEventHandler } from 'react'

export interface CarProps {
  make: string
  model: string
  class: string
  transmission: string
  year: number
  fuel_type: string
  city_mpg: number
  highway_mpg: number
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
}

export interface FilterProps {
  manufacturer?: string
  year?: number
  model?: string
  limit?: number
  fuel?: string
}

export interface HomeProps {
  searchParams: FilterProps
}

export interface CarCardProps {
  model: string
  make: string
  mpg: number
  transmission: string
  year: number
  drive: string
  cityMPG: number
}

export interface CustomButtonProps {
  isDisabled?: boolean
  btnType?: 'button' | 'submit'
  containerStyles?: string
  textStyles?: string
  title: string
  rightIcon?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface OptionProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string
  options: OptionProps[]
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}

export interface SearchManuFacturerProps {
  manufacturer: string
  setManuFacturer: (manufacturer: string) => void
}
