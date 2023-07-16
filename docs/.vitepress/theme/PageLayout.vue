<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter, withBase } from 'vitepress'
import { watch } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const router = useRouter();

if (typeof window !== 'undefined' && window.gtag) {
  watch(() => router.route.data.relativePath, (path) => {
    const home = path === 'index.md'
    const error = router.route.data.title === '404'
    const title = home ? 'Sébastien Combéfis' : router.route.data.title
    const location = '/' + (home ? '' : error ? '404' : path.slice(0, path.lastIndexOf('/')))
    gtag('event', 'page_view', { page_title: title, page_location: location });
  }, { immediate: true });
}
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <div v-if="frontmatter.image" id="rightimg">
        <figure>
          <img :src="withBase(`/images/pics/${frontmatter.image}`)" :alt="frontmatter.caption" /> 
          <figcaption>{{ frontmatter.caption }}</figcaption>
        </figure>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
#rightimg {
  margin-bottom: 15px;
}
#rightimg > figure > figcaption {
  font-size: 12px;
}
</style>
