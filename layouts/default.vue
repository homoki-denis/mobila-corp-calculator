<template>
  <div class="text-white min-h-10">
    <button class="mb-4 flex">
      <NuxtLink v-if="route.path !== '/'" to="/"><IconsLeftArrow /></NuxtLink>
    </button>
    <slot />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
