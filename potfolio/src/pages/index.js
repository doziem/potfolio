
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

export default function Home() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>

    </Layout>
  )
}
