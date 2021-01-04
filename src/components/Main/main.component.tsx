import * as S from './main.styles'

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />

      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS, Styled Components &amp; Storybook
      </S.Description>

      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}
