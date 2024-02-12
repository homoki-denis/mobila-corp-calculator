<template>
  <div class="text-white min-h-10 relative">
    <img
      class="-z-10 absolute left-1/2 transform -translate-x-1/2 w-64"
      src="~/assets/images/background.jpg"
      alt=""
    />
    <button class="mb-4 flex z-50">
      <NuxtLink v-if="route.path !== '/'" to="/"><IconsLeftArrow /></NuxtLink>
    </button>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
