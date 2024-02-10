<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <div
        class="bg-white text-black p-4 md:p-8 rounded shadow-md w-full max-w-md"
      >
        <p class="text-md font-bold mb-2">Bucatarie corp colt jos</p>
        <p v-for="rez in rezultate" class="text-gray-700">
          {{ rez.nume }}: lungime {{ rez.lungime }}, latime {{ rez.latime }}
        </p>
        <div class="flex items-end">
          <input
            v-model="numarElemente"
            type="number"
            placeholder="Introdu numarul de elemente"
            class="p-1.5 mt-2 border-2 rounded border-slate-950 hover:border-slate-500"
          />
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
            @click="afiseazaElemente"
          >
            Afiseaza
          </button>
        </div>
      </div>
      <div
        v-for="array in arrayRezultate"
        class="bg-white text-black px-8 py-8 rounded shadow-md w-full max-w-md"
      >
        <div v-for="afis in array">
          <p>
            {{ afis.nume }}: lungime {{ afis.lungime }}, latime
            {{ afis.latime }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const numarElemente = ref(0);
const arrayRezultate = ref([]);

const rezultate = ref([
  {
    nume: "Dimensiune Laterala",
    lungime: 728,
    latime: 500,
  },
  {
    nume: "Dimensiune Laterala 2",
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

const afiseazaElemente = () => {
  arrayRezultate.value = [];

  for (let i = 0; i < numarElemente.value; i++) {
    arrayRezultate.value.push([...rezultate.value]);
  }
};
</script>
