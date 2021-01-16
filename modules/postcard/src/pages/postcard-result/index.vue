<template>
  <AContainer
    fill-height
    zero-padding
  >
    <div
      class="postcard-result"
      ref="wrap"
    >
      <div class="postcard-result__content">
        <PostcardResultInfo
          :share-url="shareUrl"
        />

        <div
          class="postcard-swipe-arrow"
          @click="onSwipe"
        >
          <span
            v-text="$t('postcard.result.swipe')"
          />
          <img
            class="postcard-swipe-arrow__img"
            src="~@Postcard/assets/img/icons/arrow-right-large.png"
            alt="arrow"
          >
        </div>
      </div>
      <div class="postcard-result__image">
        <img
          alt="postcard"
          :src="img"
        >
      </div>
    </div>
  </AContainer>
</template>

<script>
import PostcardResultInfo from '@Postcard/components/PostcardResultInfo';
import AContainer from '@UI/components/Layout/AContainer';

export default {
  name: 'PostcardResult',
  components: {
    PostcardResultInfo,
    AContainer,
  },
  async asyncData({
    store,
    params,
    req,
  }) {
    const {
      shareUrl,
      img,
    } = await store.dispatch('postcard/getCard', {
      id: params.id,
      req,
    });

    return {
      shareUrl,
      img,
    };
  },
  methods: {
    onSwipe() {
      console.log('go');
      let prevScrollLeft = 0;
      const intervalId = setInterval(() => {
        this.$refs.wrap.scrollLeft += 25;
        if (prevScrollLeft === this.$refs.wrap.scrollLeft) {
          clearInterval(intervalId);
        } else {
          prevScrollLeft = this.$refs.wrap.scrollLeft;
        }
      }, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
  .postcard-result {
    display: grid;
    grid-template-columns: repeat(2, minmax(map-get($BREAKPOINTS, md) / 2, 1fr));
    align-items: center;
    height: 100%;
    overflow-x: auto;
    @include FLAT-SCROLL;

    &__image {
      justify-self: center;

      img {
        max-width: 100%;
      }
    }

    &__content {
      padding: 30px 15px;
    }
  }

  .postcard-swipe-arrow {
    display: none;
    flex-direction: column;
    padding: 20px 15px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: translate(20px, 0);
    }

    span {
      margin-left: 30px;
      margin-bottom: -20px;
    }

    &__img {
      width: 140px;
    }
  }

  @include MEDIA-MD {
    .postcard-swipe-arrow {
      display: flex;
    }
  }
</style>
