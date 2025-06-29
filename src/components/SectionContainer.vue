<template>
  <section class="flex justify-center bg-white scroll-mt-[var(--top-scroll)] px-2 md:px-0" :id="sectionId">
    <div class="container flex flex-col items-center">
      <div class="container-content gap-8 flex flex-col items-center md:max-w-6xl"
        :class="[{ 'md:w-6xl': isFullWidth }]">
        <h2 class="text-3xl font-extrabold text-gray-900 w-full text-left">
          {{ title }}
        </h2>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionContainer",
  props: {
    title: {
      type: String,
      required: true,
    },
    sectionId: {
      type: String,
      default: "",
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>
