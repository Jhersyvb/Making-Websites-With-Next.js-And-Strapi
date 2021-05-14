import { useTranslation } from 'next-i18next'
import { Box } from 'rebass'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Contact() {
  const { t } = useTranslation('contact')
  return (
    <>
      <Box variant="container">
        <Box as="h2" my={40}>
          {t('Contact')}
        </Box>
        <div>{t('This is a contact page')}</div>
      </Box>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['contact'])),
  },
})

export default Contact
