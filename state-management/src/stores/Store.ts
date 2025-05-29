type Listener = () => void;

const create = <TValue>(initialValue: TValue) => {
  let listeners: Listener[] = [];
  let value: TValue = initialValue;

  const emitChange = () => {
    for (const listener of listeners) {
      listener();
    }
  };

  const set = (newValue: TValue) => {
    if (value === newValue) {
      return;
    }

    value = newValue;
    emitChange();
  };

  const subscribe = (listener: Listener) => {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  };

  const getSnapshot = () => value;

  return { getSnapshot, set, subscribe };
};

export const Store = { create };
