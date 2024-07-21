import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import Contact from '~/components/widgets/Contact';
import {
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Features {...featuresHome} />
      <Content {...contentHomeOne} />
      <Steps {...stepsHome} />
      <Pricing {...pricingHome} />
      <Content {...contentHomeTwo} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
    </>
  );
}
