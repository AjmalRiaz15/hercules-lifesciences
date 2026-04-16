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
    accent: 'fertilizer'
  },
  {
    name: 'Granious',
    label: 'Granules',
    description: 'Granular medicine for even application.',
    slug: 'granious',
    accent: 'granious'
  },
  {
    name: 'Household',
    label: 'Household',
    description: 'Household-use medicine products for everyday care.',
    slug: 'household',
    accent: 'household'
  }
];

export const getCategoryBySlug = (slug) => productCategories.find((category) => category.slug === slug);