<template>
  <form
    class="postcard-form"
    @submit.prevent="onSubmit"
  >
    <AInputLabel
      :label="$t('postcard.create.forWho')"
    >
      <ATextField
        v-model="name"
        :placeholder="$t('postcard.create.forWhoPlaceholder')"
      />
    </AInputLabel>

    <AInputLabel
      :label="$t('postcard.create.withWhat')"
    >
      <ASelect
        v-model="selectedCategory"
        :placeholder="$t('postcard.create.withWhatPlaceholder')"
        :options="translatedCategories"
      />
    </AInputLabel>

    <AButton
      type="submit"
      class="postcard-form__submit"
    >
      {{ $t('postcard.create.create') }}
    </AButton>
  </form>
</template>

<script>
import AButton from '@UI/components/AButton/AButton';
import AInputLabel from '@UI/components/AInputLabel/AInputLabel';
import ASelect from '@UI/components/ASelect/ASelect';
import ATextField from '@UI/components/ATextField/ATextField';
import {
  mapState,
} from 'vuex';

export default {
  name: 'CreatePostcardForm',
  components: {
    AButton,
    AInputLabel,
    ASelect,
    ATextField,
  },
  data: () => ({
    name: '',
    selectedCategory: '',
  }),
  computed: {
    ...mapState('postcard', [
      'categories',
    ]),
    translatedCategories() {
      return this.categories.map(option => ({
        ...option,
        label: this.$t(`postcard.holidays.${option.id}`),
      }));
    },
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.selectedCategory) {
        alert(this.$t('postcard.create.wrongFields'));
        return;
      }
      this.$store.dispatch('postcard/createCard', {
        name: this.name,
        category: this.selectedCategory,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .postcard-form {
    display: grid;
    row-gap: 25px;

    &__submit {
      margin-top: 30px;
    }
  }
</style>
