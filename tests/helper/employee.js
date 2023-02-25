export const createRandomName = (length) => {
  let name = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  while (name.length <= length) {
    const index = Math.floor(Math.random() * length);
    name = `${name}${letters[index]}`;
  }

  return name;
};
