
export const getData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const User=['Jon', 'Dev', 'Ram'];
      const randomFruits = User.sort(() => 0.5 - Math.random()).slice(0, 3);
      resolve(randomFruits);
    }, 1000);
  });
