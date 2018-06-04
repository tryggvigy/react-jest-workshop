let _customers = [];
let _callbacks = [];

export default {
  getCustomers,
  setCustomers,
  subscribe,
  reset,
};

function getCustomers() {
  return _customers;
}

function setCustomers(customers) {
  _customers = customers;
  _letSubscribersKnow();
}

function subscribe(callback) {
  _callbacks.push(callback);
  return function removeCallback() {
    _callbacks.splice(_callbacks.indexOf(callback), 1);
  };
}

function reset() {
  _customers = [];
  _callbacks = [];
}

function _letSubscribersKnow() {
  _callbacks.forEach(cb => cb());
}
