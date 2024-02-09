<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="corp-parte-jos">
            Bucatarie colt parte jos
          </label>
          <label for="dimensiuneFund" class="text-sm font-bold"
            >Inaltime corp</label
          >
          <input
            v-model="inaltimeCorp"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorp"
            type="number"
            placeholder="Inaltime corp"
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
        class="bg-white text-black px-8 py-8 rounded shadow-md w-full max-w-md"
      >
        <p class="text-gray-700">
          Dimensiuni laterale: lungime
          {{ rez.dimensiuneLaterala.lungime }}, latime
          {{ rez.dimensiuneLaterala.latime }}
          <br />
          Dimensiune fund: lungime
          {{ rez.dimensiuneFund.lungime }}, latime
          {{ rez.dimensiuneFund.latime }}
          <br />
          Dimensiune Fund 2: lungime
          {{ rez.dimensiuneFund300.lungime }}, latime
          {{ rez.dimensiuneFund300.latime }}
          <br />
          Dimensiune Polita: lungime {{ rez.dimensiunePolita.lungime }}, latime
          {{ rez.dimensiunePolita.latime }}
          <br />
          Dimensiune Legatura 1: lungime {{ rez.dimensiuneLegatura1.lungime }},
          latime
          {{ rez.dimensiuneLegatura1.latime }}
          <br />
          Dimensiune Legatura 2: lungime {{ rez.dimensiuneLegatura2.lungime }},
          latime
          {{ rez.dimensiuneLegatura2.latime }}
          <br />
          Dimensiune Spate: lungime {{ rez.dimensiuneSpate.lungime }}, latime
          {{ rez.dimensiuneSpate.latime }}
          <br />
          Dimensiune PFL: lungime {{ rez.dimensiunePFL.lungime }}, latime
          {{ rez.dimensiunePFL.latime }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dimensiuneFund = ref(0);
const rezultate = ref([]);

// Corp colț jos bucatarie
const calculeazaDimensiuni = (e) => {
  e.preventDefault();
  function generareDimensiuniColtJos(inaltimeCorp) {
    // Calcularea dimensiunii laterale
    const dimensiuneLaterala = {
      lungime: 728,
      latime: 500,
    };

    // Calcularea dimensiunii Fund (800x500-1 buc)
    const dimensiuneFund = {
      lungime: 800,
      latime: 500,
    };

    // Calcularea dimensiunii Fund (300x500-1 buc)
    const dimensiuneFund300 = {
      lungime: 300,
      latime: 500,
    };

    // Calcularea dimensiunii Poliță (764x500-1 buc)
    const dimensiunePolita = {
      lungime: 764,
      latime: 500,
    };

    // Calcularea dimensiunilor Legăturilor
    const dimensiuneLegatura1 = {
      lungime: 764,
      latime: 100,
    };

    const dimensiuneLegatura2 = {
      lungime: 282,
      latime: 495,
    };

    // Calcularea dimensiunii Spate
    const dimensiuneSpate = {
      lungime: 728,
      latime: 782,
    };

    // Calcularea dimensiunii PFL
    const dimensiunePFL = {
      lungime: 741,
      latime: 795,
    };

    // Actualizarea înălțimii în funcție de parametrul primit
    dimensiuneLaterala.latime = inaltimeCorp;
    dimensiuneFund.latime = inaltimeCorp;
    dimensiuneFund300.latime = inaltimeCorp;
    dimensiunePolita.latime = inaltimeCorp;
    dimensiuneLegatura1.latime = inaltimeCorp - 5;
    dimensiuneLegatura2.latime = inaltimeCorp - 5;
    dimensiuneSpate.latime = inaltimeCorp - 36;
    dimensiunePFL.latime = inaltimeCorp - 5;

    // Returnarea rezultatelor sub formă de obiect
    return {
      dimensiuneLaterala: dimensiuneLaterala,
      dimensiuneFund: dimensiuneFund,
      dimensiuneFund300: dimensiuneFund300,
      dimensiunePolita: dimensiunePolita,
      dimensiuneLegatura1: dimensiuneLegatura1,
      dimensiuneLegatura2: dimensiuneLegatura2,
      dimensiuneSpate: dimensiuneSpate,
      dimensiunePFL: dimensiunePFL,
    };
  }
  rezultate.value.push(generareDimensiuniColtJos(inaltimeCorp.value));
  console.log(rezultate);
};
</script>
