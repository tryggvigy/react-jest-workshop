import { fetchUsers } from './userApi';

export const getAllUsermames = () => fetchUsers().then(users => users.map(u => u.name));
