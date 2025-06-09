export const formatDate = (date: string, locale: string = 'nl-NL') => {
  if (!date) {
    return date;
  }
  const dateObject = new Date(date);

  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObject);

  return formattedDate;
};
