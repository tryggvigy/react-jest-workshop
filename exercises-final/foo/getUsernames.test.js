jest.mock('./userApi', () => ({
  fetchUsers: () => Promise.resolve([{ name: 'Alice' }, { name: 'Bob' }]),
}));

import { getAllUsermames } from './getUsernames';

test('getAllUsermames', async () => {
  const userNames = await getAllUsermames();

  expect(userNames).toEqual(['Alice', 'Bob']);
});
