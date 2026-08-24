export const productCategories = [
  {
    name: 'Insecticide',
    label: 'Insecticides',
    description: 'Medicine for fast control of harmful insects.',
    slug: 'insecticide',
    accent: 'insecticide'
  },
  {
    name: 'Fungicide',
    label: 'Fungicides',
    description: 'Medicine for protection against fungal pressure.',
    slug: 'fungicide',
    accent: 'fungicide'
  },
  {
    name: 'Herbicide',
    label: 'Herbicides',
    description: 'Medicine for selective weed control.',
    slug: 'herbicide',
    accent: 'herbicide'
  },
  {
    name: 'Fertilizer',
    label: 'Fertilizers',
    description: 'Nutrition medicine for balanced plant growth.',
    slug: 'fertilizer',
    accent: 'fertilizer',
    subcategories: [
      {
        name: 'Special Nutrients',
        label: 'Special Nutrients',
        description: 'Special nutrient products for targeted crop support.',
        slug: 'special-nutrients',
        accent: 'fertilizer'
      },
      {
        name: 'Soil Reclamation',
        label: 'Soil Reclamation',
        description: 'Products that help restore and improve soil health.',
        slug: 'soil-reclamation',
        accent: 'granules'
      }
    ]
  },
  {
    name: 'Granules',
    label: 'Granules',
    description: 'Granular medicine for even application.',
    slug: 'granules',
    accent: 'granules'
  },
  {
    name: 'Household',
    label: 'Household',
    description: 'Household-use medicine products for everyday care.',
    slug: 'household',
    accent: 'household'
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