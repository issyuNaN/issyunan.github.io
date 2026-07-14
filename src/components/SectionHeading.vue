<script setup lang="ts">
defineProps<{
  title: string
  compact?: boolean
}>()
</script>

<template>
  <div class="section-heading" :class="{ 'section-heading--compact': compact }">
    <h2>{{ title }}</h2>
  </div>
</template>
