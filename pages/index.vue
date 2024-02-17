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
    "Laterale Dulap 1": `lungime: ${dulap.lateraleDulap1.lungime} latime: ${dulap.lateraleDulap1.latime}`,
    lateraleDulap2: `lungime: ${dulap.lateraleDulap2.lungime} latime: ${dulap.lateraleDulap2.latime}`,
    fundDulap: `lungime: ${dulap.fundDulap.lungime} latime: ${dulap.fundDulap.latime}`,
    capacDulap: `lungime: ${dulap.capacDulap.lungime} latime: ${dulap.capacDulap.latime}`,
    politaDulap: `lungime: ${dulap.politaDulap.lungime} latime: ${dulap.politaDulap.latime} polite: ${dulap.politaDulap.polite}`,
    pflDulap: `lungime: ${dulap.pflDulap.lungime} inaltime: ${dulap.pflDulap.inaltime}`,
  }));

  const bucatarieCorpParteSus =
    bucatarieCorpParteSusStore.valoriBucatarieCorpParteSus.map((buc) => ({
      dimensiuneLaterala: `lungime: ${buc.dimensiuneLaterala.lungime} latime: ${buc.dimensiuneLaterala.latime}`,
      dimensiunePFL: `lungime: ${buc.dimensiunePFL.lungime} latime: ${buc.dimensiunePFL.latime}`,
      dimensiunePolita: `lungime: ${buc.dimensiunePolita.lungime} latime: ${buc.dimensiunePolita.latime}`,
      dimensiuneFundCap: `lungime: ${buc.dimensiuneFundCap.lungime} latime: ${buc.dimensiuneFundCap.latime}`,
      rezultateUsiSus: `lungime: ${buc.rezultateUsiSus.lungime} latime: ${buc.rezultateUsiSus.latime}`,
      nrPolita: `${buc.nrPolita} buc`,
      bucati: `${buc.bucati} buc`,
    }));

  const bucatarieCorpParteJos =
    bucatarieCorpParteJosStore.valoriBucatarieCorpParteJos.map((buc) => ({
      dimensiuneLaterala: `lungime: ${buc.dimensiuneLaterala.lungime} latime: ${buc.dimensiuneLaterala.latime}`,
      dimensiunePieseLegatura: `lungime: ${buc.dimensiunePieseLegatura.lungime} latime: ${buc.dimensiunePieseLegatura.latime}`,
      dimensiunePFL: `lungime: ${buc.dimensiunePFL.lungime} latime: ${buc.dimensiunePFL.latime}`,
      dimensiunePolita: `lungime: ${buc.dimensiunePolita.lungime} latime: ${buc.dimensiunePolita.latime}`,
      dimensiuneUsiJos: `lungime: ${buc.dimensiuneUsiJos.lungime} latime: ${buc.dimensiuneUsiJos.latime}`,
      bucatiUsi: `${buc.bucatiUsi} buc`,
    }));

  const bucatarieCorpColtParteJos =
    bucatarieCorpColtParteJosStore.valoriBucatarieCorpColtParteJos;

  let bucatarieCorpColtParteJosObiect = Object.entries(
    bucatarieCorpColtParteJos
  ).map(([key, buc]) => ({
    dimensiuneLaterala: `lungime: ${buc.value[key].dimensiuneLaterala.lungime}, latime: ${buc.value[key].dimensiuneLaterala.latime}`,
    dimensiuneLaterala2: `lungime: ${buc.value[key].dimensiuneLaterala2.lungime}, latime: ${buc.value[key].dimensiuneLaterala2.latime}`,
    dimensiuneFund: `lungime: ${buc.value[key].dimensiuneFund.lungime}, latime: ${buc.value[key].dimensiuneFund.latime}`,
    dimensiuneFund2: `lungime: ${buc.value[key].dimensiuneFund2.lungime}, latime: ${buc.value[key].dimensiuneFund2.latime}`,
    dimensiunePolita: `lungime: ${buc.value[key].dimensiunePolita.lungime}, latime: ${buc.value[key].dimensiunePolita.latime}`,
    dimensiunePolita2: `lungime: ${buc.value[key].dimensiunePolita2.lungime}, latime: ${buc.value[key].dimensiunePolita2.latime}`,
    dimensiuneLegatura1: `lungime: ${buc.value[key].dimensiuneLegatura1.lungime}, latime: ${buc.value[key].dimensiuneLegatura1.latime}`,
    dimensiuneLegatura2: `lungime: ${buc.value[key].dimensiuneLegatura2.lungime}, latime: ${buc.value[key].dimensiuneLegatura2.latime}`,
    dimensiuneSpate: `lungime: ${buc.value[key].dimensiuneSpate.lungime}, latime: ${buc.value[key].dimensiuneSpate.latime}`,
    dimensiunePFL: `lungime: ${buc.value[key].dimensiunePFL.lungime}, latime: ${buc.value[key].dimensiunePFL.latime}`,
    dimensiuniUsi: `lungime: ${buc.value[key].dimensiuniUsi.lungime}, latime: ${buc.value[key].dimensiuniUsi.latime}, buc: ${buc.value[key].dimensiuniUsi.bucati}`,
  }));

  const bucatarieCorpColtParteSus =
    bucatarieCorpColtParteSusStore.valoriBucatarieCorpColtParteSus.map(
      (buc) => ({
        lateraleDulap: `lungime: ${buc.lateraleDulap.lungime}, latime: ${buc.lateraleDulap.latime}`,
        fundCapac1: `lungime: ${buc.fundCapac1.lungime}, latime: ${buc.fundCapac1.latime}`,
        fundCapac2: `lungime: ${buc.fundCapac2.lungime}, latime: ${buc.fundCapac2.latime}`,
        spatePal: `lungime: ${buc.spatePal.lungime}, latime: ${buc.spatePal.latime}`,
        pfl: `inaltime: ${buc.pfl.inaltime}, lungime: ${buc.pfl.lungime}`,
        corpColtSus: `lungime: ${buc.corpColtSus.lungime}, latime: ${buc.corpColtSus.latime}`,
        polita: `lungime: ${buc.polita.lungime}, latime: ${buc.polita.latime}`,
        nrPolita: `buc ${buc.nrPolita}`,
      })
    );

  console.log(bucatarieCorpColtParteSus);
  console.log(bucatarieCorpParteJos);

  const allData = [
    ...bucatarieCorpParteJos,
    ...bucatarieCorpParteSus,
    ...bucatarieCorpColtParteJosObiect,
    ...bucatarieCorpColtParteSus,
    ...dulapuri,
  ];

  const worksheet = XLSX.utils.json_to_sheet(allData);

  // console.log(allData);

  const max_widths = allData.reduce((acc, data) => {
    Object.keys(data).forEach((prop) => {
      acc[prop] = Math.max(acc[prop] || 0, data[prop].length + 6);
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

// console.log(
//   "dulapuri: ",
//   dulapuriStore.valoriDulapuri.map((obj) => obj)
// );
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
