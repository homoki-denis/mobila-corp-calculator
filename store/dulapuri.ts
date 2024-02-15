export const useDulapuriStore = defineStore("dulapuri", () => {
  const valoriDulapuri = ref([]);

  const addRezultat = (rezultat) => {
    valoriDulapuri.value.push(rezultat);
  };

  return { valoriDulapuri, addRezultat };
});
