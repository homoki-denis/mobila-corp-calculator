<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="corp-parte-jos">
            Sertare Blum
          </label>
          <label for="lungimeFund" class="text-sm font-bold"
            >Lungime fund</label
          >
          <input
            v-model="lungimeFund"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="lungimeFund"
            type="number"
            placeholder="Lungime fund"
          />

          <label for="adancimeCorp" class="text-sm font-bold"
            >Adancime corp</label
          >
          <input
            v-model="adancimeCorp"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="adancimeCorp"
            type="number"
            placeholder="Adancime corp"
          />

          <label for="nrSertare" class="text-sm font-bold">Nr sertare</label>
          <input
            v-model="nrSertare"
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

const adancimeCorp = ref(0);
const lungimeFund = ref(0);
const nrSertare = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  e.preventDefault();

  const generareDimensiuni = (adancimeCorp, lungimeFund, nrSertare) => {
    let dimensiuni = [];
    let feteSertare = [];

    if (nrSertare === 3) {
      const adancimeCorp1 = {
        lungime: adancimeCorp - 60,
        latime: 220,
        bucati: 4,
      };

      const adancimeCorp2 = {
        lungime: adancimeCorp - 60,
        latime: 130,
        bucati: 2,
      };

      const lungimeFund1 = {
        lungime: lungimeFund - 86,
        latime: 190,
        bucati: 4,
      };

      const lungimeFund2 = {
        lungime: lungimeFund - 86,
        latime: 100,
        bucati: 2,
      };

      const adancimeCorp3 = {
        lungime: adancimeCorp - 60,
        latime: lungimeFund - 86,
        bucati: 3,
      };

      const feteSertar1 = {
        lungime: lungimeFund - 3,
        latime: 274,
        bucati: 2,
      };

      const feteSertar2 = {
        lungime: lungimeFund - 3,
        latime: 187,
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
    } else if (nrSertare === 4) {
      const adancimeCorp1 = {
        lungime: adancimeCorp - 60,
        latime: 130,
        bucati: 8,
      };

      const lungimeFund1 = {
        lungime: lungimeFund - 86,
        latime: 100,
        bucati: 8,
      };

      const adancimeCorp3 = {
        lungime: adancimeCorp - 60,
        latime: lungimeFund - 86,
        bucati: 4,
      };

      const feteSertar1 = {
        lungime: lungimeFund - 3,
        latime: 183,
        bucati: 4,
      };

      dimensiuni.push(adancimeCorp1, lungimeFund1, adancimeCorp3);
      feteSertare.push(feteSertar1);
    }

    return {
      dimensiuni,
      feteSertare,
    };
  };

  const valoriSertareBlum = generareDimensiuni(
    adancimeCorp.value,
    lungimeFund.value,
    nrSertare.value
  );

  rezultate.value.push(valoriSertareBlum);

  sertareGtvStore.addRezultat(valoriSertareBlum);
};
</script>
