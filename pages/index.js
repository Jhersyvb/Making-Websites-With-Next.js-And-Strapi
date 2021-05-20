import { Box, Flex } from 'rebass'
import Card from '../components/Card'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import propTypes from 'prop-types'

const Home = ({ movies }) => {
  const { t } = useTranslation('common')

  return (
    <Box variant="container">
      <Image src="/images/movie-time.png" width={2400} height={980} />
      <Box my={40} as="h2">
        {t('Latest Movies')}
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: 'column', md: 'row' }}
        flexWrap="wrap"
      >
        {movies.map(movie => (
          <Box key={movie.id} width={{ _: '100%', md: '30%' }}>
            <Card movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

Home.propTypes = {
  movies: propTypes.array.isRequired,
}

export async function getServerSideProps({ locale }) {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/movies`)
  const data = await res.json()

  return {
    props: {
      movies: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
