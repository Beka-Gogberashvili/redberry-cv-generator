<template>
  <div class="flex min-h-[100vh]">
    <div class="w-[1098px] bg-[#F9F9F9] relative">
      <button
        @click="wipeData"
        class="bg-white py-3 pl-[14px] pr-[17px] rounded-full absolute top-[57px] left-[62px]"
      >
        <BackIcon />
      </button>
      <div class="mx-[149px] pt-[47px]">
        <nav>
          <div class="flex items-center">
            <h1 class="font-helvetica font-bold text-2xl flex-1">
              პირადი ინფო
            </h1>
            <h1 class="text-lg">1/3</h1>
          </div>
          <div class="h-px bg-[#191919] w-full mt-3 mb-[69px]" />
        </nav>
        <Form
          @submit="onSubmit"
          class="font-helveticaR font-bold"
          enctype="multipart/form-data"
        >
          <div class="flex gap-[56px] mb-[46px]">
            <div class="flex flex-col w-full">
              <TextInput
                label="სახელი"
                name="name"
                type="text"
                rules="required|min:2|geo_language"
                maxlength="8"
              />
              <h5 class="text-sm font-light mt-2">
                მინიმუმ 2 ასო, ქართული ასოები
              </h5>
            </div>

            <div class="flex flex-col w-full">
              <TextInput
                label="გვარი"
                name="surname"
                type="text"
                rules="required|min:2|geo_language"
                maxlength="15"
              />
              <h5 class="text-sm font-light mt-2">
                მინიმუმ 2 ასო, ქართული ასოები
              </h5>
            </div>
          </div>

          <div class="flex items-center">
            <h1 class="mr-[19px]">პირადი ფოტოს ატვირთვა</h1>

            <Field
              name="thumbnail"
              id="thumbnail"
              type="file"
              class="hidden"
              rules="image|required"
              accept="image/png, image/gif, image/jpeg"
              @change="onChooseImage"
            >
            </Field>
            <label
              for="thumbnail"
              class="text-white bg-[#0E80BF] px-[19px] py-1 ml-2 cursor-pointer rounded hover:bg-[#0f8acc] active:bg-[#1094db]"
              >ატვირთვა
            </label>
            <img
              v-if="image"
              src="@/assets/svg/checkmark.svg"
              alt="checkmark"
              class="ml-4"
            />
            <img
              v-if="noImage"
              src="@/assets/svg/warrning.svg"
              alt="warrning"
              class="ml-4"
            />
          </div>

          <div class="flex flex-col">
            <div class="flex flex-col w-full mt-[41px] mb-2">
              <label class="mb-2" for="about"
                >ჩემ შესახებ (არასავალდებულო)</label
              >
              <Field
                name="about"
                id="about"
                as="textarea"
                placeholder="ზოგადი ინფო შენ შესახებ"
                rows="3"
                cols="5"
                @keyup="save('about')"
                v-model="about"
                maxlength="141"
              />
            </div>
          </div>
          <div class="flex flex-col w-full mb-[29px] mt-[33px]">
            <TextInput
              label="ელ.ფოსტა"
              name="email"
              type="email"
              rules="required|email|redberry_email"
            />
            <h5 class="text-sm font-light mt-2">
              უნდა მთავრდებოდეს @redberry.ge-ით
            </h5>
          </div>

          <div class="flex flex-col w-full mb-[25px]">
            <TextInput
              label="მობილურის ნომერი"
              name="phone"
              type="text"
              rules="required|geo_phone"
              maxlength="13"
            />
            <h5 class="text-sm font-light mt-2">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </h5>
          </div>
          <div class="mt-40 flex">
            <RouterLink to="/" class="flex-1" />
            <button @click="onClickNext" class="navigation-btn">შემდეგი</button>
          </div>
        </Form>
      </div>
    </div>
    <div class="">
      <VisualResult />
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import BackIcon from "@/assets/svg/BackIcon.vue";
import TextInput from "@/components/TextInput.vue";
import VisualResult from "@/components/VisualResult.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useDataStore } from "@/stores/data";

export default {
  components: {
    BackIcon,
    Form,
    Field,
    TextInput,
    VisualResult,
  },

  setup() {
    const router = useRouter();
    const data = useDataStore();
    const image = ref(null);
    const noImage = ref(false);
    const about = ref("");

    const wipeData = () => {
      localStorage.clear();
      router.push("/");
    };

    const onChooseImage = (event) => {
      image.value = event.target.files[0];
      noImage.value = false;
    };

    const onSubmit = (values) => {
      console.log(values);
    };

    const onClickNext = () => {
      if (!image.value) {
        noImage.value = true;
      }
    };

    const save = () => {
      localStorage.setItem("about", about.value);
      data.about = about.value;
    };

    onMounted(async () => {
      if (localStorage.getItem("about")) {
        about.value = localStorage.getItem("about");
      }
    });

    return {
      onChooseImage,
      image,
      onSubmit,
      onClickNext,
      noImage,
      save,
      about,
      wipeData,
    };
  },
};
</script>
