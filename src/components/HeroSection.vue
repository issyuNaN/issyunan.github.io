<script setup lang="ts">
import { ref } from 'vue'
import { links, profile } from '../data/site'
import IconGlyph from './IconGlyph.vue'

const photoMissing = ref(false)
const photoUrl = `${import.meta.env.BASE_URL}${profile.photo}`
const [roleTitle, roleFocus = ''] = profile.role.split('\u00b7').map((part) => part.trim())
const [affiliationUnit, ...affiliationParts] = profile.affiliation.split(',')
const affiliationName = affiliationParts.join(',').trim()
const inlineLinkParts = (text: string) => {
  const parts: Array<{ text: string; href?: string }> = []
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) parts.push({ text: text.slice(cursor, match.index) })
    parts.push({ text: match[1], href: match[2] })
    cursor = pattern.lastIndex
  }

  if (cursor < text.length) parts.push({ text: text.slice(cursor) })
  return parts.length ? parts : [{ text }]
}
const sectionLinks = [
  { id: 'news', label: 'News' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'offline', label: 'Offline' },
]
</script>

<template>
  <section id="home" class="hero page-shell section-observe">
    <div class="hero-intro">
      <div class="hero-copy reveal-item">
        <h1>{{ profile.name }}</h1>

        <div class="hero-role-lines">
          <p class="hero-role-title">{{ roleTitle }}</p>
          <p v-if="roleFocus" class="hero-role-focus">{{ roleFocus }}</p>
          <p class="hero-affiliation">
            <span class="hero-affiliation-unit">{{ affiliationUnit.trim() }}</span>
            <span v-if="affiliationName" class="hero-affiliation-separator" aria-hidden="true">·</span>
            <strong v-if="affiliationName">{{ affiliationName }}</strong>
          </p>
        </div>

        <span id="email" class="hero-email">
          <IconGlyph class="hero-email-icon" name="mail" :size="17" />
          <span>{{ profile.email }}</span>
        </span>
      </div>

      <div class="portrait-wrap reveal-item">
        <span class="portrait-code">PORTRAIT / 01</span>
        <div class="portrait-frame">
          <img
            v-if="!photoMissing"
            :src="photoUrl"
            :alt="`${profile.name} portrait`"
            @error="photoMissing = true"
          />
          <div v-else class="portrait-placeholder">
            <strong>{{ profile.initials }}</strong>
            <span>YOUR PHOTO</span>
          </div>
        </div>
        <span class="portrait-note">
          <i aria-hidden="true"></i>
          <span lang="en">Hi</span>
          <b aria-hidden="true">·</b>
          <span lang="zh-CN">你好</span>
          <b aria-hidden="true">·</b>
          <span lang="ja">こんにちは</span>
          <b aria-hidden="true">·</b>
          <span lang="ko">안녕하세요</span>
        </span>
      </div>
    </div>

    <div class="hero-bio reveal-item">
      <div class="hero-bio-label">About</div>
      <div class="hero-bio-copy">
        <p v-for="paragraph in profile.bio" :key="paragraph">
          <template v-for="(part, index) in inlineLinkParts(paragraph)" :key="`${paragraph}-${index}`">
            <a
              v-if="part.href"
              :href="part.href"
              target="_blank"
              rel="noreferrer"
            >{{ part.text }}</a>
            <span v-else>{{ part.text }}</span>
          </template>
        </p>
        <p class="hero-phd-note">{{ profile.phdNote }}</p>
        <p class="hero-contact-note">
          {{ profile.contactStatement }} {{ profile.contactInvitation }}
          <span class="hero-contact-email">{{ profile.email }}</span>
        </p>
      </div>
    </div>

    <div class="hero-links reveal-item">
      <div class="social-row">
        <a
          v-for="link in links"
          :key="link.label"
          :class="`social-link--${link.icon}`"
          :href="link.url"
          :aria-label="link.icon === 'x' ? 'Follow on X' : link.label"
          :target="link.url.startsWith('http') ? '_blank' : undefined"
          :rel="link.url.startsWith('http') ? 'noreferrer' : undefined"
        >
          <IconGlyph :name="link.icon" :size="16" />
          <span>{{ link.label }}</span>
        </a>
      </div>
      <p class="hero-research-line">
        <span>Research</span>{{ profile.interests.join(' · ') }}
      </p>
    </div>

    <nav class="section-index reveal-item" aria-label="Page sections">
      <span>Index</span>
      <div>
        <a v-for="item in sectionLinks" :key="item.id" :href="`#${item.id}`">{{ item.label }}</a>
      </div>
    </nav>
  </section>
</template>
