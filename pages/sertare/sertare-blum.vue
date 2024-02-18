<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="corp-parte-jos">
            Sertare Blum
          </label>
          <label for="dimensiuneFund" class="text-sm font-bold"
            >Lungime fund</label
          >
          <input
            v-model="lungimeFund"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="lungimeFund"
            type="number"
            placeholder="Lungime fund"
          />

          <label for="dimensiuneFund" class="text-sm font-bold"
            >Adancime corp</label
          >
          <input
            v-model="adancimeCorp"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="adancimeCorp"
            type="number"
            placeholder="Adancime corp"
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
        class="bg-white text-black p-8 rounded shadow-md w-full max-w-md"
      >
        <p class="font-bold">Dimensiune</p>
        <p v-for="(dimensiune, j) in rez.dimensiuni" class="text-gray-700">
          Lungime {{ dimensiune.lungime }}, latime {{ dimensiune.latime }} ({{
            dimensiune.bucati
          }}
          Buc)
        </p>
        <p class="font-bold">Fete Sertare</p>
        <p v-for="(sertare, k) in rez.feteSertare" class="text-gray-700">
          Lungime {{ sertare.lungime }}, latime {{ sertare.latime }} ({{
            sertare.bucati ? sertare.bucati : 1
          }}
          Buc)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSertareBlumStore } from "@/store/sertare-blum";

const sertareGtvStore = useSertareBlumStore();
let valoriSertareBlum;

const adancimeCorp = ref(0);
const lungimeFund = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  e.preventDefault();

  const generareDimensiuni = (adancimeCorp, lungimeFund) => {
    let dimensiuni = [];
    let feteSertare = [];

    // adancime corp
    const adancimeCorp1 = {
      latime: adancimeCorp - 50,
      lungime: 220,
      bucati: 4,
    };

    const adancimeCorp2 = {
      latime: adancimeCorp - 50,
      lungime: 130,
      bucati: 2,
    };

    // lungime fund
    const lungimeFund1 = {
      latime: lungimeFund - 86,
      lungime: 190,
      bucati: 4,
    };

    const lungimeFund2 = {
      latime: lungimeFund - 86,
      lungime: 100,
      bucati: 2,
    };

    const adancimeCorp3 = {
      latime: adancimeCorp - 50,
      lungime: lungimeFund - 86,
      bucati: 3,
    };

    // fete sertar
    const feteSertar1 = {
      latime: lungimeFund - 3,
      lungime: 274,
      bucati: 2,
    };

    const feteSertar2 = {
      latime: lungimeFund - 3,
      lungime: 187,
      bucati: 1,
    };

    dimensiuni.push(
      adancimeCorp1,
      adancimeCorp2,
      lungimeFund1,
      lungimeFund2,
      adancimeCorp3
    );
    feteSertare.push(feteSertar1, feteSertar2);

    return {
      dimensiuni,
      feteSertare,
    };
  };

  valoriSertareBlum = generareDimensiuni(adancimeCorp.value, lungimeFund.value);

  rezultate.value.push(valoriSertareBlum);

  sertareGtvStore.addRezultat(valoriSertareBlum);
};
</script>
