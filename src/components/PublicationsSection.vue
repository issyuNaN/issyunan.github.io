<script setup lang="ts">
import { publications } from '../data/site'
import SectionHeading from './SectionHeading.vue'
import WorkMedia from './WorkMedia.vue'

const authorParts = (authors: string, highlightAuthor?: string) => (
  highlightAuthor ? authors.split(highlightAuthor) : [authors]
)
</script>

<template>
  <section id="publications" class="publications-section page-shell section-observe">
    <SectionHeading title="Publications" />

    <div class="work-list">
      <article v-for="publication in publications" :key="publication.id" class="work-row reveal-item">
        <WorkMedia :src="publication.image" :alt="publication.title" :fallback="`PUBLICATION 0${publication.id}`" />

        <div class="work-content">
          <div class="work-meta">
            <span :class="`publication-type publication-type--${publication.type}`">{{ publication.type }}</span>
            <span>{{ publication.venue }}</span>
            <span>{{ publication.year }}</span>
            <span v-if="publication.highlight" class="work-highlight">{{ publication.highlight }}</span>
          </div>
          <h3 class="work-title">{{ publication.title }}</h3>
          <p class="work-authors">
            <template v-for="(part, index) in authorParts(publication.authors, publication.highlightAuthor)" :key="index">
              {{ part }}<strong
                v-if="publication.highlightAuthor && index < authorParts(publication.authors, publication.highlightAuthor).length - 1"
              >{{ publication.highlightAuthor }}</strong>
            </template>
          </p>
          <p class="work-summary">{{ publication.summary }}</p>
          <div class="work-links">
            <a
              v-for="link in publication.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noreferrer"
            >{{ link.label }}</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
