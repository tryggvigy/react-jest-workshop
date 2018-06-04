import debug from 'debug';

export function fetchUsers() {
  debug('foo');
  return fetch('/users').then(users => JSON.parse(users));
}
