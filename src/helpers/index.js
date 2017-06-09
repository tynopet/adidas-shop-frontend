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
  // Не знаю как упростить сильнее функцию сортировки, поэтому оставлю комментарии
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
  // Сначала ищем оба размера в массиве размеров
  const aIdx = sizes.indexOf(a.toUpperCase());
  const bIdx = sizes.indexOf(b.toUpperCase());
  // Если не нашли оба размера в массиве и оба размера число - обычное сравнение чисел
  if ((aIdx < 0 && bIdx < 0) && (!isNaN(a) && !isNaN(b))) {
    return a - b;
  }
  // Если не найден какой-либо из размеров, и он является числом - то числовой размер меньше символьного
  // Если оба размера символьные, и их нет в массиве - второй считается большим
  if (aIdx < 0) {
    return !isNaN(a) ? -1 : 1;
  }
  if (bIdx < 0) {
    return !isNaN(b) ? -1 : 1;
  }
  // Если размеры нашлись в массиве, то сравниваем их по индексу
  return aIdx - bIdx;
};

export const sortObjectByKeys = obj => Object.keys(obj)
  .sort(compareSizes)
  .reduce((prev, key) => ({ ...prev, [key]: obj[key] }), {});

export const sortFilter = filter => Object.entries(sortObjectByKeys(filter));
