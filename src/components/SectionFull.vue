<template>
  <section class="flex justify-center bg-white scroll-mt-[var(--top-scroll)]" :id="sectionId">
    <div class="flex flex-col items-center w-full">
      <div class="gap-8 flex flex-col items-center w-full">
        <h2 class="container text-3xl md:max-w-6xl font-extrabold text-gray-900 px-2 md:px-0">
          {{ title }}
        </h2>
        <div class="container-background w-full flex justify-center py-4 md:py-8">
          <div class="px-2 md:px-0" :class="isFullWidth ? 'w-full' : 'md:max-w-6xl'">
            <slot></slot>
          </div>
        </div>
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
