<template>
  <div
    class="postcard-share"
  >
    <img
      alt="postcard"
      :src="img"
    >
  </div>
</template>

<script>
export default {
  name: 'PostcardShare',
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
};
</script>

<style lang="scss" scoped>
  .postcard-share {
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }
</style>
