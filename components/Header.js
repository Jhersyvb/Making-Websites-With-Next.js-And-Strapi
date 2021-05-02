import styled from '@emotion/styled'
import { rem } from 'polished'
import { Flex } from 'rebass'
import Link from 'next/link'
import Navigation from './Navigation'
import ToggleNavigationColorButton from './ToggleNavigationColorButton'

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/logo.svg" alt="Sites logo" />
                <span className="logo-text">Next Movies</span>
              </a>
            </Link>
          </div>
          <Navigation />
          <ToggleNavigationColorButton />
        </Flex>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background: ${props => (props.isDark ? '#000000' : '#efefef')};
  padding: 20px;

  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`

export default Header
