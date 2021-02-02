import { useState, ReactNode } from 'react'

import * as S from './dropdown.styles'

export type DropdownProps = {
  title: ReactNode
  children: ReactNode
}

export const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}
