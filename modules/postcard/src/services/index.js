export const createCard = ({
  $axios,
  name,
  category,
  lang,
}) => $axios.$post(`?action=image&name=${name}&category=${category}&lang=${lang}`);
