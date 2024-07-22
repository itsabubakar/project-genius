import type { Metadata } from 'next';

import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Hero2 from '~/components/widgets/Hero2';
import Steps from '~/components/widgets/Steps';
import { faqsPartnerships, featuresPartnerships, hero2Partnerships, stepsPartnerships } from '~/shared/data/pages/partnership.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2Partnerships} />
      <Steps {...stepsPartnerships} />
      <Features {...featuresPartnerships} />
      <FAQs {...faqsPartnerships} />
    </>
  );
};

export default Page;
