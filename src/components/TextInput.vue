<template>
  <label :for="name">{{ label }}</label>
  <Field
    v-if="delay"
    :name="name"
    :as="type"
    :id="name"
    :rules="rules"
    :rows="rows"
    :cols="cols"
    v-model="oldValue"
    :placeholder="placeholder"
    v-slot="{ field, meta }"
    class="mt-2"
  >
    <input
      :placeholder="placeholder"
      :type="type"
      autocomplete="off"
      :ref="name"
      v-bind="field"
      class="w-full"
      v-model="inputValue"
      :maxlength="maxlength"
      :class="{
        'success-input': meta.valid && meta.touched,
        'error-input': !meta.valid && meta.touched,
      }"
      @keyup="save"
    />
  </Field>
  <h1 class="hidden">{{ (inputName = name) }}</h1>
</template>

<script>
import { Field } from "vee-validate";
import { ref, onMounted } from "vue";
import { useDataStore } from "@/stores/data";

export default {
  props: [
    "label",
    "name",
    "type",
    "placeholder",
    "rules",
    "rows",
    "cols",
    "value",
    "maxlength",
    "val",
  ],
  components: {
    Field,
  },

  setup() {
    const inputValue = ref("");
    const inputName = ref("");
    const savedValue = ref("");
    const delay = ref(false);
    const oldValue = ref("");

    const data = useDataStore();

    const save = () => {
      localStorage.setItem(inputName.value, inputValue.value);
      data[inputName.value] = inputValue.value;
    };

    onMounted(async () => {
      if (localStorage.getItem(inputName.value)) {
        savedValue.value = localStorage.getItem(inputName.value);
      }
      setTimeout(() => (oldValue.value = savedValue.value), 1);
      delay.value = true;
    });

    return {
      save,
      inputValue,
      inputName,
      savedValue,
      delay,
      oldValue,
    };
  },
};
</script>
