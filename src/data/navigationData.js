export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Seeds', to: '/seeds' },
  { label: 'Our Mission', to: '/our-mission' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact', to: '/contact-us' }
];

export const routeOrder = navItems.map((item) => item.to);
