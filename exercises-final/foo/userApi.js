export function fetchUsers() {
  return fetch('/users').then(users => JSON.parse(users));
}
