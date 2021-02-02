import NextLink from 'next/link'

import * as S from './user-dropdown.styles'
import { AccountIcon, ChevronDownIcon, ExitIcon, FavoriteIcon } from './icons'
import { Dropdown } from 'components/Dropdown'

export type UserDropdownProps = {
  username: string
}

export const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountIcon size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDownIcon size={24} />
        </>
      }
    >
      <S.Nav>
        <NextLink href="/profile/me" passHref>
          <S.Link>
            <AccountIcon />
            <span>My profile</span>
          </S.Link>
        </NextLink>

        <NextLink href="/wishlist" passHref>
          <S.Link>
            <FavoriteIcon />
            <span>Wishlist</span>
          </S.Link>
        </NextLink>

        <NextLink href="/logout" passHref>
          <S.Link>
            <ExitIcon />
            <span>Sign out</span>
          </S.Link>
        </NextLink>
      </S.Nav>
    </Dropdown>
  )
}
