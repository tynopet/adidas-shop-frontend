export const buildStaticUrl = ({ id, fileName }, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

export const buildUrl = ({ location }, id) => `${location.pathname}/${id}`;

export const transformInputArray = items => items
  .map(({ id, price, title, images, sizes }) => ({
    id,
    price: price / 100,
    title,
    image: buildStaticUrl(images[0], 512),
    sizes,
    isSale: Math.random() > 0.8,
  }));

export const transformInputValue = ({ price, description, images, title }) => ({
  title,
  price: price / 100,
  images,
  description,
});

export const buildSizes = items => (
  Object.assign(
    ...items
      .map(({ sizes }) => (sizes.length ?
        Object.assign(
          ...sizes
            .map(s => ({ [`${s}`]: true })),
        ) :
        {}),
    ),
  )
);

