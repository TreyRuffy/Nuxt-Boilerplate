<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: route.meta.title ? `${route.meta.title} - PROJECT NAME` : 'PROJECT NAME',
})
</script>

<template>
  <div>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
