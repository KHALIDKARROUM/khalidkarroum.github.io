export const profile = {
  name: 'Khalid Karroum',
  role: 'Data Scientist & Machine Learning Engineer',
  location: 'Skhirate, Rabat, Morocco',
  availability: 'Available January 2027 for a six-month PFE internship.',
  internship: {
    startDate: 'January 2027',
    duration: '6 months',
    targetRoles: [
      'Data Science',
      'Machine Learning',
      'Data Analytics',
      'Data Engineering',
    ],
    remote: undefined as boolean | undefined,
    relocation: undefined as boolean | undefined,
  },
  positioning:
    'I work with data, train machine-learning models, and build applications around them.',
  github: 'https://github.com/KHALIDKARROUM',
  email: 'karroumkhalid6@gmail.com',
  phone: {
    number: '+212641837579',
    display: '+212 641 837 579',
  },
  linkedIn: 'https://www.linkedin.com/in/khalid-karroum/',
  resume: {
    path: '/Khalid-Karroum-CV.pdf?v=5d4ff17ce0c6',
    available: true,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
} as const;

export const technicalInterests = [
  'Algorithms & Data Structures',
  'Statistical Modeling',
  'Machine Learning Systems',
  'MLOps',
  'Financial Data Science',
] as const;

export const languages = [
  { code: 'FR', name: 'French', level: 'B2', description: 'Upper-intermediate' },
  { code: 'EN', name: 'English', level: 'B2', description: 'Upper-intermediate' },
  { code: 'AR', name: 'Arabic', level: 'Native', description: 'Native speaker' },
] as const;

export const socialAccounts = [
  {
    platform: 'linkedin',
    name: 'LinkedIn',
    handle: 'khalid-karroum',
    url: profile.linkedIn,
    description: 'Professional profile & connections',
  },
  {
    platform: 'github',
    name: 'GitHub',
    handle: 'KHALIDKARROUM',
    url: profile.github,
    description: 'Projects, source code & contributions',
  },
] as const;
