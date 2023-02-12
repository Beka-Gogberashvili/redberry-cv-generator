import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const name = ref(localStorage.getItem("name"));
  const surname = ref(localStorage.getItem("surname"));
  const about = ref(localStorage.getItem("about"));
  const email = ref(localStorage.getItem("email"));
  const phone = ref(localStorage.getItem("phone"));
  return { name, surname, about, email, phone };
});
