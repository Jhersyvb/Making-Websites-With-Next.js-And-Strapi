import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import { DefaultSeo } from 'next-seo'
import ContextWrapper from 'components/ContextWrapper'
import { appWithTranslation } from 'next-i18next'

import SEO from '../next-seo.config'

function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation)

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps, navigation }
}

export default appWithTranslation(MyApp)
