export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e29f9d43e46c84ec572c53f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bv3j5zxs',
                  apiId: 'c1754cda-f399-4cce-a4d2-b2d5bcf7aed0'
                },
                {
                  buildHookId: '5e29f9d4058b3559b1a39ee8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yndz2i5y',
                  apiId: '4e91eb25-725e-4a72-8bad-37a51e1c80f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hotdev6m/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yndz2i5y.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
