import { Home, HomeTemplateProps } from 'templates/Home'
import { items as bannersMock } from 'components/BannerSlider/mock'
import { items as gamesmock } from 'components/GameCardSlider/mock'
import { item as highlightMock } from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesmock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesmock,
      upcommingGames: gamesmock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesmock,
      freeGames: gamesmock,
      freeHighlight: highlightMock
    }
  }
}
