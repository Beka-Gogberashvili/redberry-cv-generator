<template>
  <div class="mt-[48px] ml-20 w-[648px]">
    <div class="flex">
      <div class="flex flex-col flex-1">
        <div
          class="z-10 max-w-[400px] flex mt-5 text-[34px] text-[#F93B1D] font-helvetica font-bold"
        >
          <h1 class="mr-5">{{ data.name }}</h1>
          <h1>{{ data.surname }}</h1>
        </div>

        <div class="mt-[17px] font-helveticaR text-lg">
          <div class="flex items-center" v-if="data.email">
            <EmailIcon class="mr-3" />
            <h1>{{ data.email }}</h1>
          </div>
          <div class="flex items-center mt-[10px]" v-if="data.phone">
            <PhoneIcon class="mr-3" />
            <h1>{{ data.phone }}</h1>
          </div>
        </div>

        <div v-show="data.about">
          <h1
            class="mt-[34px] text-lg text-[#F93B1D] font-helveticaR font-bold"
          >
            ჩემ შესახებ
          </h1>
          <p class="w-full h-[72px] mt-[15px] break-all">
            {{ data.about }}
          </p>
        </div>
      </div>
      <img
        v-if="data.image"
        :src="data.image"
        alt="avatar"
        class="rounded-full w-[246px] h-[246px] object-cover"
      />
    </div>

    <div v-if="data.about" class="mt-[19px] h-px bg-[#C8C8C8] w-full" />
  </div>
</template>

<script>
import LiveInput from "@/components/LiveInput.vue";
import { useDataStore } from "@/stores/data";
import { ref } from "vue";
import PhoneIcon from "@/assets/svg/PhoneIcon.vue";
import EmailIcon from "@/assets/svg/EmailIcon.vue";

export default {
  components: {
    PhoneIcon,
    EmailIcon,
  },

  setup() {
    const dataStore = useDataStore();
    const data = ref(dataStore);

    return {
      LiveInput,
      data,
    };
  },
};
</script>
