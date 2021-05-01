import styled from '@emotion/styled'

function Card({ movie }) {
  const { API_URL } = process.env

  return (
    <CardStyled>
      <div className="poster">
        <img src={API_URL + movie.poster.url} alt={movie.title} />
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
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
  }
`

export default Card
