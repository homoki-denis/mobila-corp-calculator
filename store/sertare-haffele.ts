export const useSertareHaffeleStore = defineStore("sertare-haffele", () => {
  const valoriSertareHaffele = ref([]);

  const addRezultat = (rezultat) => {
    valoriSertareHaffele.value.push(rezultat);
  };

  return { valoriSertareHaffele, addRezultat };
});
