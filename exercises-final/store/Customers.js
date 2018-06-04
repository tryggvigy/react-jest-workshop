let customers = [];
let callbacks = [];

function getCustomers() {
  return customers;
}

function setCustomers(newCustomers) {
  customers = newCustomers;
  letSubscribersKnow();
}

function subscribe(callback) {
  callbacks.push(callback);
  return function removeCallback() {
    callbacks.splice(callbacks.indexOf(callback), 1);
  };
}

function reset() {
  customers = [];
  callbacks = [];
}

function letSubscribersKnow() {
  callbacks.forEach(cb => cb());
}

export default {
  getCustomers,
  setCustomers,
  subscribe,
  reset,
};
