<template>
  <section class="flex justify-center bg-white" :id="sectionId">
    <div class="container flex flex-col items-center">
      <div class="gap-8 flex flex-col items-center" :class="[{ 'w-full': isFullWidth }, { 'md:max-w-6xl': !isFullWidth }]">
        <h2 class="text-3xl font-extrabold text-gray-900 w-full text-left">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionContainer',
  props: {
    title: {
      type: String,
      required: true
    },
    sectionId: {
      type: String,
      default: ''
    },
    isFullWidth: {
      type: Boolean,
      default: false
    }
  }
}
</script>