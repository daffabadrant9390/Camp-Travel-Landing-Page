// NAVIGATION
export type NavLink = {
  href: string;
  key: string;
  label: string;
  subLinks?: { href: string; key: string; label: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', key: 'home', label: 'Home' },
  {
    href: '#guide',
    key: 'how_hilink_work',
    label: 'How Hilink Work?',
    subLinks: [
      { href: '#camp', key: 'find_camp', label: 'Find a Camp Site' },
      { href: '#guide', key: 'plan_route', label: 'Plan Your Route' },
      { href: '#features', key: 'explore_offline', label: 'Explore Offline' },
    ],
  },
  {
    href: '#features',
    key: 'services',
    label: 'Services',
    subLinks: [
      { href: '#features', key: 'offline_maps', label: 'Offline Maps' },
      { href: '#features', key: 'schedule', label: 'Adventure Schedule' },
      { href: '#features', key: 'ar_guide', label: 'AR Trail Guide' },
      { href: '#features', key: 'new_locations', label: 'New Locations' },
    ],
  },
  {
    href: '#get-app',
    key: 'pricing',
    label: 'Pricing',
    subLinks: [
      { href: '#get-app', key: 'free_plan', label: 'Free Plan' },
      { href: '#get-app', key: 'premium_plan', label: 'Premium' },
      { href: '#get-app', key: 'group_plan', label: 'Group Trips' },
    ],
  },
  { href: '#contact', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

export const CAMP_SITE = [
  {
    title: 'Putuk Truno Camp Area',
    backgroundImage: 'bg-bg-img-1',
    subtitle: 'Prigen, East Java',
    numberOfPeopleJoined: 50,
  },
  {
    title: 'Mountain View Camp',
    // Full class names so Tailwind's content scan generates them
    backgroundImage: 'bg-bg-img-2',
    subtitle: 'Somewhere in the wilderness',
    numberOfPeopleJoined: 50,
  },
  {
    title: 'Nusa Penida',
    backgroundImage: 'bg-bg-img-3',
    subtitle: 'Bali, Indonesia',
    numberOfPeopleJoined: 50,
  },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
