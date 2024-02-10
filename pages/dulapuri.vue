<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="adancimeDulap">
            Dulapuri
          </label>
          <label for="adancimeDulap" class="text-sm font-bold"
            >Adâncime dulap</label
          >
          <input
            v-model="adancimeDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="lungimeCorpSus"
            type="number"
            placeholder="Dimensiune fund"
          />

          <label for="lungimeDulap" class="text-sm font-bold"
            >Lungime dulap</label
          >
          <input
            v-model="lungimeDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Dimensiune fund"
          />

          <label for="inaltimeDulap" class="text-sm font-bold"
            >Inălțime dulap</label
          >
          <input
            v-model="inaltimeDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Dimensiune fund"
          />

          <label for="numarPoliteDulap" class="text-sm font-bold"
            >Număr de polițe dulap</label
          >
          <input
            v-model="numarPoliteDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Dimensiune fund"
          />
        </div>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="calculeazaDimensiuni"
        >
          Calculeaza
        </button>
      </form>

      <div
        v-for="rez in rezultate"
        class="bg-white text-black px-8 py-12 rounded shadow-md w-full max-w-md"
      >
        <p class="text-gray-700">
          Dimensiune laterala 1: {{ rez.lateraleDulap1 }} <br />
          Dimensiune laterala 2: {{ rez.lateraleDulap2 }} <br />
          Fund dulap: {{ rez.fundDulap }} <br />
          Capac dulap: {{ rez.capacDulap }} <br />
          Polita dulap: {{ rez.politaDulap }} <br />
          PFL dulap: {{ rez.pflDulap }} <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const adancimeDulap = ref(0);
const lungimeDulap = ref(0);
const inaltimeDulap = ref(0);
const numarPoliteDulap = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  e.preventDefault();

  const lateraleDulap1 = (inaltimeDulap.value - 100 - 36) * adancimeDulap.value;
  const lateraleDulap2 = (inaltimeDulap.value - 100 - 36) * adancimeDulap.value;
  const fundDulap = lungimeDulap.value * adancimeDulap.value;
  const capacDulap = lungimeDulap.value * adancimeDulap.value;
  const politaDulap =
    ((lungimeDulap.value - 36) * adancimeDulap.value - 5) *
    numarPoliteDulap.value;
  const pflDulap = (inaltimeDulap.value - 100 - 5) * lungimeDulap.value - 5;

  rezultate.value.push({
    lateraleDulap1,
    lateraleDulap2,
    fundDulap,
    capacDulap,
    politaDulap,
    pflDulap,
  });

  console.log(rezultate.value);
};
</script>
