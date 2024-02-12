<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <div
        class="bg-white text-black p-4 md:p-8 rounded shadow-md w-full max-w-md"
      >
        <p class="text-md font-bold mb-2">Inălțime corp colț suspendat</p>

        <div class="flex items-end">
          <input
            v-model="inaltimeCorp"
            type="number"
            placeholder="Introdu numarul de elemente"
            class="p-1.5 mt-2 border-2 rounded border-slate-950 hover:border-slate-500"
          />
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
            @click="calculeazaDimensiuni"
          >
            Calculeaza
          </button>
        </div>
      </div>

      <div
        class="bg-white text-black p-8 rounded shadow-md w-full max-w-md"
        v-for="(rez, i) in rezultate"
      >
        Laterale dulap: lungime {{ rez.lateraleDulap.lungime }}, latime
        {{ rez.lateraleDulap.latime }}<br />
        Fund și capac 1: lungime
        {{ rez.fundCapac1.lungime }}, latime {{ rez.fundCapac1.latime }}<br />
        Fund și capac 2: lungime {{ rez.fundCapac2.lungime }}, latime
        {{ rez.fundCapac2.latime }}<br />
        Spate pal: lungime {{ rez.spatePal.lungime }}, latime
        {{ rez.spatePal.latime }}<br />
        PFL: inaltime {{ rez.pfl.inaltime }}, lungime {{ rez.pfl.lungime }}
        <p class="font-bold">Corp colt sus</p>
        lungime {{ rez.corpColtSus[i].lungime }}, latime
        {{ rez.corpColtSus[i].latime }} (2 Buc)
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inaltimeCorp = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  e.preventDefault();
  const generareDimensiuniCorpSus = (inaltimeCorp) => {
    const lateraleDulap = {
      lungime: inaltimeCorp,
      latime: 300,
    };

    const fundCapac1 = {
      lungime: 564,
      latime: 300,
    };

    const fundCapac2 = {
      lungime: 282,
      latime: 282,
    };

    const spatePal = {
      lungime: inaltimeCorp,
      latime: 582,
    };

    const pfl = {
      inaltime: inaltimeCorp,
      lungime: 595,
    };

    const corpColtSus = [
      {
        lungime: inaltimeCorp,
        latime: 279,
      },
    ];

    return {
      lateraleDulap,
      fundCapac1,
      fundCapac2,
      spatePal,
      pfl,
      corpColtSus,
    };
  };
  rezultate.value.push(generareDimensiuniCorpSus(inaltimeCorp.value));
};
</script>
