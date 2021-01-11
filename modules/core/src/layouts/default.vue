<template>
  <App>
    <AToolBar>
      Content
    </AToolBar>
    <AppMain>
      <slot />
    </AppMain>
  </App>
</template>

<script>
import AToolBar from '@UI/components/AToolBar/AToolBar';
import App from '@UI/components/Layout/App';
import AppMain from '@UI/components/Layout/AppMain';

export default {
  name: 'DefaultLayout',
  components: {
    App,
    AppMain,
    AToolBar,
  },
};
</script>
