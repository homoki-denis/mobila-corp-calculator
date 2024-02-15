export const useSertareBlumStore = defineStore("sertare-blum", () => {
  const valoriSertareBlum = ref([]);

  const addRezultat = (rezultat) => {
    valoriSertareBlum.value.push(rezultat);
  };

  return { valoriSertareBlum, addRezultat };
});
