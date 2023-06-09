import { Badge } from '../components/Badge';
import { Differential } from '../components/Differential';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { SectionHero } from '../components/SectioHero';
import { SectionCases } from '../components/SectionCases';
import { SectionProfileCard } from '../components/SectionProfileCard';

export default function Home() {
  return (
    <>
      <PageTitle
        title="Portfolio Lucas da Silva"
        description="Portfolio Lucas da Silva"
      />

      <Header />
      <SectionHero />
      <Badge />
      <Differential />
      {/*<SectionProfileCard />*/}
      <SectionCases />
      <Footer />
    </>
  );
}