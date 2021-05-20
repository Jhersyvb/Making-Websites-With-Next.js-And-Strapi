import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

function Card({ movie }) {
  const { API_URL } = process.env

  if (!movie.genre) {
    movie.genre = {}
    movie.genre.slug = 'uncategorised'
  }

  return (
    <CardStyled>
      <div className="poster">
        {movie.poster && (
          <Image
            src={API_URL + movie.poster.url}
            width={movie.poster.width}
            height={movie.poster.height}
          />
        )}
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
        <Link
          href="/movies/[genre]/[slug]"
          as={`/movies/${movie.genre.slug}/${movie.slug}`}
        >
          <a>More about this movie</a>
        </Link>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  border: 1px solid #cccccc;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  overflow: hidden;
  width: '100%';

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      line-height: 1.5;
    }

    a {
      display: inline-block;
      margin: 20px 0;
    }
  }
`

export default Card
