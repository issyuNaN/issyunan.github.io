<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ src: string; alt: string; fallback: string }>()
const missing = ref(false)
const imageUrl = `${import.meta.env.BASE_URL}${props.src}`
</script>

<template>
  <div class="work-media">
    <img v-if="!missing" :src="imageUrl" :alt="alt" loading="lazy" decoding="async" @error="missing = true" />
    <div v-else class="work-media-fallback">{{ fallback }}</div>
  </div>
</template>
