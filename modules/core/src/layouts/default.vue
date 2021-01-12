<template>
  <App>
    <TheToolBar />
    <AppMain>
      <slot />
    </AppMain>
    <TheFooter />
  </App>
</template>

<script>
import App from '@UI/components/Layout/App';
import AppMain from '@UI/components/Layout/AppMain';
import TheFooter from '@UI/components/TheFooter/TheFooter';
import TheToolBar from '@UI/components/TheToolBar/TheToolBar';

export default {
  name: 'DefaultLayout',
  components: {
    App,
    AppMain,
    TheFooter,
    TheToolBar,
  },
};
</script>
