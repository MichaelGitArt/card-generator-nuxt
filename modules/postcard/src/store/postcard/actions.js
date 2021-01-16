import {
  ROUTE_NAME,
} from '@Postcard/config/routes';
import {
  createCard,
} from '@Postcard/services';

export default {
  createCard(_, {
    name,
    category,
  }) {
    createCard({
      $axios: this.$axios,
      name,
      category,
      lang: this.$i18n.locale,
    })
      .then(({
        result,
      }) => {
        if (result) {
          this.$router.push({
            name: ROUTE_NAME.POSTCARD_RESULT,
            params: {
              id: result,
            },
          });
        }
      });
  },

  getCard(_, {
    id,
    req,
  }) {
    const img = `https://loh.biz/8/img/${id}.png`;
    const routerResolve = this.$router.resolve({
      name: ROUTE_NAME.POSTCARD_SHARE,
      params: {
        id,
      },
    });

    let shareUrl = 'http://';
    if (req) {
      shareUrl += req.headers.host;
    } else {
      shareUrl += window.location.host;
    }

    shareUrl += routerResolve.href;

    return {
      img,
      shareUrl,
    };
  },
};
