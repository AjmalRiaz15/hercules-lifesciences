export function formatCurrency(value, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export function toSlug(value) {
  return value.toLowerCase().replace(/\s+/g, '-');
}
