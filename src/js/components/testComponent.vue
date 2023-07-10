<template>
  <h1>hello</h1>
  <div>{{ name }}</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "testComponent",
  watch: {},
  data() {
    return {
      name: "I am a vue component",
    };
  },
});
</script>
