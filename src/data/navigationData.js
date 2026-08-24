export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products', to: '/products' },
  { label: 'Crops', to: '/crops' },
  { label: 'Career', to: '/career' },
  { label: 'Contact Us', to: '/contact-us' }
];

export const routeOrder = navItems.map((item) => item.to);
