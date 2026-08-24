export const productCategories = [
  {
    name: 'Insecticide',
    label: 'Insecticides',
    slug: 'insecticide',
    accent: 'insecticide',
    image: '/images/Insecticide.jpg'
  },
  {
    name: 'Fungicide',
    label: 'Fungicides',
    slug: 'fungicide',
    accent: 'fungicide',
    image: '/images/Fungicide.jpg'
  },
  {
    name: 'Herbicide',
    label: 'Herbicides',
    slug: 'herbicide',
    accent: 'herbicide',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Fertilizer',
    label: 'Fertilizers',
    slug: 'fertilizer',
    accent: 'fertilizer',
    image: '/fertilizer.jpg',
    subcategories: [
      {
        name: 'Special Nutrients',
        label: 'Special Nutrients',
        slug: 'special-nutrients',
        accent: 'fertilizer'
      },
      {
        name: 'Soil Reclamation',
        label: 'Soil Reclamation',
        slug: 'soil-reclamation',
        accent: 'fertilizer'
      },
      {
        name: 'Granules',
        label: 'Granules',
        slug: 'granules',
        accent: 'granules'
      },
      {
        name: 'Household',
        label: 'Household',
        slug: 'household',
        accent: 'household'
      }
    ]
  }
];

export const getCategoryBySlug = (slug) => {
  for (const category of productCategories) {
    if (category.slug === slug) return category;
    if (category.subcategories) {
      const sub = category.subcategories.find((item) => item.slug === slug);
      if (sub) return sub;
    }
  }
  return null;
};