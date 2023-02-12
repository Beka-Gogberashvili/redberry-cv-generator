<template>
  <div class="min-h-[100vh] bg-shutterstock">
    <nav class="mx-[70px] pt-[25px]">
      <RouterLink to="/">
        <img src="@/assets/img/redberry-logo.png" alt="logo" class="" />
      </RouterLink>
      <div class="h-px bg-[#191919] w-full mt-6 mb-10" />
    </nav>

    <div class="flex justify-center mt-[424px]">
      <RouterLink to="/personal">
        <button
          class="bg-[#191919] px-[126px] py-[18px] text-white rounded-lg font-helvetica text-xl hover:bg-[#2c2c2c] active:bg-[#3d3d3d]"
        >
          რეზიუმეს დამატება
        </button>
        <img
          src="@/assets/img/dta.png"
          alt="dta"
          class="top-[473px] right-[565px] z-[-1] absolute"
        />
      </RouterLink>
    </div>
  </div>
</template>
