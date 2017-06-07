import { transformInputArray, transformInputValue, buildSizes } from './helpers';

export const fetchShoes = match => fetch(`https://erodionov-adidas-fake-api.now.sh/v1${match.url}`)
  .then(res => res.json())
  .then(({ items }) => {
    const shoes = transformInputArray(items);
    const filterSizes = buildSizes(items);
    return { shoes, sizes: filterSizes };
  });

export const fetchShoe = match => fetch(`https://erodionov-adidas-fake-api.now.sh/v1${match.url}`)
   .then(res => res.json())
   .then(shoe => transformInputValue(shoe));