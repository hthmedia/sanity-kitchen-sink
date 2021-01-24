export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600d5de9ad07d4885ecec260',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kcawn48j',
                  apiId: '48a0cb81-0b03-4fbd-8943-0954bfdfcaa9'
                },
                {
                  buildHookId: '600d5de9ad07d48735cebfa2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-umy2ai5r',
                  apiId: 'c7e0d7ea-3bf0-430e-b1f7-d48ab765fa39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hthmedia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-umy2ai5r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
