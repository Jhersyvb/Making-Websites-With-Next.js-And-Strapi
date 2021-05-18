import { Box } from 'rebass'
import getConfig from 'next/config'
import { parseCookies } from 'nookies'

function PayedArticles({ articles }) {
  return (
    <>
      <Box variant="container">
        <Box as="h2" my={40}>
          Payed Articles
        </Box>
        {articles.map(article => (
          <div className="articles" key={article.id}>
            <h3>{article.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: article.body }}></p>
          </div>
        ))}
      </Box>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(ctx) {
  const jwt = parseCookies(ctx).jwt

  let articles = []
  if (jwt) {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/payed-articles`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    articles = await res.json()
  }

  return {
    props: {
      articles,
    },
  }
}

export default PayedArticles
