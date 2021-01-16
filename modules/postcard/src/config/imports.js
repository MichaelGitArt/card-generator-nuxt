export const Pages = {
  PostcardCreate: () => import('@Postcard/pages/postcard-create').then(m => m.default || m),
  PostcardResult: () => import('@Postcard/pages/postcard-result').then(m => m.default || m),
  PostcardShare: () => import('@Postcard/pages/postcard-share').then(m => m.default || m),
};
