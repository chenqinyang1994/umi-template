type DefaultValue = string | undefined;

function presistFactory(defaultValue: DefaultValue, key: string) {
  let currentValue = localStorage.getItem(key) || defaultValue;
  const set = (value: string) => {
    currentValue = value;
    localStorage.setItem(key, value);
  };

  const get = (force?: boolean) => {
    return force ? localStorage.getItem(key) : currentValue;
  };

  const remove = () => {
    currentValue = undefined;
    localStorage.removeItem(key);
  };

  return {
    set,
    get,
    remove,
  };
}

export default presistFactory;
