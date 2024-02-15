export const useSertareGtvStore = defineStore("sertare-gtv", () => {
  const valoriSertareGtv = ref([]);

  const addRezultat = (rezultat) => {
    valoriSertareGtv.value.push(rezultat);
  };

  return { valoriSertareGtv, addRezultat };
});
