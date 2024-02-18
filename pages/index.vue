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

  const bucatarieCorpParteSus =
    bucatarieCorpParteSusStore.valoriBucatarieCorpParteSus.map((buc) => ({
      "dimensiuneLaterala corp sus": `lungime: ${buc.dimensiuneLaterala.lungime} latime: ${buc.dimensiuneLaterala.latime}`,
      "dimensiunePFL corp sus": `lungime: ${buc.dimensiunePFL.lungime} latime: ${buc.dimensiunePFL.latime}`,
      "dimensiunePolita corp sus": `lungime: ${buc.dimensiunePolita.lungime} latime: ${buc.dimensiunePolita.latime}`,
      "dimensiuneFund Cap corp sus": `lungime: ${buc.dimensiuneFundCap.lungime} latime: ${buc.dimensiuneFundCap.latime}`,
      "rezultateUsi Sus corp sus": `lungime: ${buc.rezultateUsiSus.lungime} latime: ${buc.rezultateUsiSus.latime}`,
      "nrPolita corp sus": `${buc.nrPolita} buc`,
      "bucati corp sus": `${buc.bucati} buc`,
    }));

  const bucatarieCorpParteJos =
    bucatarieCorpParteJosStore.valoriBucatarieCorpParteJos.map((buc) => ({
      "dimensiuneLaterala corp jos": `lungime: ${buc.dimensiuneLaterala.lungime} latime: ${buc.dimensiuneLaterala.latime}`,
      "dimensiunePiese Legatura corp jos": `lungime: ${buc.dimensiunePieseLegatura.lungime} latime: ${buc.dimensiunePieseLegatura.latime}`,
      "dimensiunePFL corp jos": `lungime: ${buc.dimensiunePFL.lungime} latime: ${buc.dimensiunePFL.latime}`,
      "dimensiunePolita corp jos": `lungime: ${buc.dimensiunePolita.lungime} latime: ${buc.dimensiunePolita.latime}`,
      "dimensiuneUsi Jos corp jos": `lungime: ${buc.dimensiuneUsiJos.lungime} latime: ${buc.dimensiuneUsiJos.latime}`,
      "bucatiUsi corp jos": `${buc.bucatiUsi} buc`,
    }));

  const bucatarieCorpColtParteJos =
    bucatarieCorpColtParteJosStore.valoriBucatarieCorpColtParteJos;

  let bucatarieCorpColtParteJosObiect = Object.entries(
    bucatarieCorpColtParteJos
  ).map(([key, buc]) => ({
    "dimensiuneLaterala colt jos": buc.value[key]
      ? `lungime: ${buc.value[key].dimensiuneLaterala.lungime}, latime: ${buc.value[key].dimensiuneLaterala.latime}`
      : "N/A",
    "dimensiuneLaterala2 colt jos": `lungime: ${buc.value[key].dimensiuneLaterala2.lungime}, latime: ${buc.value[key].dimensiuneLaterala2.latime}`,
    "dimensiuneFund colt jos": `lungime: ${buc.value[key].dimensiuneFund.lungime}, latime: ${buc.value[key].dimensiuneFund.latime}`,
    "dimensiuneFund2 colt jos": `lungime: ${buc.value[key].dimensiuneFund2.lungime}, latime: ${buc.value[key].dimensiuneFund2.latime}`,
    "dimensiunePolita colt jos": `lungime: ${buc.value[key].dimensiunePolita.lungime}, latime: ${buc.value[key].dimensiunePolita.latime}`,
    "dimensiunePolita2 colt jos": `lungime: ${buc.value[key].dimensiunePolita2.lungime}, latime: ${buc.value[key].dimensiunePolita2.latime}`,
    "dimensiuneLegatura1 colt jos": `lungime: ${buc.value[key].dimensiuneLegatura1.lungime}, latime: ${buc.value[key].dimensiuneLegatura1.latime}`,
    "dimensiuneLegatura2 colt jos": `lungime: ${buc.value[key].dimensiuneLegatura2.lungime}, latime: ${buc.value[key].dimensiuneLegatura2.latime}`,
    "dimensiuneSpate colt jos": `lungime: ${buc.value[key].dimensiuneSpate.lungime}, latime: ${buc.value[key].dimensiuneSpate.latime}`,
    "dimensiunePFL colt jos": `lungime: ${buc.value[key].dimensiunePFL.lungime}, latime: ${buc.value[key].dimensiunePFL.latime}`,
    "dimensiuniUsi colt jos": `lungime: ${buc.value[key].dimensiuniUsi.lungime}, latime: ${buc.value[key].dimensiuniUsi.latime}, buc: ${buc.value[key].dimensiuniUsi.bucati}`,
  }));

  const bucatarieCorpColtParteSus =
    bucatarieCorpColtParteSusStore.valoriBucatarieCorpColtParteSus.map(
      (buc) => ({
        "lateraleDulap corp colt sus": `lungime: ${buc.lateraleDulap.lungime}, latime: ${buc.lateraleDulap.latime}`,
        "fundCapac1 corp colt sus": `lungime: ${buc.fundCapac1.lungime}, latime: ${buc.fundCapac1.latime}`,
        "fundCapac2 corp colt sus": `lungime: ${buc.fundCapac2.lungime}, latime: ${buc.fundCapac2.latime}`,
        "spatePal corp colt sus": `lungime: ${buc.spatePal.lungime}, latime: ${buc.spatePal.latime}`,
        "pfl corp colt sus": `inaltime: ${buc.pfl.inaltime}, lungime: ${buc.pfl.lungime}`,
        "corpColtSus corp colt sus": `lungime: ${buc.corpColtSus.lungime}, latime: ${buc.corpColtSus.latime}`,
        "polita corp colt sus": `lungime: ${buc.polita.lungime}, latime: ${buc.polita.latime}`,
        "nrPolita corp colt sus": `buc ${buc.nrPolita}`,
      })
    );

  // sertare gtv dimensiuni
  const sertareGtvDimensiuni = sertareGtvStore.valoriSertareGtv;
  let toateDimensiunileSertareGtv = [];

  for (let obiectSertar of sertareGtvDimensiuni) {
    for (let dimensiune of obiectSertar.dimensiuni) {
      const dimensiuneObiect = {
        "DimensiuneGTV lungime": `lungime ${dimensiune.lungime}`,
        "DimensiuneGTV latime": `latime ${dimensiune.latime}`,
        "DimensiuneGTV buc": `buc ${dimensiune.bucati}`,
      };
      toateDimensiunileSertareGtv.push(dimensiuneObiect);
    }
  }

  // sertare fete sertare
  const sertareGtvFeteSertare = sertareGtvStore.valoriSertareGtv;
  let toateFeteSertareGtv = [];

  for (let obiectSertar of sertareGtvFeteSertare) {
    for (let sertare of obiectSertar.feteSertare) {
      const dimensiuneObiect = {
        "FeteSertare GTV lungime": `lungime ${sertare.lungime}`,
        "FeteSertare GTV latime": `latime ${sertare.latime}`,
        "FeteSertare GTV buc": `buc ${sertare.bucati}`,
      };
      toateFeteSertareGtv.push(dimensiuneObiect);
    }
  }

  const sertareBlumDimensiuni = sertareBlumStore.valoriSertareBlum;
  let toateDimensiunileSertareBlum = [];

  for (let obiectSertar of sertareBlumDimensiuni) {
    for (let dimensiuni of obiectSertar.dimensiuni) {
      const dimensiuneObiect = {
        "DimensiuneBlum lungime": `lungime ${dimensiuni.lungime}`,
        "DimensiuneBlum latime": `latime ${dimensiuni.latime}`,
        "DimensiuneBlum buc": `buc ${dimensiuni.bucati}`,
      };
      toateDimensiunileSertareBlum.push(dimensiuneObiect);
    }
  }

  const sertareBlumFeteSertare = sertareBlumStore.valoriSertareBlum;
  let toateFeteSertareBlum = [];

  for (let obiectSertar of sertareBlumFeteSertare) {
    for (let sertare of obiectSertar.feteSertare) {
      const dimensiuneObiect = {
        "FeteSertare blum lungime": `lungime ${sertare.lungime}`,
        "FeteSertare blum latime": `latime ${sertare.latime}`,
        "FeteSertare blum buc": `buc ${sertare.bucati}`,
      };
      toateFeteSertareBlum.push(dimensiuneObiect);
    }
  }

  const allData = [
    ...bucatarieCorpParteJos,
    ...bucatarieCorpParteSus,
    ...toateDimensiunileSertareGtv,
    ...toateFeteSertareGtv,
    ...toateDimensiunileSertareBlum,
    ...toateFeteSertareBlum,
    ...bucatarieCorpColtParteJosObiect,
    ...bucatarieCorpColtParteSus,
    ...dulapuri,
  ];

  const worksheet = XLSX.utils.json_to_sheet(allData);

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
</script>
