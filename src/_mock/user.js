import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const NOME_DAS_PESSOAS = [
  'Pedro',
  'Cledyvan',
  'Henry',
  'Marcelo',
  'Matheus',
];
const SECCOES = [
 'Sala 1',
 'Sala 3',
 'Sala 2',
 'Sala 5',
 'Sala 4',
]


const users = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: NOME_DAS_PESSOAS[index],
  company: SECCOES[index],
}));

export default users;
