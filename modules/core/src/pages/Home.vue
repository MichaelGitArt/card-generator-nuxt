<template>
  <div>
    {{ $t('hello') }} <br>
    <AButon>
      App Button
    </AButon>
  </div>
</template>

<script>
import AButon from '@UI/components/AButton';

export default {
  components: {
    AButon,
  },
};
</script>
