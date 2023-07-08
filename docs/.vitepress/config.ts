import { defineConfig } from 'vitepress'

import small from 'markdown-it-small'

export default defineConfig({
  title: 'Sébastien Combéfis',
  description: 'The personal website of Sébastien Combéfis contains information about his research and teaching activities, and other personal information.',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        footer: {
          message: '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img src="/images/by-nc-nd.png" width="100" style="display: inline-block" /></a>',
          copyright: 'CC BY-NC-ND 2009–2023 – Sébastien Combéfis.',
        },
        nav: [
          { text: 'Administration', link: '/administration/', activeMatch: '/administration/' },
          { text: 'Teaching', link: '/teaching/', activeMatch: '/teaching/' },
          { text: 'Research', link: '/research/', activeMatch: '/research/' },
          { text: 'Association', link: '/association/', activeMatch: '/association/' },
          { text: 'Politics', link: '/politics/', activeMatch: '/politics/' },
          { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
          { text: 'About', link: '/about/', activeMatch: '/about/' },
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
                {
                  text: 'License',
                  link: '/about/license/',
                },
              ],
            },
          ],
          '/politics/': [
            {
              text: 'Politics',
              link: '/politics/',
              items: [
                {
                  text: 'Elections 2018',
                  link: '/politics/elections2018/',
                },
              ],
            },
          ],
          '/research/': [
            {
              text: 'Research',
              link: '/research/',
              items: [
                {
                  text: 'Publications',
                  link: '/research/publications/',
                },
                {
                  text: 'PhD thesis',
                  link: '/research/phdthesis/',
                },
                {
                  text: 'Master thesis',
                  link: '/research/masterthesis/',
                },
                {
                  text: 'Projects',
                  link: '/research/projects/',
                },
              ],
            },
          ],
          '/teaching/': [
            {
              text: 'Teaching',
              link: '/teaching/',
              items: [
                {
                  text: 'Schools',
                  link: '/teaching/schools/',
                  collapsed: true,
                  items: [
                    {
                      text: 'ITSCM',
                      link: '/teaching/itscm/',
                      collapsed: true,
                      items: [
                        {
                          text: 'Digital transmission',
                          link: '/teaching/itscm/transmission/',
                        },
                        {
                          text: 'Initiation to databases',
                          link: '/teaching/itscm/database/',
                        },
                        {
                          text: 'Programming basics',
                          link: '/teaching/itscm/programming/',
                        },
                      ],
                    },
                    {
                      text: 'EPHEC',
                      link: '/teaching/ephec/',
                      collapsed: true,
                      items: [
                        {
                          text: 'Host security',
                          link: '/teaching/ephec/hostsecurity/',
                        },
                        {
                          text: 'Software security',
                          link: '/teaching/ephec/softwaresecurity/',
                        },
                        {
                          text: 'Statistics basics',
                          link: '/teaching/ephec/statistics/',
                        },
                      ],
                    },
                    {
                      text: 'HEPH-Condorcet',
                      link: '/teaching/condorcet/',
                      collapsed: true,
                      items: [
                        {
                          text: 'Cryptography',
                          link: '/teaching/condorcet/cryptography/',
                        },
                      ],
                    },
                    {
                      text: 'ECAM',
                      link: '/teaching/ecam/',
                      collapsed: true,
                      items: [
                        {
                          text: 'Algorithm and optimisation',
                          link: '/teaching/ecam/algopti/',
                        },
                        {
                          text: 'Artificial intelligence',
                          link: '/teaching/ecam/ai/',
                        },
                        {
                          text: 'C',
                          link: '/teaching/ecam/c/',
                        },
                        {
                          text: 'Computer security',
                          link: '/teaching/ecam/security/',
                        },
                        {
                          text: 'Data structure',
                          link: '/teaching/ecam/datastruct/',
                        },
                        {
                          text: 'NoSQL',
                          link: '/teaching/ecam/nosql/',
                        },
                        {
                          text: 'Numerical computing',
                          link: '/teaching/ecam/numcomp/',
                        },
                        {
                          text: 'Operating system',
                          link: '/teaching/ecam/os/',
                        },
                        {
                          text: 'Python programming',
                          link: '/teaching/ecam/python/',
                        },
                        {
                          text: 'Software architecture',
                          link: '/teaching/ecam/softarch/',
                        },
                        {
                          text: 'Virtualisation',
                          link: '/teaching/ecam/virtualisation/',
                        },
                      ],
                    },
                    {
                      text: 'UCLouvain',
                      link: '/teaching/uclouvain/',
                    },
                  ],
                },
                {
                  text: 'Trainings',
                  link: '/teaching/trainings/',
                },
                {
                  text: 'Projects',
                  link: '/teaching/projects/',
                  collapsed: true,
                  items: [
                    {
                      text: 'APP0',
                      link: '/teaching/projects/app0/'
                    },
                    {
                      text: 'Digitalent',
                      link: '/teaching/projects/digitalent/'
                    },
                    {
                      text: 'LADO',
                      link: '/teaching/projects/lado/'
                    },
                    {
                      text: 'SAlt',
                      link: '/teaching/projects/salt/'
                    },
                    {
                      text: 'TLCA',
                      link: '/teaching/projects/tlca/'
                    },
                  ]
                },
                {
                  text: 'Books',
                  link: '/teaching/books/',
                },
                {
                  text: 'µCourses',
                  link: '/teaching/ucourses/',
                  collapsed: true,
                  items: [
                    {
                      text: 'Blockchain',
                      link: '/teaching/ucourses/blockchain/',
                    },
                    {
                      text: 'Constraint satisfaction problem',
                      link: '/teaching/ucourses/csp/',
                    },
                    {
                      text: 'Design thinking',
                      link: '/teaching/ucourses/designthinking/',
                    },
                    {
                      text: 'Genetic algorithm',
                      link: '/teaching/ucourses/geneticalgorithm/',
                    },
                    {
                      text: 'Go programming',
                      link: '/teaching/ucourses/golang/',
                    },
                    {
                      text: 'N-Grams',
                      link: '/teaching/ucourses/ngrams/',
                    },
                    {
                      text: 'Node-RED',
                      link: '/teaching/ucourses/nodered/',
                    },
                    {
                      text: 'Numerical computing',
                      link: '/teaching/ucourses/numcomp/',
                    },
                    {
                      text: 'OS internal design',
                      link: '/teaching/ucourses/osdesign/',
                    },
                    {
                      text: 'Python optimisation',
                      link: '/teaching/ucourses/pythonopti/',
                    },
                    {
                      text: 'Quantum computing',
                      link: '/teaching/ucourses/quantumcomputing/',
                    },
                    {
                      text: 'Rainbow table',
                      link: '/teaching/ucourses/rainbowtable/',
                    },
                  ],
                },
                {
                  text: 'Master thesis',
                  link: '/teaching/masterthesis/',
                },
                {
                  text: 'Internships',
                  link: '/teaching/internships/',
                  collapsed: true,
                  items: [
                    {
                      text: 'Supervision',
                      link: '/teaching/internships/supervision/'
                    },
                    {
                      text: 'Projects',
                      link: '/teaching/internships/projects/'
                    },
                  ]
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
  markdown: {
    config: (md) => {
      md.use(small)
    }
  },
})
