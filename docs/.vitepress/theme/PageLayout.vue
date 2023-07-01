<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <div v-if="frontmatter.image" id="rightimg">
        <figure>
          <img :src="`/images/pics/${frontmatter.image}`" :alt="frontmatter.caption" /> 
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
