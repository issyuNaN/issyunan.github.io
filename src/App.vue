<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import BrandIcon from './components/BrandIcon.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import NewsSection from './components/NewsSection.vue'
import OfflineSection from './components/OfflineSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import PublicationsSection from './components/PublicationsSection.vue'
import SiteHeader from './components/SiteHeader.vue'

let revealObserver: IntersectionObserver | null = null

onMounted(() => {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('.reveal-item').forEach((item) => revealObserver?.observe(item))
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
})
</script>

<template>
  <div class="site-frame">
    <SiteHeader />

    <main>
      <HeroSection />
      <NewsSection />
      <ExperienceSection />
      <PublicationsSection />
      <ProjectsSection />
      <OfflineSection />
    </main>

    <footer class="site-footer page-shell">
      <div>
        <span class="brand-mark"><BrandIcon /></span>
        <p>© 2026 Xuewen ZHOU.</p>
      </div>
      <p>Last updated: July 2026</p>
      <a class="back-to-top" href="#home">Back to top ↑</a>
    </footer>
  </div>
</template>
