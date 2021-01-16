export const Pages = {
  Home: () => import('@Home/pages/home/index.vue').then(m => m.default || m),
};
