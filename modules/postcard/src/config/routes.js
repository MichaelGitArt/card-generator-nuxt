import {
  Pages,
} from './imports';

export const ROUTE_NAME = {
  POSTCARD_CREATE: 'postcard-create',
  POSTCARD_RESULT: 'postcard-result',
  POSTCARD_SHARE: 'postcard-share',
};

export default [
  {
    name: ROUTE_NAME.POSTCARD_CREATE,
    path: '/postcard/create',
    component: Pages.PostcardCreate,
  },
  {
    name: ROUTE_NAME.POSTCARD_RESULT,
    path: '/postcard/created/:id',
    component: Pages.PostcardResult,
  },
  {
    name: ROUTE_NAME.POSTCARD_SHARE,
    path: '/postcard/share/:id',
    component: Pages.PostcardShare,
  },
];
