import * as S from './text-content.styles'
import { Heading } from 'components/Heading'

export type TextContentProps = {
  title?: string
  content: string
}

export const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      {!!title && <Heading lineColor="secondary">{title}</Heading>}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  )
}
