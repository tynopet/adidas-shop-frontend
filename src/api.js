import { transformInputValues, buildSizes } from './helpers';

const fetchShoes = match => fetch(`https://erodionov-adidas-fake-api.now.sh/v1${match.url}`)
  .then(res => res.json())
  .then(({ items }) => {
    const shoes = transformInputValues(items);
    const filterSizes = buildSizes(items);
    return { shoes, sizes: filterSizes };
  });

export default fetchShoes;
