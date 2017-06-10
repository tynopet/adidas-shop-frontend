import { transformInputValues, collectInputSizes } from './helpers';

export const fetchProducts = url => fetch(`https://erodionov-adidas-fake-api.now.sh/v1${url}`)
  .then(res => res.json())
  .then(({ items }) => {
    const products = items.map(transformInputValues);
    const sizes = collectInputSizes(items);
    return { products, sizes };
  });

export const fetchProduct = url => fetch(`https://erodionov-adidas-fake-api.now.sh/v1${url}`)
  .then(res => res.json())
  .then(shoe => transformInputValues(shoe));
