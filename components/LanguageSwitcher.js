import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

function LanguageSwitcher() {
  const router = useRouter()

  return (
    <LanguageSwitcherStyled>
      <Link href={router.pathname} locale="en">
        <button
          type="button"
          className={router.locale === 'en' ? 'is-active' : ''}
        >
          EN
        </button>
      </Link>
      <Link href={router.pathname} locale="es">
        <button
          type="button"
          className={router.locale === 'es' ? 'is-active' : ''}
        >
          ES
        </button>
      </Link>
    </LanguageSwitcherStyled>
  )
}

const LanguageSwitcherStyled = styled.div`
  button.is-active {
    background: #000;
    color: #fff;
  }
`

export default LanguageSwitcher
