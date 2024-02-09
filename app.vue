<template>
  <div class="flex items-center justify-center min-h-screen">
    <form class="bg-white p-8 rounded shadow-md w-full max-w-md mx-4">
      <div class="mb-4 text-gray-700">
        <label class="block text-sm font-bold mb-2" for="username">
          Corp parte jos
        </label>
        <input
          v-model="dimensiuneFund"
          class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="dimensiuneFund"
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
      <div v-if="rezultate" class="mt-4">
        <p class="text-gray-700">
          Dimensiuni laterale: lungime
          {{ rezultate.dimensiuneLaterala.lungime }}, latime
          {{ rezultate.dimensiuneLaterala.latime }}
          <br />
          Dimensiuni Piese de legătură: lungime
          {{ rezultate.dimensiunePieseLegatura.lungime }}, latime
          {{ rezultate.dimensiunePieseLegatura.latime }}
          <br />
          Dimensiuni PFL: lungime {{ rezultate.dimensiunePFL.lungime }}, latime
          {{ rezultate.dimensiunePFL.latime }}<br />
          Dimensiuni Poliță: lungime {{ rezultate.dimensiunePolita.lungime }},
          latime {{ rezultate.dimensiunePolita.latime }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dimensiuneFund = ref(0);
const rezultate = ref(null);

// Corp partea de jos

const calculeazaDimensiuni = (e) => {
  e.preventDefault();
  const generareDimensiuni = (dimensiuneFund) => {
    // Calcularea dimensiunii laterale
    const dimensiuneLaterala = {
      lungime: 728,
      latime: 500,
    };

    // Calcularea dimensiunii Piese de legătură
    const dimensiunePieseLegatura = {
      lungime: dimensiuneFund - 36,
      latime: 100,
    };

    // Calcularea dimensiunii PFL
    const dimensiunePFL = {
      lungime: 728 + 18 - 5,
      latime: dimensiuneFund - 5,
    };

    // Calcularea dimensiunii Poliță
    const dimensiunePolita = {
      lungime: dimensiuneFund - 36,
      latime: 500 - 5,
    };

    // Returnarea rezultatelor sub formă de obiect
    return {
      dimensiuneLaterala: dimensiuneLaterala,
      dimensiunePieseLegatura: dimensiunePieseLegatura,
      dimensiunePFL: dimensiunePFL,
      dimensiunePolita: dimensiunePolita,
    };
  };
  rezultate.value = generareDimensiuni(dimensiuneFund.value);
  console.log(rezultate.value.dimensiuneLaterala.latime);
};
</script>
