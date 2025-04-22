import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Hero from '../components/home/Hero/index'

export default function Home() {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext()
  const { description } = customFields

  return (
    <Layout title={tagline} description={description}>
      <main>
        <div className="relative min-h-screen">
          <div className="relative z-10">
            <Hero />
          </div>
        </div>
      </main>
    </Layout>
  )
}
