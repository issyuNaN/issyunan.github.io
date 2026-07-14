<script setup lang="ts">
import { projects } from '../data/site'
import SectionHeading from './SectionHeading.vue'
import WorkMedia from './WorkMedia.vue'
</script>

<template>
  <section id="projects" class="projects-section section-observe">
    <div class="page-shell">
      <SectionHeading title="Projects" />

      <div class="work-list">
        <article v-for="project in projects" :key="project.id" class="work-row reveal-item">
          <WorkMedia :src="project.image" :alt="project.title" :fallback="`PROJECT 0${project.id}`" />

          <div class="work-content">
            <div class="work-meta">
              <span>{{ project.period }}</span>
            </div>
            <h3 class="work-title">{{ project.title }}</h3>
            <p class="work-summary project-summary">{{ project.description }}</p>
            <p class="project-tags">{{ project.tags.join(' · ') }}</p>
            <div class="work-links">
              <a
                v-for="link in project.links"
                :key="link.label"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
              >{{ link.label }}</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
