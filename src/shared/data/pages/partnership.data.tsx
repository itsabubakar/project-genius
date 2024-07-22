import {
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StepsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero2.jpg';
import {
  IconAward,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2Partnerships: HeroProps = {
  title: 'Partnership & Sponsorship',
  subtitle:
    'Partnerships and sponsorships are fundamental to the success of the contest. We are engaging with alumni, government officials, NGOs, engineering bodies, and companies with CSR initiatives in securing funding and support.',
  tagline: 'Strategic Partnerships and Sponsorships',
  
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// Steps data on partnership page *******************
export const stepsPartnerships: StepsProps = {
  id: 'steps-on-partnership',
  hasBackground: false,
  isImageDisplayed: false,
  header: {
    title: 'Approach',
    subtitle:
      'By forging strategic partnerships and securing sponsorships from these entities, we aim to ensure the sustainability and success of the contest while maximizing its impact on youth innovation and talent development.',
  },
  items: [
    {
      title: 'Identify Potential Partners',
      description:
        'Research and identify organizations, government officials, NGOs, alumni groups, and companies with CSR initiatives that align with the objectives of the contest.',
      icon: IconNumber1,
    },
    {
      title: 'Customized Proposals',
      description:
        'Develop customized sponsorship proposals outlining the benefits of partnership, including brand visibility, networking opportunities, and community impact.',
      icon: IconNumber2,
    },
    {
      title: 'Engagement and Relationship Building',
      description:
        'Establish meaningful relationships with potential partners and sponsors through personalized outreach, meetings, and presentations.',
      icon: IconNumber3,
    },
    {
      title: 'Recognition and Acknowledgment',
      description:
        'Offer various levels of sponsorship packages with corresponding recognition and acknowledgment, such as logo placement, mentions in promotional materials, and exclusive networking opportunities.',
      icon: IconNumber4,
    },
    {
      title: 'Long-Term Engagement',
      description:
        'Cultivate long-term partnerships by demonstrating the value and impact of sponsorship, providing regular updates on the contest progress, and seeking feedback for future improvements.',
      icon: IconNumber5,
    },
  ],
}

// Features data on Partnerships page *******************
export const featuresPartnerships: FeaturesProps = {
  id: 'benefits-for-Sponsors',
  hasBackground: true,
  header: {
    title: 'Benefits for Sponsors',
    // subtitle:
    //   'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
    tagline: 'Benefits',
  },
  columns: 1,
  items: [
    {
      title: 'Brand Visibility and Exposure',
      description:
        'Sponsors can increase their brand visibility among a targeted audience, including students, faculty members, alumni, and industry professionals',
      icon: IconAward,
    },
    {
      title: 'Networking Opportunities',
      description:
        'Sponsors gain access to a network of stakeholders, including participants, judges, mentors, and fellow sponsors, facilitating valuable networking and relationship-building opportunities. Cras mollis elit massa, vel interdum libero molestie a. Nulla facilisi. Suspendisse cursus non sapien ut tincidunt. Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      icon: IconAward,
    },
    {
      title: 'Corporate Social Responsibility (CSR)',
      description:
        'Sponsoring the contest demonstrates a commitment to CSR by supporting initiatives that promote education, innovation, and youth empowerment.',
      icon: IconAward,
    },
    {
      title: 'Talent Recruitment',
      description:
        'Sponsors can identify and engage with top talent among participating students, potentially leading to future recruitment opportunities.',
      icon: IconAward,
    },
    {
      title: 'Thought Leadership and Expertise',
      description:
        'Sponsors can showcase their industry expertise and thought leadership through participation in workshops, panel discussions, and mentorship sessions.',
      icon: IconAward,
    },
    {
      title: 'Media Exposure and Public Relations',
      description:
        'Sponsors may receive media coverage and publicity through press releases, social media mentions, and event promotions.',
      icon: IconAward,
    },
  ],
};


// FAQS data on Partnerships page *******************
export const faqsPartnerships: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'PARTNERS AND SPONSORS',
    subtitle:
      'The following entities are identified as potential partners and sponsors:',
    // tagline: 'JUDGING',
  },
  items: [
    {
      title: 'Alumni',
      description: `Engaging alumni networks can provide valuable financial support and
mentorship opportunities for participants.
`,
      descriptionTwo: `Alumni who have excelled in their respective fields may be particularly
interested in supporting initiatives that nurture the next generation of
innovators.
`,
    },
    {
      title: 'Government Officials and Politicians',
      description: `Collaboration with government officials and politicians can provide access to
funding opportunities and resources.`,

    },
    {
      title: 'Non-Governmental Organizations (NGOs):',
      description: `Partnering with NGOs focused on education, youth empowerment, or
innovation can amplify the reach and impact of the contest.`,
      descriptionTwo: `NGOs may offer financial support, logistical assistance, or access to their
networks and resources.`,

    },
    {
      title: 'Engineering Bodies',
      description: `Engaging with professional engineering bodies can provide access to industry
expertise and resources.
`,
      descriptionTwo: `These organizations may offer support in the form of mentorship, technical
assistance, or promotional efforts to encourage participation.
`,

    },
    {
      title: 'Companies with Corporate Social Responsibility (CSR) Initiatives',
      description: `Partnering with companies that prioritize CSR initiatives can provide financial
support and resources for the contest.
`,
      descriptionTwo: `Companies may be interested in sponsoring the contest as part of their
commitment to supporting education and youth development in their
communities.
`,

    },
    
  ],
};

