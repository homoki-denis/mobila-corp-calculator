<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <div
        class="bg-white text-black p-4 md:p-8 rounded shadow-md w-full max-w-md"
      >
        <p class="text-md font-bold mb-2">Bucatarie corp colt jos</p>
        <p v-for="(rez, i) in rezultate" class="text-gray-700">
          {{ i }}: lungime {{ rez.lungime }}, latime {{ rez.latime }}
          {{ rez.bucati ? `(${rez.bucati} Buc)` : "" }}
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
        <div v-for="(afis, i) in array">
          <p>
            {{ i }}: lungime {{ afis.lungime }}, latime {{ afis.latime }}
            {{ afis.bucati ? `(${afis.bucati} Buc)` : "" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBucatarieCorpColtParteJos } from "@/store/bucatarie-corp-colt-parte-jos";

const bucatarieCorpColtParteJosStore = useBucatarieCorpColtParteJos();
let valoriBucatarieCorpColtParteJos;

const numarElemente = ref(0);
const arrayRezultate = ref([]);

const rezultate = ref({
  dimensiuneLaterala: {
    lungime: 728,
    latime: 500,
  },
  dimensiuneLaterala2: {
    lungime: 728,
    latime: 500,
  },
  dimensiuneFund: {
    lungime: 800,
    latime: 500,
  },
  dimensiuneFund2: {
    lungime: 300,
    latime: 500,
  },
  dimensiunePolita: {
    lungime: 764,
    latime: 500,
  },
  dimensiunePolita2: {
    lungime: 282,
    latime: 480,
  },
  dimensiuneLegatura1: {
    lungime: 764,
    latime: 100,
    bucati: 2,
  },
  dimensiuneLegatura2: {
    lungime: 282,
    latime: 100,
    bucati: 2,
  },
  dimensiuneSpate: {
    lungime: 728,
    latime: 782,
  },
  dimensiunePFL: {
    lungime: 741,
    latime: 795,
  },
  dimensiuniUsi: {
    lungime: 741,
    latime: 279,
    bucati: 2,
  },
});

const afiseazaElemente = () => {
  arrayRezultate.value = Array.from({ length: numarElemente.value }, () => ({
    ...rezultate.value,
  }));

  console.log(arrayRezultate);
};

bucatarieCorpColtParteJosStore.addRezultat(arrayRezultate);
</script>
