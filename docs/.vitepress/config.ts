import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sébastien Combéfis',
  description: 'The personal website of Sébastien Combéfis contains information about his research and teaching activities, and other personal information.',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        footer: {
          message: 'Msg',
          copyright: 'Copyright',
        },
        nav: [
          { text: 'Administration', link: '/administration/' },
          { text: 'Teaching', link: '/teaching/' },
          { text: 'Research', link: '/research/' },
          { text: 'Politics', link: '/politics/' },
          { text: 'Blog', link: '/blog/' },
          { text: 'About', link: '/about/' },
        ],
        sidebar: {
          '/about/': [
            {
              text: 'About',
              link: '/about/',
              items: [
                {
                  text: 'Curriculum Vitae',
                  link: '/about/cv/',
                },
                {
                  text: 'Social Networks',
                  link: '/about/socialnetworks/',
                },
              ],
            },
          ],
        },
      },
    },
    fr: {
      label: 'French',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Administration', link: '/fr/administration/' },
          { text: 'Enseignement', link: '/fr/teaching/' },
          { text: 'Recherche', link: '/fr/research/' },
          { text: 'Politique', link: '/fr/politics/' },
          { text: 'Blog', link: '/fr/blog/' },
          { text: 'À propos', link: '/fr/about/' },
        ],
        outlineTitle: 'Sur cette page',
        sidebar: {
          '/fr/about/': [
            {
              text: 'À propos',
              link: '/fr/about/',
              items: [
                {
                  text: 'Curriculum vitaæ',
                  link: '/fr/about/cv/',
                },
                {
                  text: 'Réseaux sociaux',
                  link: '/fr/about/socialnetworks/',
                },
              ],
            },
          ],
        },
      },
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/scombefis' },
      { icon: 'github', link: 'https://github.com/combefis/combefis.github.io' },
      { icon: 'instagram', link: 'https://www.instagram.com/scombefis' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/scombefis' },
      { icon: 'twitter', link: 'https://twitter.com/scombefis' },
    ],
  },
})
