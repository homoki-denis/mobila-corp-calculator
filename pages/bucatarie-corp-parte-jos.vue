<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="corp-parte-jos">
            Bucatarie corp parte jos
          </label>
          <label for="dimensiuneFund" class="text-sm font-bold"
            >Dimensiune fund</label
          >
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
      </form>

      <div
        v-for="(rez, i) in rezultate"
        class="bg-white text-black p-8 rounded shadow-md w-full max-w-md"
      >
        <p class="text-gray-700">
          Dimensiuni laterale: lungime
          {{ rez.dimensiuneLaterala.lungime }}, latime
          {{ rez.dimensiuneLaterala.latime }}
          <br />
          Dimensiuni Piese de legătură: lungime
          {{ rez.dimensiunePieseLegatura.lungime }}, latime
          {{ rez.dimensiunePieseLegatura.latime }}
          <br />
          Dimensiuni PFL: lungime {{ rez.dimensiunePFL.lungime }}, latime
          {{ rez.dimensiunePFL.latime }}<br />
          Dimensiuni Poliță: lungime {{ rez.dimensiunePolita.lungime }}, latime
          {{ rez.dimensiunePolita.latime }} <br>
          <p class="font-bold"> Dimensiuni usi jos</p>
          lungime {{ rez.dimensiuneUsiJos[i].lungime }}, latime {{ rez.dimensiuneUsiJos[i].latime }} (<span>{{ rez.bucatiUsi }} Buc</span>) 
        
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dimensiuneFund = ref(0);
const rezultate = ref([]);
const rezultateUsiJos = [];

// Corp partea de jos
const calculeazaDimensiuni = (e) => {
  e.preventDefault();
  const generareDimensiuni = (dimensiuneFund) => {
    let latimeUsa;
    let bucatiUsi;

    // Calcul bucati usi
    if (dimensiuneFund > 450) {
      bucatiUsi = 2
    }
    else if(dimensiuneFund === 450) {
      bucatiUsi = 1
    }

    // Calcul latime / lungime usi
    if (dimensiuneFund > 450) {
      latimeUsa = (dimensiuneFund / 2) - 3 ;
      rezultateUsiJos.push({ lungime: 741, latime: latimeUsa });
      
    } else {
      latimeUsa = dimensiuneFund - 3 ;
      rezultateUsiJos.push({ lungime: 741, latime: latimeUsa });
      bucatiUsi = 1
    }

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
      dimensiuneUsiJos: rezultateUsiJos,
      bucatiUsi: bucatiUsi
    };
  };
  rezultate.value.push(generareDimensiuni(dimensiuneFund.value));

};
</script>
