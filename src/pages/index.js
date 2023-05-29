import { Badge } from '../components/Badge';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { SectionHero } from '../components/SectioHero';

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
    </>
  );
}