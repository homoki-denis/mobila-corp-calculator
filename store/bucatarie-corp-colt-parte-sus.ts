export const useBucatarieCorpColtParteSus = defineStore(
  "bucatarie-corp-colt-parte-sus",
  () => {
    const valoriBucatarieCorpColtParteSus = ref([]);

    const addRezultat = (rezultat) => {
      valoriBucatarieCorpColtParteSus.value.push(rezultat);
    };

    return { valoriBucatarieCorpColtParteSus, addRezultat };
  }
);
