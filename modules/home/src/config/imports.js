export const Pages = {
  Home: () => import('@Home/pages/Home').then(m => m.default || m),
};
