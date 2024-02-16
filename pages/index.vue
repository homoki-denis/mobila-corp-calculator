<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div
      class="z-50 gap-2 flex justify-center items-center flex-wrap flex-col md:flex-row"
    >
      <NuxtLink to="bucatarie-corp-parte-jos">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Bucatarie corp parte jos
        </button>
      </NuxtLink>

      <NuxtLink to="bucatarie-corp-parte-sus">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Bucatarie corp parte sus
        </button>
      </NuxtLink>

      <NuxtLink to="sertare">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sertare
        </button>
      </NuxtLink>

      <NuxtLink to="bucatarie-corp-colt-parte-jos">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Bucatarie corp colt jos
        </button>
      </NuxtLink>

      <NuxtLink to="bucatarie-corp-colt-parte-sus">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Bucatarie corp colt sus
        </button>
      </NuxtLink>

      <NuxtLink to="dulapuri">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Dulapuri
        </button>
      </NuxtLink>
      <button
        @click="descarcaFisier"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Descarca Excel
      </button>
    </div>
  </div>
</template>

<script setup>
import * as XLSX from "xlsx";
const dulapuriStore = useDulapuriStore();
const bucatarieCorpParteSusStore = useBucatarieCorpParteSus();
const bucatarieCorpParteJosStore = useBucatarieCorpParteJos();
const bucatarieCorpColtParteSusStore = useBucatarieCorpColtParteSus();
const bucatarieCorpColtParteJosStore = useBucatarieCorpColtParteJos();
const sertareGtvStore = useSertareGtvStore();
const sertareBlumStore = useSertareBlumStore();

const descarcaFisier = () => {
  const dulapuri = dulapuriStore.valoriDulapuri.map((dulap) => ({
    lateraleDulap1: `lungime: ${dulap.lateraleDulap1.lungime} latime: ${dulap.lateraleDulap1.latime}`,
    lateraleDulap2: `lungime: ${dulap.lateraleDulap2.lungime} latime: ${dulap.lateraleDulap2.latime}`,
    fundDulap: `lungime: ${dulap.fundDulap.lungime} latime: ${dulap.fundDulap.latime}`,
    capacDulap: `lungime: ${dulap.capacDulap.lungime} latime: ${dulap.capacDulap.latime}`,
    politaDulap: `lungime: ${dulap.politaDulap.lungime} latime: ${dulap.politaDulap.latime} polite: ${dulap.politaDulap.polite}`,
    pflDulap: `lungime: ${dulap.pflDulap.lungime} inaltime: ${dulap.pflDulap.inaltime}`,
  }));

  const worksheet = XLSX.utils.json_to_sheet(dulapuri);

  const max_widths = dulapuri.reduce((acc, dulap) => {
    Object.keys(dulap).forEach((prop) => {
      acc[prop] = Math.max(acc[prop] || 0, dulap[prop].length);
    });
    return acc;
  }, {});

  worksheet["!cols"] = Object.keys(max_widths).map((prop) => ({
    wch: max_widths[prop],
  }));

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet);
  XLSX.writeFile(workbook, "rezultate.xlsx", { compression: true });
};

console.log(
  "dulapuri: ",
  dulapuriStore.valoriDulapuri.map((obj) => obj)
);
// console.log(
//   "bucatarie corp parte sus: ",
//   bucatarieCorpParteSusStore.valoriBucatarieCorpParteSus
// );
// console.log(
//   "bucatarie corp parte jos: ",
//   bucatarieCorpParteJosStore.valoriBucatarieCorpParteJos
// );
// console.log(
//   "bucatarie corp colt parte sus: ",
//   bucatarieCorpColtParteSusStore.valoriBucatarieCorpColtParteSus
// );

// console.log(
//   "bucatarie corp colt parte jos: ",
//   bucatarieCorpColtParteJosStore.valoriBucatarieCorpColtParteJos
// );

// console.log("sertare gtv: ", sertareGtvStore.valoriSertareGtv);

// console.log("sertare blum: ", sertareBlumStore.valoriSertareBlum);
</script>
