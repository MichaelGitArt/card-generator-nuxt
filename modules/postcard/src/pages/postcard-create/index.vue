<template>
  <div class="postcard">
    <div class="postcard-content">
      <CreatePostcardForm />
    </div>
    <div class="postcard-bg" />
  </div>
</template>

<script>
import CreatePostcardForm from '@Postcard/components/Forms/CreatePostcardForm';

export default {
  name: 'PostcardCreate',
  components: {
    CreatePostcardForm,
  },
};
</script>

<style lang="scss" scoped>
  .postcard {
    display: grid;
    grid-template-columns: repeat(2, minmax(380px, 1fr));
    height: 100%;
    overflow-x: auto;
    @include FLAT-SCROLL;
  }

  .postcard-content {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: minmax(auto, 600px);
    height: 100%;
    padding: 20px 30px;
  }

  .postcard-bg {
    background-image: url("~@Postcard/assets/img/create-bg.jpg");
    background-size: cover;
  }

  @include MEDIA-XS {
    .postcard {
      grid-template-columns: repeat(2, minmax(320px, 1fr));
    }

    .postcard-content {
      padding: 20px 15px;
    }
  }
</style>
