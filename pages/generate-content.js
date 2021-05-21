import getConfig from 'next/config'
import { Box } from 'rebass'
import faker from 'faker'

const { publicRuntimeConfig } = getConfig()

function GenerateContent() {
  async function addContent() {
    for (let i = 0; i < 100; i++) {
      const postData = {
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
      }

      const generate = await fetch(`${publicRuntimeConfig.API_URL}/posts`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      const generateResponse = await generate.json()

      console.log(generateResponse)
    }
  }

  return (
    <Box variant="container">
      <button type="button" onClick={() => addContent()}>
        Generate Strapi Post Content
      </button>
    </Box>
  )
}

export default GenerateContent
