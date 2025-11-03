import {
  Hero,
  Projects,
  MarqueeBlock,
  Services,
  Clients,
  News,
  SloganBlock,
} from '@/widgets';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <MarqueeBlock />
      <Services />
      <SloganBlock />
      <Clients />
      <News />
    </>
  );
};
