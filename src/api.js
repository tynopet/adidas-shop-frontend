import { transformInputValues, collectInputSizes } from './helpers';

export const fetchShoes = match => fetch(`https://erodionov-adidas-fake-api.now.sh/v1${match.url}`)
  .then(res => res.json())
  .then(({ items }) => {
    const shoes = items.map(transformInputValues);
    const filterSizes = collectInputSizes(items);
    return { shoes, sizes: filterSizes };
  });

export const fetchShoe = match => fetch(`https://erodionov-adidas-fake-api.now.sh/v1${match.url}`)
  .then(res => res.json())
  .then(shoe => transformInputValues(shoe));
