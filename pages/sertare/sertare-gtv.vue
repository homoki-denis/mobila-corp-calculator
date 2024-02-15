<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="corp-parte-jos">
            Sertare GTV
          </label>
          <label for="dimensiuneFund" class="text-sm font-bold"
            >Lungime fund</label
          >
          <input
            v-model="lungimeFund"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="dimensiuneFund"
            type="number"
            placeholder="Lungime fund"
          />

          <label for="dimensiuneFund" class="text-sm font-bold"
            >Numar de sertare</label
          >
          <input
            v-model="nrSertare"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="dimensiuneFund"
            type="number"
            placeholder="Numar sertare"
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
import { useSertareGtvStore } from "@/store/sertare-gtv";

const sertareGtvStore = useSertareGtvStore();
let valoriSertareGtv;

const lungimeFund = ref(0);
const nrSertare = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  e.preventDefault();

  const generareDimensiuni = (lungimeFund, nrSertare) => {
    let dimensiuni = [];
    let feteSertare = [];

    // dimensiune sertare set 1
    const a = {
      lungime: 450,
      latime: 105,
      bucati: 2,
    };

    const b = {
      lungime: lungimeFund - 99,
      latime: 105,
      bucati: 2,
    };

    const a2 = {
      lungime: 450,
      latime: 150,
      bucati: 2,
    };

    const b2 = {
      lungime: lungimeFund - 99,
      latime: 150,
      bucati: 2,
    };

    const a3 = {
      lungime: 450,
      latime: 230,
      bucati: 2,
    };

    const b3 = {
      lungime: lungimeFund - 99,
      latime: 230,
      bucati: 2,
    };

    const a4 = {
      lungime: 450,
      latime: 105,
      bucati: 8,
    };

    const b4 = {
      lungime: lungimeFund - 99,
      latime: 105,
      bucati: 8,
    };

    // dimensiuni fete sertar
    const feteSertar = {
      lungime: lungimeFund - 3,
      latime: 230,
    };

    const feteSertar2 = {
      lungime: lungimeFund - 3,
      latime: 265,
    };

    const feteSertar3 = {
      lungime: lungimeFund - 3,
      latime: 150,
    };

    const feteSertar4 = {
      lungime: lungimeFund - 3,
      latime: 183,
      bucati: 4,
    };

    if (nrSertare === 3) {
      dimensiuni.push(a, b, a2, b2, a3, b3);
      feteSertare.push(feteSertar, feteSertar2, feteSertar3);
    } else if (nrSertare === 4) {
      dimensiuni = [a4, b4];
      feteSertare = [feteSertar4];
    }

    return {
      dimensiuni,
      feteSertare,
    };
  };

  valoriSertareGtv = generareDimensiuni(lungimeFund.value, nrSertare.value);

  rezultate.value.push(valoriSertareGtv);

  sertareGtvStore.addRezultat(valoriSertareGtv);
};
</script>
