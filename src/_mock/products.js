import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Caneta',
  'Lapis',
  'Borracha',
  'Corrente',
  'Celular tijolão',
];

const SECCAO_NUMERO = [
  'Encontrado na secção 5',
  'Encontrado na secção 2',
  'Encontrado na secção 3',
  'Encontrado na secção 4',
  'Encontrado na secção 1',
];

// ----------------------------------------------------------------------

const products = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    lugar: SECCAO_NUMERO[index],
  };
});

export default products;
