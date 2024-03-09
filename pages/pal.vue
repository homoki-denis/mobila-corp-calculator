<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="corp-parte-jos">
            Pal
          </label>
          <label for="lungimeCorpSus" class="text-sm font-bold"
            >Lungime Pal</label
          >
          <input
            v-model="lungimePal"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="lungimeCorpSus"
            type="number"
            placeholder="Lungime"
          />
          <label for="lungimeCorpSus" class="text-sm font-bold"
            >Latime Pal</label
          >
          <input
            v-model="latimePal"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Inaltime"
          />
          <label for="lungimeCorpSus" class="text-sm font-bold"
            >Nr. Piese</label
          >
          <input
            v-model="nrPiese"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Polite"
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
        v-for="(rez, index) in rezultate"
        :key="index"
        class="bg-white text-black px-8 py-12 rounded shadow-md w-full max-w-md"
      >
        <p class="text-gray-700">
          Lungime Pal: {{ rez.lungimePal }}<br />
          Latime Pal: {{ rez.latimePal }}<br />
          Nr. Piese: {{ rez.nrPiese }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePalStore } from "@/store/pal";
const palStore = usePalStore();

const lungimePal = ref(0);
const latimePal = ref(0);
const nrPiese = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  e.preventDefault();

  const generareDimensiuni = (lungimePal, latimePal, nrPiese) => {
    return {
      lungimePal,
      latimePal,
      nrPiese,
    };
  };

  rezultate.value.push(
    generareDimensiuni(lungimePal.value, latimePal.value, nrPiese.value)
  );

  const valoriPal = generareDimensiuni(
    lungimePal.value,
    latimePal.value,
    nrPiese.value
  );

  palStore.addRezultat(valoriPal);

  console.log(rezultate);
};
</script>
