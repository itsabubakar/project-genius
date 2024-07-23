import {
  IconArrowDown,
  IconArrowsRightLeft,
  
  IconComponents,
  IconDownload,
  IconArrowBigRightLines,
  IconListCheck,
  IconMail,
  IconPhoneCall,
  IconRocket,
  IconEngine
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/heroOne.jpg';
import engineeringOne from '~/assets/images/engineeringone.png';
import engineeringTwo from '~/assets/images/engineeringtwo.png';
import activityImage from '~/assets/images/engineeringSix.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      GENERATING EXCITING NEW IDEAS AND
USEFUL SOLUTIONS (GENIUS) 
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          Project GENIUS
        </span>{' '}
       (Generating Exciting New Ideas and Useful Solutions) Project Contest aims to rekindle students&apos; passion for engineering by fostering creativity, innovation, and analytical thinking. 
      </span>{' '}
    </>
  ),
  callToAction: {
    text: 'Apply',
    href: '/#',
    icon: IconArrowBigRightLines,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/about',
  },
  image: {
    src: heroImg,
    alt: 'Hero',
  },
};



// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Why <span className="whitespace-nowrap">Project Genius</span>
      </>
    ),
    subtitle:
      "The GENIUS Project Contest emerged from the necessity to address several key areas in education and personal among students",
    tagline: 'Contest Rationale',
  },
  items: [
    {
      title: 'Reigniting Passion for Engineering',
      description:
        'With a decline in enthusiasm for engineering disciplines, this contest aims to rekindle interest and excitement in this vital field.',
      icon: IconEngine,
    },
    {
      title: 'Promoting Solution-Driven Mindsets',
      description:
        'By engaging students in real-world problemsolving activities, we aim to foster a mindset that seeks practical and innovative solutions.',
      icon: IconComponents,
     
    },
    {
      title: 'Encouraging Creativity and Innovation',
      description:
        'The contest provides a platform for students to think creatively and develop innovative ideas, preparing them for future challenges',
      icon: IconListCheck,
     
    },
    {
      title: 'Enhancing Analytical Skills',
      description:
        'Through various contest tasks, participants will enhance their analytical and critical thinking abilities.',
      icon: IconRocket,
     
    },
    {
      title: 'Fostering Curiosity',
      description:
        "Encouraging a sense of curiosity, the contest motivates students to explore new concepts and technologies.",
      icon: IconArrowsRightLeft,
     
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Key details',
    subtitle: 'The GENIUS Project Contest is exclusively open to undergraduate students within the Faculty of Engineering at Ahmadu Bello University.',
    tagline: 'PARTICIPANTS',
  },
  content:
    'This contest aims to bring together a diverse group of students, encouraging cross-departmental collaboration and fostering a spirit of unity and teamwork within the faculty.',
  items: [
    {
      title: 'Eligibility',
      description:
        'All undergraduate students enrolled in the Faculty of Engineering at Ahmadu Bello University are eligible to participate. This includes students from all departments and academic levels within the faculty.',
    },
    {
      title: 'Team-Based Structure',
      description:
        'The contest is designed to be team-based, promoting collaborative problem-solving and idea-sharing among participants. Students are encouraged to form teams, leveraging the diverse skills and knowledge of their peers.',
    },
    {
      title: 'Team Composition',
      description:
        'Each team should consist of no more than five members. Teams can be composed of students from any department and academic level within the Faculty of Engineering. This flexibility allows teams to combine different perspectives and expertise, enhancing their potential for innovative solutions.',
    },
  ],
  image: {
    src: engineeringOne,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'By offering a diverse range of awards and recognition, we aim to motivate and inspire participants while expressing gratitude to sponsors, judges, and organizers for their invaluable support and contributions to the success of the contest.',
  items: [
    {
      title: 'Seed funding ranging from 5,000 to 10,000 Naira will be awarded to approximately ten deserving teams to support the development of their innovative solutions.',
    },
    {
      title: 'Certificates of participation will be awarded to all contest participants to recognize their contributions and efforts.',
    },
    {
      title: 'Plaques will be presented to all judges, sponsors, and organizers as a token of appreciation for their valuable contributions to the contest.',
    },
    {
      title: 'All winners, sponsors, judges, and organizers will be prominently recognized and acknowledged through various channels',
    },
    
  ],
  image: {
    src: engineeringTwo,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: activityImage,
    alt: 'Steps image',
  },
  header: {
    title: 'COMPETITION ACTIVITIES & TIMELINE',
  },
  items: [
    {
      title: 'Registration Deadline',
      description:
        'May 31st All interested teams must register by this date to participate in the contest.',
      icon: IconArrowDown,
    },
    {
      title: 'Round One: Idea Contest Timeline: June 22nd - June 28th',
      description:
        'In this initial round teams are required to develop unique solutions to prevailing problems. Each team must prepare for a presentation, which could be either physical or online, and submit an executive summary that includes: Problem statement, Proposed solution, Cost analysis (budget) for a prototype, Deliverables,Physical or online presentation Executive summary',
      icon: IconArrowDown,
    },
    {
      title: 'Announcement of Finalists',
      description:
        'June 30th Finalists who advance to the next round will be announced.',
      icon: IconArrowDown,
    },
    {
      title: 'Entitlements for Finalists',
      description:
        'Partial seed funding for the prototype and allocation of mentors to guide the development process',
      icon: IconArrowDown,
    },
    {
      title: 'Pre-Contest Workshop',
      description:
        'August 3rd All contestants are invited to attend a workshop where they will receive training on: Fine-tuning and presenting their ideas. Applying for grants. Next steps post-contest.Certificates of participation for all attendees.',
      icon: IconArrowDown,
    },
    {
      title: 'Round Two (Presentation and Exhibition)',
      description:
        ' August 10th This round involves a comprehensive presentation and exhibition. Finalists are expected to present: A working prototype. A PowerPoint presentation. A progress report detailing their development journey. Monetary prizes for top teams. Certificates and awards recognizing excellence. Opportunities to network and connect with field experts and mentors',
      icon: IconArrowDown,
    },
    {
      title: 'Winners Announced!',
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'RULES & GUIDELINES',
    subtitle:
      'To ensure a fair and productive contest, participants must adhere to the following rules and guidelines. These rules are designed to maintain the integrity of the competition and to provide a clear framework within which participants can operate',
  },
  testimonials: [
    {
      name: 'Eligibility',
      testimonial: [`Participants must be undergraduate students currently enrolled in any
department within the Faculty of Engineering at Ahmadu Bello University`, 'Each team can consist of up to five members, who may be from different departments and academic levels within the faculty.'],
image: {
  src: 'https://images.unsplash.com/photo-1529088746738-c4c0a152fb2c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Testimonial Image',
}
      
    },
    {
      name: 'Team Formation',
      testimonial: [`Teams should be formed voluntarily by students.`, 'No team may exceed five members.', 'Interdepartmental teams are encouraged to promote diversity of thought and skills.'],
      image: {
  src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Team Image',
}
      
    },

    {
      name: 'Submission Requirements:',
      testimonial: [`For Round One, teams must submit an executive summary that includes a problem statement, proposed solution, and cost analysis (budget) for a prototype.`, 'Presentations can be conducted either physically or online.', 'All submissions must be original work created by the team members.'],
        image: {
  src: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Submission Image',
}

    },
    {
      name: 'Conduct and Integrity',
      testimonial: [`All participants are expected to uphold the highest standards of academic
integrity and professionalism.`, 'Plagiarism, cheating, or any form of dishonest behavior will result in immediate disqualification.', 'Respectful and collaborative behavior is expected at all times during the contest'],
  image: {
  src: 'https://images.unsplash.com/photo-1481966115753-963394378f23?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Conduct Image',
}
      
    },
    {
      name: 'Evaluation Criteria:',
      testimonial: [`Entries will be judged based on creativity, feasibility, impact, and
presentation.`, 'Judge decisions are final and binding.'],
image: {
  src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D',
  alt: 'img',
}
      
    },
    {
      name: 'Workshops and Mentorship',
      testimonial:[ `Attendance at the pre-contest workshop on August 3rd is highly encouraged for all participants.`, 'Finalists will be assigned mentors to assist with prototype development and presentation skills.'],
      image: {
        src: 'https://images.unsplash.com/photo-1581094481644-f2ab64522498?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        
        alt: 'img',
      },
    },
    {
      name: 'Final Presentation and Exhibition:',
      testimonial:[ `Finalist teams must prepare a functional prototype, a PowerPoint presentation, and a progress report for the final round on August 10th.`, 'Teams will present their solutions to a panel of judges and an audience, followed by an exhibition of their prototypes.'],
      image: {
        src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'img',
      },
    },
    {
      name: 'Awards and Prizes',
      testimonial:[ `Monetary prizes will be awarded to the top-performing teams.`, 'All participants will receive certificates, and finalists will receive additional awards and recognition', 'Opportunities for networking with field experts and mentors will be provided during and after the contest.'],
      image: {
        src: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'img',
      },
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Criteria for Judging',
    subtitle:
      'The judging and evaluation process for the GENIUS Project Contest will be rigorous and impartial, ensuring fairness and transparency in the assessment of participants submissions.',
    tagline: 'JUDGING & EVALUATION',
  },
  items: [
    {
      title: 'Innovation',
      description: `How original and creative is the proposed solution?`,
      descriptionTwo: `Does the solution offer a unique approach to addressing the problem?
`,
      
    },
    {
      title: 'Feasibility',
      description: `Is the proposed solution technically feasible and practical to implement?`,
      descriptionTwo: `Are the proposed methods and technologies viable within existing constraints?`,

    },
    {
      title: "Impact",
      description: `What is the potential impact of the solution on addressing the problem?
`,
      descriptionTwo: `Does the solution offer meaningful benefits or improvements over existing
approaches?`,

    },
    {
      title: "Presentation",
      description: `How effectively is the solution communicated through the presentation?
`,
      descriptionTwo: `Are the key concepts and ideas clearly explained and compellingly presented?`,

    },
    {
      title: 'Proof of Concept',
      description: `Is there evidence of a well-developed proof of concept or prototype?
`,
      descriptionTwo: `Has the team demonstrated progress towards implementing their solution?`,

    },
    
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'AWARDS & RECOGNITION',
    subtitle:
      'The GENIUS Project Contest will offer a range of awards and recognition to celebrate the achievements of participants and acknowledge the support of sponsors judges, and organizers.',
    tagline: 'Awards ',
  },
  prices: [

    {
      title: 'Grand Prize',
      price: '500,000',
      items: [
        {
          description: 'Customized Notepads',
        },
        {
          description: 'Pens',
        },
        {
          description: 'T-shirts',
        },
        {
          description: 'Certificate',
        },
      ],
     
      hasRibbon: true,
      ribbonTitle: 'Grand prize',
    },

    {
      title: 'First Runner-Up',
      price: "300,000",
      items: [
        {
          description: 'Customized Notepads',
        },
        {
          description: 'Pens',
        },
        {
          description: 'T-shirts',
        },
        {
          description: 'Certificate',
        },
      ],
     
      
    },

    {
      title: 'Second Runner-Up',
      price: "100,000",
      items: [
        {
          description: 'Customized Notepads',
        },
        {
          description: 'Pens',
        },
        {
          description: 'T-shirts',
        },
        {
          description: 'Certificate',
        },
      ],
      
      hasRibbon: false,
    },

  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Judges',
    subtitle:
      'Judges chosen based on their expertise, experience, and impartiality in evaluating innovative solutions.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Sadiq Bilyamin',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sadiq Bilyamin',
      },
      items: [
        
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Morgan Ufoma',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Morgan Ufoma',
      },
      items: [
        
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'James Bond',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'James Bond',
      },
      items: [
        
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Pablo Neruda',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Pablo Neruda',
      },
      items: [
        
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    // subtitle: 'In hac habitasse platea dictumst',
    tagline: 'Contact',
  },
  content:
    'Partnerships and sponsorships are fundamental to the success of the contest. Support us in our commitment to fostering innovation and talent development among youth.',

  items: [
    {
      title: 'Chairman - Ufuoma Morgan',
      description: ['09055433811'],
      icon: IconPhoneCall,
    },
    {
      title: 'Secretary - Muhammad Muhktar Bardi',
      description: ['09069237487'],
      icon: IconPhoneCall,
    },
    {
      title: 'Head of Media and Design - Benjamin Gambo Yahaya',
      description: ['07030207301'],
      icon: IconPhoneCall,
    },
    {
      title: 'Head of Promotion and Planning - Binshi Musa Bentley',
      description: ['09077080021'],
      icon: IconPhoneCall,
    },
    {
      title: 'Financial Secretary - Al-Abbad Islam',
      description: ['08169870101'],
      icon: IconPhoneCall,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};
