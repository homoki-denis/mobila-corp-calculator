export const useBucatarieCorpParteJos = defineStore(
  "bucatarie-corp-parte-jos",
  () => {
    const valoriBucatarieCorpParteJos = ref([]);

    const addRezultat = (rezultat) => {
      valoriBucatarieCorpParteJos.value.push(rezultat);
    };

    return { valoriBucatarieCorpParteJos, addRezultat };
  }
);
