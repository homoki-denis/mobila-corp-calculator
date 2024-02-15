import { useDulapuriStore } from "~/store/dulapuri";

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useDulapuriStore($pinia),
    },
  };
});
