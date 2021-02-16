import { InputHTMLAttributes, useState } from 'react'

import * as S from './checkbox.styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  onCheck?: (status: boolean) => void
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  isChecked = false,
  onCheck,
  value,
  ...rest
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...rest}
      />
      {!!labelFor && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}
