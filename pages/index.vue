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
      <NuxtLink to="pal">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Adauga pal
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
const sertareHaffeleStore = useSertareHaffeleStore();
const palStore = usePalStore();

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
        "Denumire Piesa": "Bucatarie laterala corp sus",
        Lungime: buc.dimensiuneLaterala.lungime,
        Latime: buc.dimensiuneLaterala.latime,
        "Nr. Bucati": buc.dimensiuneLaterala.bucati,
      },
      {
        "Denumire Piesa": "PFL corp sus",
        Lungime: buc.dimensiunePFL.lungime,
        Latime: buc.dimensiunePFL.latime,
        "Nr. Bucati": buc.dimensiunePFL.bucati,
      },
      {
        "Denumire Piesa": "Polita corp sus",
        Lungime: buc.dimensiunePolita.lungime,
        Latime: buc.dimensiunePolita.latime,
        "Nr. Bucati": buc.dimensiunePolita.bucati,
      },
      {
        "Denumire Piesa": "Fund Cap corp sus",
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
        "Denumire Piesa": "Laterala corp jos",
        Lungime: buc.dimensiuneLaterala.lungime,
        Latime: buc.dimensiuneLaterala.latime,
        "Nr. Bucati": buc.dimensiuneLaterala.bucati,
        Total: buc.total,
      },
      {
        "Denumire Piesa": "Piese Legatura corp jos",
        Lungime: buc.dimensiunePieseLegatura.lungime,
        Latime: buc.dimensiunePieseLegatura.latime,
        "Nr. Bucati": buc.dimensiunePieseLegatura.bucati,
      },
      {
        "Denumire Piesa": "PFL corp jos",
        Lungime: buc.dimensiunePFL.lungime,
        Latime: buc.dimensiunePFL.latime,
        "Nr. Bucati": buc.dimensiunePFL.bucati,
      },
      {
        "Denumire Piesa": "Polita corp jos",
        Lungime: buc.dimensiunePolita.lungime,
        Latime: buc.dimensiunePolita.latime,
        "Nr. Bucati": buc.dimensiunePolita.bucati,
      },
      {
        "Denumire Piesa": "Usi Jos corp jos",
        Lungime: buc.dimensiuneUsiJos.lungime,
        Latime: buc.dimensiuneUsiJos.latime,
        "Nr. Bucati": buc.dimensiuneUsiJos.bucatiUsi,
      },
      {
        "Denumire Piesa": "Fund Jos",
        Lungime: buc.fundJos.lungime,
        Latime: buc.fundJos.latime,
        "Nr. Bucati": buc.fundJos.bucati,
      },
    ]);

  const bucatarieCorpColtParteJos =
    bucatarieCorpColtParteJosStore.valoriBucatarieCorpColtParteJos;

  let bucatarieCorpColtParteJosObiect = Object.entries(
    bucatarieCorpColtParteJos
  ).flatMap(([key, buc]) => [
    {
      "Denumire Piesa": "Laterala colt jos",
      Lungime: buc.value[key].dimensiuneLaterala.lungime,
      Latime: buc.value[key].dimensiuneLaterala.latime,
      "Nr. Bucati": buc.value[key].dimensiuneLaterala.bucati,
    },
    {
      "Denumire Piesa": "Laterala2 colt jos",
      Lungime: buc.value[key].dimensiuneLaterala2.lungime,
      Latime: buc.value[key].dimensiuneLaterala2.latime,
      "Nr. Bucati": buc.value[key].dimensiuneLaterala2.bucati,
    },
    {
      "Denumire Piesa": "Fund colt jos",
      Lungime: buc.value[key].dimensiuneFund.lungime,
      Latime: buc.value[key].dimensiuneFund.latime,
      "Nr. Bucati": buc.value[key].dimensiuneFund.bucati,
    },
    {
      "Denumire Piesa": "Fund2 colt jos",
      Lungime: buc.value[key].dimensiuneFund2.lungime,
      Latime: buc.value[key].dimensiuneFund2.latime,
      "Nr. Bucati": buc.value[key].dimensiuneFund2.bucati,
    },
    {
      "Denumire Piesa": "Polita colt jos",
      Lungime: buc.value[key].dimensiunePolita.lungime,
      Latime: buc.value[key].dimensiunePolita.latime,
      "Nr. Bucati": buc.value[key].dimensiunePolita.bucati,
    },
    {
      "Denumire Piesa": "Polita2 colt jos",
      Lungime: buc.value[key].dimensiunePolita2.lungime,
      Latime: buc.value[key].dimensiunePolita2.latime,
      "Nr. Bucati": buc.value[key].dimensiunePolita2.bucati,
    },
    {
      "Denumire Piesa": "Legatura1 colt jos",
      Lungime: buc.value[key].dimensiuneLegatura1.lungime,
      Latime: buc.value[key].dimensiuneLegatura1.latime,
      "Nr. Bucati": buc.value[key].dimensiuneLegatura1.bucati,
    },
    {
      "Denumire Piesa": "Legatura2 colt jos",
      Lungime: buc.value[key].dimensiuneLegatura2.lungime,
      Latime: buc.value[key].dimensiuneLegatura2.latime,
      "Nr. Bucati": buc.value[key].dimensiuneLegatura2.bucati,
    },
    {
      "Denumire Piesa": "Spate colt jos",
      Lungime: buc.value[key].dimensiuneSpate.lungime,
      Latime: buc.value[key].dimensiuneSpate.latime,
      "Nr. Bucati": buc.value[key].dimensiuneSpate.bucati,
    },
    {
      "Denumire Piesa": "PFL colt jos",
      Lungime: buc.value[key].dimensiunePFL.lungime,
      Latime: buc.value[key].dimensiunePFL.latime,
      "Nr. Bucati": buc.value[key].dimensiunePFL.bucati,
    },
    {
      "Denumire Piesa": "Usi colt jos",
      Lungime: buc.value[key].dimensiuniUsi.lungime,
      Latime: buc.value[key].dimensiuniUsi.latime,
      "Nr. Bucati": buc.value[key].dimensiuniUsi.bucati,
    },
  ]);

  const bucatarieCorpColtParteSus =
    bucatarieCorpColtParteSusStore.valoriBucatarieCorpColtParteSus.flatMap(
      (buc) => [
        {
          "Denumire Piesa": "laterale Dulap corp colt sus",
          Lungime: buc.lateraleDulap.lungime,
          Latime: buc.lateraleDulap.latime,
          "Nr. Bucati": buc.lateraleDulap.bucati,
        },
        {
          "Denumire Piesa": "fundCapac1 corp colt sus",
          Lungime: buc.fundCapac1.lungime,
          Latime: buc.fundCapac1.latime,
          "Nr. Bucati": buc.fundCapac1.bucati,
        },
        {
          "Denumire Piesa": "fundCapac2 corp colt sus",
          Lungime: buc.fundCapac2.lungime,
          Latime: buc.fundCapac2.latime,
          "Nr. Bucati": buc.fundCapac2.bucati,
        },
        {
          "Denumire Piesa": "spatePal corp colt sus",
          Lungime: buc.spatePal.lungime,
          Latime: buc.spatePal.latime,
          "Nr. Bucati": buc.spatePal.bucati,
        },
        {
          "Denumire Piesa": "pfl corp colt sus",
          Latime: buc.pfl.latime,
          Lungime: buc.pfl.lungime,
          "Nr. Bucati": buc.pfl.bucati,
        },
        {
          "Denumire Piesa": "usi sus",
          Lungime: buc.corpColtSus.lungime,
          Latime: buc.corpColtSus.latime,
          "Nr. Bucati": buc.corpColtSus.bucati,
        },
        {
          "Denumire Piesa": "polita corp colt sus",
          Lungime: buc.polita.lungime,
          Latime: buc.polita.latime,
          "Nr. Bucati": buc.polita.bucati,
        },
      ]
    );

  // sertare gtv dimensiuni
  const sertareGtvDimensiuni = sertareGtvStore.valoriSertareGtv;
  let toateDimensiunileSertareGtv = [];

  for (let obiectSertar of sertareGtvDimensiuni) {
    for (let dimensiune of obiectSertar.dimensiuni) {
      const dimensiuneObiect = {
        gtvLungime: dimensiune.lungime,
        gtvLatime: dimensiune.latime,
        gtvBucati: dimensiune.bucati,
      };
      toateDimensiunileSertareGtv.push(dimensiuneObiect);
    }
  }

  const dimensiuniSertareGtv = toateDimensiunileSertareGtv.flatMap(
    (buc, i, array) => [
      {
        "Denumire Piesa": `${
          i === array.length - 1 ? "Pfl sertare GTV" : "Sertare GTV"
        }`,
        Lungime: buc.gtvLungime,
        Latime: buc.gtvLatime,
        "Nr. Bucati": buc.gtvBucati,
      },
    ]
  );

  // sertare gtv fete sertare
  const sertareGtvFeteSertare = sertareGtvStore.valoriSertareGtv;
  let toateFeteSertareGtv = [];

  for (let obiectSertar of sertareGtvFeteSertare) {
    for (let sertare of obiectSertar.feteSertare) {
      const dimensiuneObiect = {
        FeteSertareGtvLungime: sertare.lungime,
        FeteSertareGtvLatime: sertare.latime,
        FeteSertareGtvBucati: sertare.bucati,
      };
      toateFeteSertareGtv.push(dimensiuneObiect);
    }
  }

  const sertareFeteGtv = toateFeteSertareGtv.flatMap((buc) => [
    {
      "Denumire Piesa": "Sertare fete GTV",
      Lungime: buc.FeteSertareGtvLungime,
      Latime: buc.FeteSertareGtvLatime,
      "Nr. Bucati": buc.FeteSertareGtvBucati,
    },
  ]);

  // sertare blum dimensiuni
  const sertareBlumDimensiuni = sertareBlumStore.valoriSertareBlum;
  let toateDimensiunileSertareBlum = [];

  for (let obiectSertar of sertareBlumDimensiuni) {
    for (let dimensiuni of obiectSertar.dimensiuni) {
      const dimensiuneObiect = {
        SertareBlumLungime: dimensiuni.lungime,
        SertareBlumLatime: dimensiuni.latime,
        SertareBlumBucati: dimensiuni.bucati,
      };
      toateDimensiunileSertareBlum.push(dimensiuneObiect);
    }
  }

  const sertareBlum = toateDimensiunileSertareBlum.flatMap((buc) => [
    {
      "Denumire Piesa": "Sertare Blum",
      Lungime: buc.SertareBlumLungime,
      Latime: buc.SertareBlumLatime,
      "Nr. Bucati": buc.SertareBlumBucati,
    },
  ]);

  // sertare blum fete
  const sertareBlumFeteSertare = sertareBlumStore.valoriSertareBlum;
  let toateFeteSertareBlum = [];

  for (let obiectSertar of sertareBlumFeteSertare) {
    for (let sertare of obiectSertar.feteSertare) {
      const dimensiuneObiect = {
        feteSertareBlumLungime: sertare.lungime,
        feteSertareBlumLatime: sertare.latime,
        feteSertareBlumBucati: sertare.bucati,
      };
      toateFeteSertareBlum.push(dimensiuneObiect);
    }
  }

  const feteSertareBlum = toateFeteSertareBlum.flatMap((buc) => [
    {
      "Denumire Piesa": "Sertare Fete Blum",
      Lungime: buc.feteSertareBlumLungime,
      Latime: buc.feteSertareBlumLatime,
      "Nr. Bucati": buc.feteSertareBlumBucati,
    },
  ]);

  // haffele

  const sertareHaffeleDimensiuni = sertareHaffeleStore.valoriSertareHaffele;
  let toateDimensiunileSertareHaffele = [];

  for (let obiectSertar of sertareHaffeleDimensiuni) {
    for (let dimensiuni of obiectSertar.dimensiuni) {
      const dimensiuneObiect = {
        SertareHaffeleLungime: dimensiuni.lungime,
        SertareHaffeleLatime: dimensiuni.latime,
        SertareHaffeleBucati: dimensiuni.bucati,
      };
      toateDimensiunileSertareHaffele.push(dimensiuneObiect);
    }
  }

  const sertareHaffele = toateDimensiunileSertareHaffele.flatMap((buc) => [
    {
      "Denumire Piesa": "Sertare Haffele",
      Lungime: buc.SertareHaffeleLungime,
      Latime: buc.SertareHaffeleLatime,
      "Nr. Bucati": buc.SertareHaffeleBucati,
    },
  ]);

  // sertare haffele fete
  const sertareHaffeleFeteSertare = sertareHaffeleStore.valoriSertareHaffele;

  let toateFeteSertareHaffele = [];

  for (let obiectSertar of sertareHaffeleFeteSertare) {
    for (let sertare of obiectSertar.feteSertare) {
      const dimensiuneObiect = {
        feteSertareHaffeleLungime: sertare.lungime,
        feteSertareHaffeleLatime: sertare.latime,
        feteSertareHaffeleBucati: sertare.bucati,
      };
      toateFeteSertareHaffele.push(dimensiuneObiect);
    }
  }

  const feteSertareHaffele = toateFeteSertareHaffele.flatMap((buc) => [
    {
      "Denumire Piesa": "Sertare Fete Haffele",
      Lungime: buc.feteSertareHaffeleLungime,
      Latime: buc.feteSertareHaffeleLatime,
      "Nr. Bucati": buc.feteSertareHaffeleBucati,
    },
  ]);

  const pal = palStore.valoriPal.flatMap((buc) => [
    {
      "Denumire Piesa": "Pal",
      Lungime: buc.lungimePal,
      Latime: buc.latimePal,
      "Nr. Bucati": buc.nrPiese,
    },
  ]);

  console.log(palStore.valoriPal);

  const allData = [
    ...bucatarieCorpParteJos,
    ...bucatarieCorpParteSus,
    ...dimensiuniSertareGtv,
    ...sertareFeteGtv,
    ...sertareBlum,
    ...feteSertareBlum,
    ...sertareHaffele,
    ...feteSertareHaffele,
    ...bucatarieCorpColtParteJosObiect,
    ...bucatarieCorpColtParteSus,
    ...dulapuri,
    ...pal,
  ];

  //Excel
  const worksheet = XLSX.utils.json_to_sheet(allData, {
    header: ["Denumire Piesa", "Nr. Bucati", "Lungime", "Latime", "Total"],
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
