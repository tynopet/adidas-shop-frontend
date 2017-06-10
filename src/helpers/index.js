export const buildStaticUrl = ({ id, fileName }, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

export const buildUrl = ({ location }, id) => `${location.pathname}/${id}`;

export const transformInputValues = ({ id, price, title, description, images, sizes }) => ({
  id,
  price: price / 100,
  title,
  images,
  sizes,
  description,
  isSale: Math.random() > 0.8,
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
export const isShowExpander = object => Object.keys(object).length > calcFilterLength();

export const compareSizes = (a, b) => {
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
  // First, we look for both sizes in an array of sizes
  const aIdx = sizes.indexOf(a.toUpperCase());
  const bIdx = sizes.indexOf(b.toUpperCase());
  // If not find both sizes in the array and both sizes is number - prime comparison numbers
  if ((aIdx < 0 && bIdx < 0) && (!isNaN(a) && !isNaN(b))) {
    return a - b;
  }
  // If not find any size, and he is number - number size less string
  // If both sizes is string, and their not in array - second large
  if (aIdx < 0) {
    return !isNaN(a) ? -1 : 1;
  }
  if (bIdx < 0) {
    return !isNaN(b) ? -1 : 1;
  }
  // If sizes in array - comparison by index
  return aIdx - bIdx;
};

export const sortObjectByKeys = obj => Object.keys(obj)
  .sort(compareSizes)
  .reduce((prev, key) => ({ ...prev, [key]: obj[key] }), {});

export const sortFilter = filter => Object.entries(sortObjectByKeys(filter));
