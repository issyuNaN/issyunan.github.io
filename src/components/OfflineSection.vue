<script setup lang="ts">
import { offlineNotes } from '../data/site'

const emphasisParts = (text: string) => text
  .split(/(\*\*[^*]+\*\*)/g)
  .filter(Boolean)
  .map((part) => ({
    text: part.startsWith('**') && part.endsWith('**') ? part.slice(2, -2) : part,
    strong: part.startsWith('**') && part.endsWith('**'),
  }))
</script>

<template>
  <section id="offline" class="offline-section page-shell section-observe">
    <header class="offline-heading reveal-item">
      <h2>Beyond Research</h2>
      <span>Offline</span>
    </header>

    <ul class="offline-list">
      <li v-for="item in offlineNotes" :key="item.text" class="offline-item reveal-item">
        <span class="offline-icon" aria-hidden="true">{{ item.icon }}</span>
        <p>
          <template v-for="(part, index) in emphasisParts(item.text)" :key="`${item.text}-${index}`">
            <strong v-if="part.strong">{{ part.text }}</strong>
            <span v-else>{{ part.text }}</span>
          </template>
        </p>
      </li>
    </ul>
  </section>
</template>
