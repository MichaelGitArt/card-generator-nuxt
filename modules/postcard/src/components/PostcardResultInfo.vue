<template>
  <div class="postcard-result-info">
    <div
      class="postcard-result-info__title"
      v-text="$t('postcard.result.title')"
    />
    <a
      class="postcard-result-info__link"
      :href="shareUrl"
      v-text="shareUrl"
      @click="onCopyLink"
    />
    <div class="postcard-result-info__hint-wrapper">
      <AButton
        size="small"
        @click.native="onCopyLink"
      >
        <span
          v-text="$t('postcard.result.btnLabel')"
        />
      </AButton>

      <span
        v-if="isLinkCopied"
        class="postcard-result-info__hint"
        v-text="$t('postcard.result.copied')"
      />
    </div>
  </div>
</template>

<script>
import {
  copyToClipboard,
} from '@Core/model/domHelper';
import AButton from '@UI/components/AButton/AButton';

export default {
  name: 'PostcardResultInfo',
  components: {
    AButton,
  },
  props: {
    shareUrl: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isLinkCopied: false,
  }),
  methods: {
    onCopyLink() {
      copyToClipboard(this.shareUrl);
      this.isLinkCopied = true;
      setTimeout(() => {
        this.isLinkCopied = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
  .postcard-result-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__title {
      font-size: 1.2em;
      font-weight: 700;
    }

    &__link {
      word-break: break-all;
      line-height: 1;
      font-size: 0.8rem;
      margin-bottom: 10px;
    }

    &__hint-wrapper {
      position: relative;
      margin-bottom: 30px;
    }

    &__hint {
      position: absolute;
      top: calc(100% + 5px);
      left: 50%;
      height: 25px;
      border: 1px solid $BLUE;
      padding: 2px 10px;
      background: $WHITE;
      box-shadow: 0 0 23px 2px $WHITE;
      transform: translate(-50%, 0);
      color: $BLUE;
      font-size: 0.5rem;
      text-transform: uppercase;
    }
  }
</style>
