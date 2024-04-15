import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['Connected', 'Expired']),
  role: sample([
    'Mother',
    'Father',
    'Brother',
    'Brother',
    'Sister',
    'Grandma',
    'Grandpa',
    'Son',
    'Daughter',
    'Spouse',
  ]),
}));
