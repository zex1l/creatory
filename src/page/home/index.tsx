import {
  Hero,
  Projects,
  MarqueeBlock,
  Services,
  Clients,
  News,
  SloganBlock,
  Team,
  CallbackForm,
} from '@/widgets';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <MarqueeBlock />
      <Services />
      <Team />
      <SloganBlock />
      <Clients />
      <CallbackForm />
      <News />
    </>
  );
};
