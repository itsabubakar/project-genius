import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/engineeringfour.png';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: '(GENIUS) Project Contest',
  subtitle:
    'The GENIUS Project Contest is a dynamic and inclusive competition aimed at reigniting passion and the engineering spirit among students. Organized by the Nigerian Universities Engineering Students Association (NUESA) at Ahmadu Bello University, the contest is set to take place in May 2024. We believe in the transformative power of innovation, creativity, and teamwork.',
  tagline: 'Welcome to the GENIUS Project Contest!',
  
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero',
  },
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our mission',
    subtitle:
      'The GENIUS Project Contest encourages collaboration, bringing together individuals from diverse backgrounds and interests. This inclusivity fosters an environment where participants can showcase their ideas and compete in a friendly yet challenging setting. By promoting teamwork and cross-disciplinary interaction, the contest aims to cultivate a sense of community and shared purpose among its participants.',
    tagline: 'Mission and vision',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: true,
  header: {
    title: 'Our vision',
    subtitle: 'Our vision is to create a platform that encourages students to think outside the box, collaborate with peers from diverse backgrounds, and develop practical, innovative solutions to real-world problems. The GENIUS Project Contest is more than just a competition; it is a journey of discovery, learning, and growth.',
  },
  
};
export const featuresFourAboutThree: FeaturesProps = {
  id: 'features-four-on-about-three',
  hasBackground: false,
  header: {
    title: 'Contest Background',
    subtitle: 'The inception of the GENIUS Project Contest stems from a profound need to reignite passion and the engineering spirit in the hearts of students. In todays rapidly evolving world, it is imperative to reform the minds of youth to be solution-driven, creative, analytical, innovative, and curious. This contest is designed to catalyze these qualities by providing a dynamic platform that challenges participants to push their boundaries and think outside the box.',
  },
  
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'Contest Background',
    subtitle:
      'The inception of the GENIUS Project Contest stems from a profound need to reignite passion and the engineering spirit in the hearts of students. In todays rapidly evolving world, it is imperative to reform the minds of youth to be solution-driven, creative, analytical, innovative, and curious. This contest is designed to catalyze these qualities by providing a dynamic platform that challenges participants to push their boundaries and think outside the box.',
  },
  items: [
    {
      title: 'Our foundation',
      description:
        'Donec pharetra, justo a rutrum venenatis, augue erat porta leo, non eleifend dui lectus ut turpis. Fusce tincidunt mattis magna eu commodo. Proin non facilisis enim, ut luctus dolor.',
      icon: IconNumber1,
    },
    {
      title: 'The early years',
      description:
        'Nunc scelerisque dui non nulla faucibus, sed elementum urna congue. Donec varius nisi sit amet massa malesuada euismod. Donec auctor interdum leo eget ultricies.',
      icon: IconNumber2,
    },
    {
      title: 'Growth',
      description:
        'Vestibulum euismod dolor vel magna consectetur, vitae ornare metus finibus. Nam nec magna lacinia, cursus purus ut, pellentesque ex. Aliquam nec porta sapien, nec iaculis odio. Donec sed lacus arcu.',
      icon: IconNumber3,
    },
    {
      title: 'Expanding horizons',
      description:
        'Aenean mollis est ac quam viverra, eget dictum justo iaculis. Morbi venenatis neque sed blandit faucibus. Pellentesque sit amet justo at ligula eleifend lacinia. Etiam nec orci quam.',
      icon: IconNumber4,
    },
    {
      title: 'Our ongoing commitment',
      description:
        'Sed vel purus a odio tincidunt mollis. Nam et tortor est. Aliquam sodales interdum tortor ac condimentum. Suspendisse laoreet nulla est, ac luctus est tempus ut.',
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our culture',
    subtitle:
      'Nullam maximus ante eros, ac eleifend mi condimentum ut. Donec volutpat felis ac purus pretium, vitae mollis quam scelerisque.',
    tagline: 'culture',
  },
  items: [
    {
      title: 'Customer engagement',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Creativity and design excellence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconPalette,
    },
    {
      title: 'Continuous learning',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconBook,
    },
    {
      title: 'Collaboration and cross-functionality',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconPuzzle2,
    },
    {
      title: 'Entrepreneurial spirit',
      description: 'Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus.',
      icon: IconFlame,
    },
    {
      title: 'Employee well-being and balance',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconScale,
    },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Our record of excellence',
    subtitle:
      'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: 'Global recognition',
      description:
        'Nullam porttitor lacus elit, sed pellentesque eros aliquam eget. Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus, lectus ante dignissim neque, imperdiet sodales enim augue a quam.',
      icon: IconAward,
    },
    {
      title: 'Innovator of the year award',
      description:
        'Cras mollis elit massa, vel interdum libero molestie a. Nulla facilisi. Suspendisse cursus non sapien ut tincidunt. Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      icon: IconAward,
    },
    {
      title: 'Sustainability award',
      description:
        'Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in tempor orci. Vestibulum velit justo, dignissim quis nisl nec, scelerisque ultrices mi sapien diam quis elit.',
      icon: IconAward,
    },
  ],
};



// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: true,
  header: {
    title: 'Meet our team',
    // subtitle:
      // 'Proin quis neque vehicula, sagittis felis ut, scelerisque mi. Nullam consequat, erat eu luctus sodales, ipsum tellus facilisis magna, eu condimentum lectus.',
    tagline: 'team',
  },
  teams: [
    {
      name: 'Ufuoma Morgan',
      occupation: 'Chairman',
      image: {
        src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Ufuoma Morgan',
      },
      // items: [
      //   {
      //     title: 'Know more on Twitter',
      //     icon: IconBrandTwitter,
      //     href: '#',
      //   },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandLinkedin,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },
    {
      name: 'Muhammad Muhktar Bardi',
      occupation: 'Secretary',
      image: {
        src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Muhammad Muhktar Bardi',
      },
      // items: [
      //   {
      //     title: 'Know more on Twitter',
      //     icon: IconBrandTwitter,
      //     href: '#',
      //   },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandLinkedin,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },
    {
      name: 'Benjamin Gambo Yahaya',
      occupation: 'Head of Media and Design',
      image: {
        src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
        alt: 'Benjamin Gambo Yahaya',
      },
      // items: [
      //   {
      //     title: 'Know more on Twitter',
      //     icon: IconBrandTwitter,
      //     href: '#',
      //   },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandLinkedin,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },
    {
      name: 'Binshi Musa Bentley',
      occupation: 'Head of Promotion and Planning',
      image: {
        src: 'https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Binshi Musa Bentley',
      },
      // items: [
      //   {
      //     title: 'Know more on Twitter',
      //     icon: IconBrandTwitter,
      //     href: '#',
      //   },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandLinkedin,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },
    {
      name: 'Al-Abbad Islam',
      occupation: 'Financial Secretary',
      image: {
        src: 'https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Al-Abbad Islam',
      },
      // items: [
      //   {
      //     title: 'Know more on Twitter',
      //     icon: IconBrandTwitter,
      //     href: '#',
      //   },
      //   {
      //     title: 'Know more on Linkedin',
      //     icon: IconBrandLinkedin,
      //     href: '#',
      //   },
      //   {
      //     title: 'Contact by email',
      //     icon: IconMail,
      //     href: '#',
      //   },
      // ],
    },

  ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'Our success stories',
    tagline: 'Customer comments',
  },
  testimonials: [
    {
      name: 'Jane Smith',
      job: 'UX Designer',
      testimonial: [`Your templates have been a game-changer for my projects. They're not just beautifully designed; they're also incredibly easy to customize. Thanks to your templates, I've been able to save time and deliver stunning websites to my clients.`],
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Jane Smith',
      },
      href: '/',
    },
    {
      name: 'John Doe',
      job: 'Frontend Developer',
      testimonial: [`I can't say enough good things about your Next.js and Tailwind CSS templates. As a frontend developer, I appreciate the clean and well-organized code. These templates have significantly sped up my development process, and the results are always impressive.`],
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'John Doe',
      },
      href: '/',
    },
    {
      name: 'Emily Turner',
      job: 'Marketing Manager',
      testimonial: [`This templates have made our marketing campaigns stand out. The responsiveness and performance of the websites we've built with them have boosted our conversion rates. Thank you for helping us shine in the digital world!`],
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Emily Turner',
      },
      href: '/',
    },
    {
      name: 'Michael Clark',
      job: 'Startup Founder',
      testimonial: [`I stumbled upon your templates while looking for a way to launch my startup quickly. Your templates not only saved me valuable time but also gave my business a professional and modern online presence. Highly recommended!`],
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Michael Clark',
      },
      href: '/',
    },
    {
      name: 'Linda Johnson',
      job: 'Freelance Web Designer',
      testimonial: [`I've been using your templates for my freelance projects, and my clients are always thrilled with the results. The templates are not only visually appealing but also user-friendly, making my job much easier.`],
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Linda Johnson',
      },
      href: '/',
    },
    {
      name: 'David Rogers',
      job: 'E-commerce Entrepreneur',
      testimonial: [`The speed and SEO-friendliness of the websites I've built with these templates have led to increased traffic and sales. I couldn't be happier!`],
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'David Rogers',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'JUDGING & EVALUATION',
    subtitle:
      'The judging and evaluation process for the GENIUS Project Contest will be rigorous and impartial, ensuring fairness and transparency in the assessment of participants submissions.',
    tagline: 'JUDGING',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Contact us',
    tagline: 'Contact info',
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
    inputs: [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        placeholder: 'Introduce your name',
        autocomplete: 'off',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Introduce your email address',
        autocomplete: 'on',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
    ],
    btn: {
      title: 'Contact us',
      type: 'submit',
    },
  },
};
