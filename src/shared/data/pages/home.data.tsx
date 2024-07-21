import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';

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
       (Generating Exciting New Ideas and Useful Solutions) Project Contest aims to rekindle students' passion for engineering by fostering creativity, innovation, and analytical thinking. 
      </span>{' '}
    It provides a platform for diverse participants to collaborate, showcase ideas, and engage in friendly competition, promoting teamwork and a sense of community.
    </>
  ),
  callToAction: {
    text: 'Apply',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Learn more',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
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
      icon: IconBrandTailwind,
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
    src: cameraFrontImg,
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
    src: cameraBackImg,
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
    src: gasImg,
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
      title: 'Apply!',
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
department within the Faculty of Engineering at Ahmadu Bello University`, 'Each team can consist of up to five members, who may be from different departments and academic levels within the faculty.']
      
    },
    {
      name: 'Team Formation',
      testimonial: [`Teams should be formed voluntarily by students.`, 'No team may exceed five members.', 'Interdepartmental teams are encouraged to promote diversity of thought and skills.'],
      
    },

    {
      name: 'Submission Requirements:',
      testimonial: [`For Round One, teams must submit an executive summary that includes a problem statement, proposed solution, and cost analysis (budget) for a prototype.`, 'Presentations can be conducted either physically or online.', 'All submissions must be original work created by the team members.'],

    },
    {
      name: 'Conduct and Integrity',
      testimonial: [`All participants are expected to uphold the highest standards of academic
integrity and professionalism.`, 'Plagiarism, cheating, or any form of dishonest behavior will result in immediate disqualification.', 'Respectful and collaborative behavior is expected at all times during the contest'],
      
    },
    {
      name: 'Evaluation Criteria:',
      testimonial: [`Entries will be judged based on creativity, feasibility, impact, and
presentation.`, 'Judge decisions are final and binding.'],
      
    },
    {
      name: 'Workshops and Mentorship',
      testimonial:[ `Attendance at the pre-contest workshop on August 3rd is highly encouraged for all participants.`, 'Finalists will be assigned mentors to assist with prototype development and presentation skills.'],
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'img',
      },
    },
    {
      name: 'Final Presentation and Exhibition:',
      testimonial:[ `Finalist teams must prepare a functional prototype, a PowerPoint presentation, and a progress report for the final round on August 10th.`, 'Teams will present their solutions to a panel of judges and an audience, followed by an exhibition of their prototypes.'],
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'img',
      },
    },
    {
      name: 'Awards and Prizes',
      testimonial:[ `Monetary prizes will be awarded to the top-performing teams.`, 'All participants will receive certificates, and finalists will receive additional awards and recognition', 'Opportunities for networking with field experts and mentors will be provided during and after the contest.'],
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
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
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What do I need to start?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'How to install the NextJS + Tailwind CSS template?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: "What's something that you completely don't understand?",
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: "What's an example of when you changed your mind?",
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
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
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
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
    subtitle: 'In hac habitasse platea dictumst',
    tagline: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
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
