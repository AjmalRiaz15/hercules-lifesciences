export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Crops', to: '/crops' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Our Mission', to: '/our-mission' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' }
];

export const routeOrder = navItems.map((item) => item.to);
