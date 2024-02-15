export const useBucatarieCorpParteSus = defineStore(
  "bucatarie-corp-parte-sus",
  () => {
    const valoriBucatarieCorpParteSus = ref([]);

    const addRezultat = (rezultat) => {
      valoriBucatarieCorpParteSus.value.push(rezultat);
    };

    return { valoriBucatarieCorpParteSus, addRezultat };
  }
);
