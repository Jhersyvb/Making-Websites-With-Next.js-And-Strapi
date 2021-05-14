import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Box } from 'rebass'

function About({ page }) {
  const router = useRouter()

  const SEO = {
    title: page.title,
    description: 'Just your normal about page',
    openGraph: {
      title: page.title,
      description: 'Just your normal about page',
    },
  }

  return (
    <>
      <NextSeo {...SEO} />
      <Box variant="container">
        <Box as="h2" my={40}>
          {router.locale === 'es' ? page.title_es : page.title}
        </Box>
        <div
          dangerouslySetInnerHTML={{
            __html: router.locale === 'es' ? page.content_es : page.content,
          }}
        />
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/pages/1`)
  const data = await res.json()

  return {
    props: {
      page: data,
    },
    revalidate: 1,
  }
}

export default About
