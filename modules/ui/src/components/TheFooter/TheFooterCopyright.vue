<template>
  <span class="the-footer-coptyright">
    © Copyright {{ new Date().getFullYear() }}.
  </span>
</template>

<script>
export default {
  name: 'TheFooterCopyright',
};
</script>

<style lang="scss" scoped>
.the-footer-coptyright {
  font-size: 0.6em;
}
</style>
