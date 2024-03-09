export const usePalStore = defineStore("pal", () => {
  const valoriPal = ref([]);

  const addRezultat = (rezultat) => {
    valoriPal.value.push(rezultat);
  };

  return { valoriPal, addRezultat };
});
