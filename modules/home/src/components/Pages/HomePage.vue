<template>
  <AContainer fill-height>
    <div class="home-page">
      <div class="home-page__left">
        <h2
          class="home-page__title"
          v-text="$t('home.welcomeTitle')"
        />

        <div class="home-page__actions">
          <AButon>
            {{ $t('home.makePostcard') }}
          </AButon>
        </div>
      </div>
      <div class="home-page__right">
        <img
          class="home-page__postcard"
          src="@Home/assets/img/welcome.jpg"
          :alt="$t('postcard')"
        >
      </div>
    </div>
  </AContainer>
</template>

<script>
import AButon from '@UI/components/AButton/AButton';
import AContainer from '@UI/components/Layout/AContainer';

export default {
  components: {
    AButon,
    AContainer,
  },
};
</script>

<style lang="scss" scoped>
  .home-page {
    display: grid;
    align-items: center;
    height: 100%;
    grid-template-columns: 1fr 1fr;

    &__title {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }

    &__right {
      display: flex;
      justify-content: center;
    }

    &__postcard {
      display: block;
      max-width: 100%;
    }

    @include MEDIA-LG {
      &__title {
        font-size: 1.2rem;
      }
    }

    @include MEDIA-MD {
      grid-template-columns: 1fr;

      &__left {
        max-width: 570px;
        padding: 40px 18px;
      }
    }

    @include MEDIA-XS {
      &__left {
        padding-left: 0;
        padding-right: 0;
      }

      &__title {
        font-size: 1.1rem;
      }
    }
  }
</style>
