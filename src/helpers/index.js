export const buildStaticUrl = ({ id, fileName }, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

export const buildUrl = ({ location }, id) => `${location.pathname}/${id}`;

export const calcImageSize = (category) => {
  const windowWidth = window.outerWidth;
  switch (category) {
    case 'list':
      return windowWidth > 1024 ? 512 : 256;
    case 'show':
      return windowWidth > 1024 ? 768 : 256;
    case 'carousel':
      return windowWidth > 1024 ? 128 : 64;
    default:
      return 512;
  }
};

export const transformInputArray = items => items
  .map(({ id, price, title, images, sizes }) => ({
    id,
    price: price / 100,
    title,
    image: buildStaticUrl(images[0], calcImageSize('list')),
    sizes,
    isSale: Math.random() > 0.8,
  }));

export const transformInputValue = ({ price, description, images, title }) => ({
  title,
  price: price / 100,
  images,
  description,
});

export const collectInputSizes = items => ({
  ...items
    .reduce((acc, { sizes }) => (
      {
        ...acc,
        ...sizes.reduce((prev, size) => ({
          ...prev, [size]: true,
        }), {}),
      }), {}),
});

export const calcFilterLength = () => (window.outerWidth > 1024 ? 10 : 5);

export const sortSizes = (a, b) => {
  const sizes = [
    'XXXS',
    'XXXS/XXS',
    'XXS/XXXS',
    'XXS',
    'XXS/XS',
    'XS/XXS',
    'XS',
    'XS/S',
    'S/SX',
    'S',
    'S/M',
    'M/S',
    'M',
    'M/L',
    'L/M',
    'L',
    'XL/L',
    'L/XL',
    'XL',
    'XL/XXL',
    'XXL/XL',
    'XXL',
    'XXXL/XXL',
    'XXL/XXXL',
    'XXXL',
  ];

  const aIdx = sizes.indexOf(a.toUpperCase());
  const bIdx = sizes.indexOf(b.toUpperCase());

  if (aIdx < 0) {
    if (!isNaN(a) && !isNaN(b)) {
      return Number(a) - Number(b);
    }
    return !isNaN(a) ? -1 : 1;
  }
  if (bIdx < 0) {
    if (!isNaN(a) && !isNaN(b)) {
      return Number(a) - Number(b);
    }
    return !isNaN(b) ? -1 : 1;
  }
  return aIdx - bIdx;
};

export const sortObjectByKeys = obj => Object.keys(obj)
  .sort(sortSizes)
  .reduce((prev, key) => ({ ...prev, [key]: obj[key] }), {});
