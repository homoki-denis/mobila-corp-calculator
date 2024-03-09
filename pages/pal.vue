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
            v-model="lungimeCorpSus"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="lungimeCorpSus"
            type="number"
            placeholder="Lungime"
          />
          <label for="lungimeCorpSus" class="text-sm font-bold"
            >Latime Pal</label
          >
          <input
            v-model="inaltimeCorpSus"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Inaltime"
          />
          <label for="lungimeCorpSus" class="text-sm font-bold"
            >Nr. Piese</label
          >
          <input
            v-model="nrPolita"
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
        v-for="(rez, i) in rezultate"
        class="bg-white text-black px-8 py-12 rounded shadow-md w-full max-w-md"
      >
        <p class="text-gray-700">
          Dimensiuni laterale: lungime {{ rez.dimensiuneLaterala.lungime }},
          latime {{ rez.dimensiuneLaterala.latime }} (2 Buc)
          <br />
          Dimensiuni PFL: lungime {{ rez.dimensiunePFL.lungime }}, latime
          {{ rez.dimensiunePFL.latime }}
          <br />
          Dimensiuni Polita: lungime {{ rez.dimensiunePolita.lungime }}, latime
          {{ rez.dimensiunePolita.latime }} ({{ rez.nrPolita }} Buc)
          <br />
          Dimensiuni fund și capac: lungime
          {{ rez.dimensiuneFundCap.lungime }}, latime
          {{ rez.dimensiuneFundCap.latime }}
        </p>
        <p class="font-bold">Dimensiuni usi sus</p>
        lungime {{ rez.rezultateUsiSus.lungime }}, latime
        {{ rez.rezultateUsiSus.latime }} ({{ rez.bucati }} Buc)
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBucatarieCorpParteSus } from "@/store/bucatarie-corp-parte-sus";

const bucatarieCorpParteSusStore = useBucatarieCorpParteSus();
let valoriBucatarieCorpParteSus;

const lungimeCorpSus = ref(0);
const inaltimeCorpSus = ref(0);
const nrPolita = ref(0);
const initialNrPolita = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  const initialNrPolita = nrPolita.value;
  let rezultateUsiSus;
  e.preventDefault();
  const generareDimensiuni = (lungimeCorpSus, inaltimeCorpSus) => {
    let latimeUsa;
    let bucati;
    if (lungimeCorpSus <= 450) {
      latimeUsa = lungimeCorpSus - 3;
      bucati = 1;
    } else {
      latimeUsa = lungimeCorpSus / 2 - 3;
      bucati = 2;
    }

    rezultateUsiSus = {
      lungime: inaltimeCorpSus,
      latime: latimeUsa,
      bucati: bucati,
    };
    // Calcularea dimensiunii laterale
    const dimensiuneLaterala = {
      lungime: inaltimeCorpSus,
      latime: 300,
      bucati: 2,
    };

    // Calcularea dimensiunii PFL
    const dimensiunePFL = {
      lungime: lungimeCorpSus - 5,
      latime: inaltimeCorpSus - 5,
      bucati: 1,
    };

    // Calcularea dimensiunii Poliță
    const dimensiunePolita = {
      lungime: lungimeCorpSus - 36,
      latime: 295,
      bucati: initialNrPolita,
    };

    // Calcularea dimensiunilor fundului și capacului
    const latimeFundCap = lungimeCorpSus - 36;
    const dimensiuneFundCap = {
      lungime: latimeFundCap,
      latime: 300,
      bucati: 2,
    };

    // Returnarea rezultatelor sub formă de obiect
    return {
      dimensiuneLaterala: dimensiuneLaterala,
      dimensiunePFL: dimensiunePFL,
      dimensiunePolita: dimensiunePolita,
      dimensiuneFundCap: dimensiuneFundCap,
      rezultateUsiSus: rezultateUsiSus,
      nrPolita: initialNrPolita,
      bucati: bucati,
    };
  };

  valoriBucatarieCorpParteSus = generareDimensiuni(
    lungimeCorpSus.value,
    inaltimeCorpSus.value
  );

  rezultate.value.push(valoriBucatarieCorpParteSus);

  bucatarieCorpParteSusStore.addRezultat(valoriBucatarieCorpParteSus);
};
</script>
