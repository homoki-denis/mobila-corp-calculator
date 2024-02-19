<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div class="flex w-full items-center justify-center flex-wrap gap-2 mx-2">
      <form class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div class="mb-4 text-gray-700">
          <label class="block text-md font-bold mb-2" for="adancimeDulap">
            Dulapuri
          </label>
          <label for="adancimeDulap" class="text-sm font-bold"
            >Adâncime dulap</label
          >
          <input
            v-model="adancimeDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="lungimeCorpSus"
            type="number"
            placeholder="Dimensiune fund"
          />

          <label for="lungimeDulap" class="text-sm font-bold"
            >Lungime dulap</label
          >
          <input
            v-model="lungimeDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Dimensiune fund"
          />

          <label for="inaltimeDulap" class="text-sm font-bold"
            >Inălțime dulap</label
          >
          <input
            v-model="inaltimeDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
            type="number"
            placeholder="Dimensiune fund"
          />

          <label for="numarPoliteDulap" class="text-sm font-bold"
            >Număr de polițe dulap</label
          >
          <input
            v-model="numarPoliteDulap"
            class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="inaltimeCorpSus"
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
        v-for="rez in rezultate"
        class="bg-white text-black px-8 py-12 rounded shadow-md w-full max-w-md"
      >
        <p class="text-gray-700">
          Dimensiune laterala 1: lungime {{ rez.lateraleDulap1.lungime }},
          latime {{ rez.lateraleDulap1.latime }}, Buc ({{
            rez.lateraleDulap1.bucati
          }}) <br />
          Dimensiune laterala 2: lungime {{ rez.lateraleDulap2.lungime }},
          latime {{ rez.lateraleDulap2.latime }}, Buc ({{
            rez.lateraleDulap2.bucati
          }}) <br />
          Fund dulap: lungime {{ rez.fundDulap.lungime }}, latime
          {{ rez.fundDulap.latime }}, Buc ({{ rez.fundDulap.bucati }})
          <br />
          Capac dulap: lungime {{ rez.capacDulap.lungime }}, latime
          {{ rez.capacDulap.latime }}, Buc ({{ rez.capacDulap.bucati }})
          <br />
          Polita dulap: lungime {{ rez.politaDulap.lungime }}, latime
          {{ rez.politaDulap.latime }}, Buc ({{ rez.politaDulap.polite }})<br />
          PFL dulap: inaltime {{ rez.pflDulap.inaltime }}, lungime
          {{ rez.pflDulap.lungime }}, Buc ({{ rez.pflDulap.bucati }})<br />
          Usi dulap: lungime {{ rez.usiDulap.lungime }}, latime
          {{ rez.usiDulap.latime }}, Buc ({{ rez.usiDulap.bucati }})<br />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDulapuriStore } from "@/store/dulapuri";

const dulapuriStore = useDulapuriStore();

const adancimeDulap = ref(0);
const lungimeDulap = ref(0);
const inaltimeDulap = ref(0);
const numarPoliteDulap = ref(0);
const rezultate = ref([]);

const calculeazaDimensiuni = (e) => {
  e.preventDefault();

  const generareDimensiuni = (
    lungimeDulap,
    adancimeDulap,
    inaltimeDulap,
    numarPoliteDulap
  ) => {
    // Calcularea dimensiunilor
    const lateraleDulap1 = {
      lungime: inaltimeDulap - 100 - 36,
      latime: adancimeDulap,
      bucati: 1,
    };

    const lateraleDulap2 = {
      lungime: inaltimeDulap - 100 - 36,
      latime: adancimeDulap,
      bucati: 1,
    };

    const fundDulap = {
      lungime: lungimeDulap,
      latime: adancimeDulap,
      bucati: 1,
    };

    const capacDulap = {
      lungime: lungimeDulap,
      latime: adancimeDulap,
      bucati: 1,
    };

    const politaDulap = {
      lungime: lungimeDulap - 36,
      latime: adancimeDulap - 5,
      polite: numarPoliteDulap,
    };

    const pflDulap = {
      inaltime: inaltimeDulap - 100 - 5,
      lungime: lungimeDulap - 5,
      bucati: 1,
    };

    let usiDulap = {};

    if (fundDulap.lungime > 450) {
      usiDulap = {
        lungime: inaltimeDulap - 100,
        latime: lungimeDulap / 2 - 3,
        bucati: 2,
      };
    } else {
      usiDulap = {
        lungime: inaltimeDulap - 100,
        latime: lungimeDulap - 3,
        bucati: 1,
      };
    }

    // Returnarea rezultatelor sub formă de obiect
    return {
      lateraleDulap1,
      lateraleDulap2,
      fundDulap,
      capacDulap,
      politaDulap,
      pflDulap,
      usiDulap,
    };
  };

  rezultate.value.push(
    generareDimensiuni(
      lungimeDulap.value,
      adancimeDulap.value,
      inaltimeDulap.value,
      numarPoliteDulap.value
    )
  );
  const valoriDulapuri = generareDimensiuni(
    lungimeDulap.value,
    adancimeDulap.value,
    inaltimeDulap.value,
    numarPoliteDulap.value
  );

  dulapuriStore.addRezultat(valoriDulapuri);
};
</script>
