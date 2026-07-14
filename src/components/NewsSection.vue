<script setup lang="ts">
import { news } from '../data/site'
</script>

<template>
  <section id="news" class="news-section page-shell section-observe">
    <header class="news-heading reveal-item">
      <h2>News</h2>
      <span>Updates</span>
    </header>

    <ol class="news-list">
      <li v-for="item in news" :key="item.id" class="news-item reveal-item">
        <p>
          <time :datetime="item.date">{{ item.dateLabel }}</time>
          <a
            v-if="item.href"
            :href="item.href"
            :target="item.href.startsWith('#') ? undefined : '_blank'"
            :rel="item.href.startsWith('http') ? 'noreferrer' : undefined"
          >{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </p>
      </li>
    </ol>
  </section>
</template>
