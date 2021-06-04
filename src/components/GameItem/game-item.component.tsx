import * as S from './game-item.styles'
import * as I from './icons'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

export const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <I.Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}
