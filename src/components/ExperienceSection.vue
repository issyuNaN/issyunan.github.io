<script setup lang="ts">
import { experiences } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="experience" class="experience-section page-shell section-observe">
    <SectionHeading title="Experience" compact />

    <div class="experience-content">
      <div class="timeline">
        <article v-for="item in experiences" :key="item.period" class="timeline-item reveal-item">
          <div class="timeline-marker"><span></span></div>
          <div class="timeline-period">{{ item.period }}</div>
          <div class="timeline-copy">
            <span class="timeline-type">{{ item.type === 'education' ? 'Education' : 'Research' }}</span>
            <h3>{{ item.role }}</h3>
            <h4>{{ item.organization }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
