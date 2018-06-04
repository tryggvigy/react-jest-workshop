let customers = [];
const callbacks = [];

function getCustomers() {
  return customers;
}

function setCustomers(customers) {
  customers = customers;
  letSubscribersKnow();
}

function subscribe(callback) {
  callbacks.push(callback);
  return function removeCallback() {
    callbacks.splice(callbacks.indexOf(callback), 1);
  };
}

function letSubscribersKnow() {
  callbacks.forEach(cb => cb());
}

export default {
  getCustomers,
  setCustomers,
  subscribe,
};
