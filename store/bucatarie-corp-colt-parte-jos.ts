export const useBucatarieCorpColtParteJos = defineStore(
  "bucatarie-corp-colt-parte-jos",
  () => {
    const valoriBucatarieCorpColtParteJos = ref([]);

    const addRezultat = (rezultat) => {
      valoriBucatarieCorpColtParteJos.value.push(rezultat);
    };

    return { valoriBucatarieCorpColtParteJos, addRezultat };
  }
);
