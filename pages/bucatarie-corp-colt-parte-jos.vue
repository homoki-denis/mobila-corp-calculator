<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <div
        class="bg-white text-black px-8 py-8 rounded shadow-md w-full max-w-md"
      >
        <p v-for="rez in rezultate" class="text-gray-700">
          {{ rez.nume }}: lungime {{ rez.lungime }}, latime {{ rez.latime }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const rezultate = ref([
  {
    nume: "Dimensiune Laterala",
    lungime: 728,
    latime: 500,
  },
  {
    nume: "Dimensiune Fund",
    lungime: 800,
    latime: 500,
  },
  {
    nume: "Dimensiune Fund 2",
    lungime: 300,
    latime: 500,
  },
  {
    nume: "Dimensiune Polita",
    lungime: 764,
    latime: 500,
  },
  {
    nume: "Dimensiune Legatura 1",
    lungime: 764,
    latime: 100,
  },
  {
    nume: "Dimensiune Legatura 2",
    lungime: 282,
    latime: 495,
  },
  {
    nume: "Dimensiune Spate",
    lungime: 728,
    latime: 782,
  },
  {
    nume: "Dimensiune PFL",
    lungime: 741,
    latime: 795,
  },
]);

console.log(rezultate.value.nume);
</script>
