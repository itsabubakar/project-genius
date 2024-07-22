import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Steps from '~/components/widgets/Steps';
import Team2 from '~/components/widgets/Team2';
import {
  featuresFourAbout,
  featuresFourAboutThree,
  featuresFourAboutTwo,
  hero2About,
  stepsAbout,
  teamAbout,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      <Features4 {...featuresFourAboutThree} />
      <Team2 {...teamAbout} />
    </>
  );
};

export default Page;
