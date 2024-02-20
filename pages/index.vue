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
  const dulapuri = dulapuriStore.valoriDulapuri.flatMap((dulap) => [
    {
      "Denumire Piesa": "Laterale Dulap 1",
      Lungime: dulap.lateraleDulap1.lungime,
      Latime: dulap.lateraleDulap1.latime,
      "Nr. Bucati": dulap.lateraleDulap1.bucati,
    },
    {
      "Denumire Piesa": "Laterale Dulap 2",
      Lungime: dulap.lateraleDulap2.lungime,
      Latime: dulap.lateraleDulap2.latime,
      "Nr. Bucati": dulap.lateraleDulap2.bucati,
    },
    {
      "Denumire Piesa": "Fund Dulap",
      Lungime: dulap.fundDulap.lungime,
      Latime: dulap.fundDulap.latime,
      "Nr. Bucati": dulap.fundDulap.bucati,
    },
    {
      "Denumire Piesa": "Capac Dulap",
      Lungime: dulap.capacDulap.lungime,
      Latime: dulap.capacDulap.latime,
      "Nr. Bucati": dulap.capacDulap.bucati,
    },
    {
      "Denumire Piesa": "Polita Dulap",
      Lungime: dulap.politaDulap.lungime,
      Latime: dulap.politaDulap.latime,
      "Nr. Bucati": dulap.politaDulap.polite,
    },
    {
      "Denumire Piesa": "PFL Dulap",
      Latime: dulap.pflDulap.inaltime,
      Lungime: dulap.pflDulap.lungime,
      "Nr. Bucati": dulap.pflDulap.bucati,
    },
    {
      "Denumire Piesa": "Usi Dulap",
      Latime: dulap.usiDulap.latime,
      Lungime: dulap.usiDulap.lungime,
      "Nr. Bucati": dulap.usiDulap.bucati,
    },
  ]);

  const bucatarieCorpParteSus =
    bucatarieCorpParteSusStore.valoriBucatarieCorpParteSus.flatMap((buc) => [
      {
        "Denumire Piesa": "Bucatarie dimensiune laterala corp sus",
        Lungime: buc.dimensiuneLaterala.lungime,
        Latime: buc.dimensiuneLaterala.latime,
        "Nr. Bucati": buc.dimensiuneLaterala.bucati,
      },
      {
        "Denumire Piesa": "Dimensiune PFL corp sus",
        Lungime: buc.dimensiunePFL.lungime,
        Latime: buc.dimensiunePFL.latime,
        "Nr. Bucati": buc.dimensiunePFL.bucati,
      },
      {
        "Denumire Piesa": "Dimensiune Polita corp sus",
        Lungime: buc.dimensiunePolita.lungime,
        Latime: buc.dimensiunePolita.latime,
        "Nr. Bucati": buc.dimensiunePolita.bucati,
      },
      {
        "Denumire Piesa": "Dimensiune Fund Cap corp sus",
        Lungime: buc.dimensiuneFundCap.lungime,
        Latime: buc.dimensiuneFundCap.latime,
        "Nr. Bucati": buc.dimensiuneFundCap.bucati,
      },
      {
        "Denumire Piesa": "Rezultate Usi Sus corp sus",
        Lungime: buc.rezultateUsiSus.lungime,
        Latime: buc.rezultateUsiSus.latime,
        "Nr. Bucati": buc.bucati,
      },
    ]);

  const bucatarieCorpParteJos =
    bucatarieCorpParteJosStore.valoriBucatarieCorpParteJos.flatMap((buc) => [
      {
        "Denumire Piesa": "Dimensiune Laterala corp jos",
        Lungime: buc.dimensiuneLaterala.lungime,
        Latime: buc.dimensiuneLaterala.latime,
        "Nr. Bucati": buc.dimensiuneLaterala.bucati,
      },
      {
        "Denumire Piesa": "Dimensiune Piese Legatura corp jos",
        Lungime: buc.dimensiunePieseLegatura.lungime,
        Latime: buc.dimensiunePieseLegatura.latime,
        "Nr. Bucati": buc.dimensiunePieseLegatura.bucati,
      },
      {
        "Denumire Piesa": "Dimensiune PFL corp jos",
        Lungime: buc.dimensiunePFL.lungime,
        Latime: buc.dimensiunePFL.latime,
        "Nr. Bucati": buc.dimensiunePFL.bucati,
      },
      {
        "Denumire Piesa": "Dimensiune Polita corp jos",
        Lungime: buc.dimensiunePolita.lungime,
        Latime: buc.dimensiunePolita.latime,
        "Nr. Bucati": buc.dimensiunePolita.bucati,
      },
      {
        "Denumire Piesa": "Dimensiune Usi Jos corp jos",
        Lungime: buc.dimensiuneUsiJos.lungime,
        Latime: buc.dimensiuneUsiJos.latime,
        "Nr. Bucati": buc.dimensiuneUsiJos.bucati,
      },
      {
        "Denumire Piesa": "Bucati Usi corp jos",
        "Nr. Bucati": `${buc.dimensiuneUsiJos.bucatiUsi}`,
      },
    ]);

  const bucatarieCorpColtParteJos =
    bucatarieCorpColtParteJosStore.valoriBucatarieCorpColtParteJos;

  let bucatarieCorpColtParteJosObiect = Object.entries(
    bucatarieCorpColtParteJos
  ).flatMap(([key, buc]) => [
    {
      "Denumire Piesa": "dimensiuneLaterala colt jos",
      Lungime: buc.value[key].dimensiuneLaterala.lungime,
      Latime: buc.value[key].dimensiuneLaterala.latime,
      "Nr. Bucati": buc.value[key].dimensiuneLaterala.bucati,
    },
    {
      "Denumire Piesa": "dimensiuneLaterala2 colt jos",
      Lungime: buc.value[key].dimensiuneLaterala2.lungime,
      Latime: buc.value[key].dimensiuneLaterala2.latime,
    },
    {
      "Denumire Piesa": "dimensiuneFund colt jos",
      Lungime: buc.value[key].dimensiuneFund.lungime,
      Latime: buc.value[key].dimensiuneFund.latime,
    },
    {
      "Denumire Piesa": "dimensiuneFund2 colt jos",
      Lungime: buc.value[key].dimensiuneFund2.lungime,
      Latime: buc.value[key].dimensiuneFund2.latime,
    },
    {
      "Denumire Piesa": "dimensiunePolita colt jos",
      Lungime: buc.value[key].dimensiunePolita.lungime,
      Latime: buc.value[key].dimensiunePolita.latime,
    },
    {
      "Denumire Piesa": "dimensiunePolita2 colt jos",
      Lungime: buc.value[key].dimensiunePolita2.lungime,
      Latime: buc.value[key].dimensiunePolita2.latime,
    },
    {
      "Denumire Piesa": "dimensiuneLegatura1 colt jos",
      Lungime: buc.value[key].dimensiuneLegatura1.lungime,
      Latime: buc.value[key].dimensiuneLegatura1.latime,
    },
    {
      "Denumire Piesa": "dimensiuneLegatura2 colt jos",
      Lungime: buc.value[key].dimensiuneLegatura2.lungime,
      Latime: buc.value[key].dimensiuneLegatura2.latime,
    },
    {
      "Denumire Piesa": "dimensiuneSpate colt jos",
      Lungime: buc.value[key].dimensiuneSpate.lungime,
      Latime: buc.value[key].dimensiuneSpate.latime,
    },
    {
      "Denumire Piesa": "dimensiunePFL colt jos",
      Lungime: buc.value[key].dimensiunePFL.lungime,
      Latime: buc.value[key].dimensiunePFL.latime,
    },
    {
      "Denumire Piesa": "dimensiuniUsi colt jos",
      Lungime: buc.value[key].dimensiuniUsi.lungime,
      Latime: buc.value[key].dimensiuniUsi.latime,
      "Nr. Bucati": buc.value[key].dimensiuniUsi.bucati,
    },
  ]);

  // const bucatarieCorpColtParteSus =
  //   bucatarieCorpColtParteSusStore.valoriBucatarieCorpColtParteSus.flatMap(
  //     (buc) => ({
  //       "lateraleDulap corp colt sus": `lungime: ${buc.lateraleDulap.lungime}, latime: ${buc.lateraleDulap.latime}`,
  //       "fundCapac1 corp colt sus": `lungime: ${buc.fundCapac1.lungime}, latime: ${buc.fundCapac1.latime}`,
  //       "fundCapac2 corp colt sus": `lungime: ${buc.fundCapac2.lungime}, latime: ${buc.fundCapac2.latime}`,
  //       "spatePal corp colt sus": `lungime: ${buc.spatePal.lungime}, latime: ${buc.spatePal.latime}`,
  //       "pfl corp colt sus": `inaltime: ${buc.pfl.inaltime}, lungime: ${buc.pfl.lungime}`,
  //       "corpColtSus corp colt sus": `lungime: ${buc.corpColtSus.lungime}, latime: ${buc.corpColtSus.latime}`,
  //       "polita corp colt sus": `lungime: ${buc.polita.lungime}, latime: ${buc.polita.latime}`,
  //       "nrPolita corp colt sus": `buc ${buc.nrPolita}`,
  //     })
  //   );

  const bucatarieCorpColtParteSus =
    bucatarieCorpColtParteSusStore.valoriBucatarieCorpColtParteSus.flatMap(
      (buc) => [
        {
          "Denumire Piesa": "lateraleDulap corp colt sus",
          Lungime: buc.lateraleDulap.lungime,
          Latime: buc.lateraleDulap.latime,
          "Nr. Bucati": buc.lateraleDulap.latime.bucati,
        },
        {
          "Denumire Piesa": "fundCapac1 corp colt sus",
          Lungime: buc.fundCapac1.lungime,
          Latime: buc.fundCapac1.latime,
        },
        {
          "Denumire Piesa": "fundCapac2 corp colt sus",
          Lungime: buc.fundCapac2.lungime,
          Latime: buc.fundCapac2.latime,
        },
        {
          "Denumire Piesa": "spatePal corp colt sus",
          Lungime: buc.spatePal.lungime,
          Latime: buc.spatePal.latime,
        },
        {
          "Denumire Piesa": "pfl corp colt sus",
          Inaltime: buc.pfl.inaltime,
          Lungime: buc.pfl.lungime,
        },
        {
          "Denumire Piesa": "corpColtSus corp colt sus",
          Lungime: buc.corpColtSus.lungime,
          Latime: buc.corpColtSus.latime,
        },
        {
          "Denumire Piesa": "polita corp colt sus",
          Lungime: buc.polita.lungime,
          Latime: buc.polita.latime,
        },
      ]
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

  // sertare gtv fete sertare
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

  // sertare blum dimensiuni
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
  // sertare blum fete
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

  //Excel
  const worksheet = XLSX.utils.json_to_sheet(allData, {
    header: ["Denumire Piesa", "Nr. Bucati", "Lungime", "Latime"],
  });

  worksheet["!cols"] = [
    { width: 30 },
    { width: 10 },
    { width: 10 },
    { width: 10 },
  ];

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet);
  XLSX.writeFile(workbook, "rezultate.xlsx", { compression: true });
};
</script>
