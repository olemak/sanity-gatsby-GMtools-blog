export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dd7fee67b1bd09023796378',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-GMtools-blog-studio',
                  apiId: '270354ae-f836-4f06-9744-a3561d979417'
                },
                {
                  buildHookId: '5dd7fee6b43fe7b11646060f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-GMtools-blog',
                  apiId: '92b5b67d-3c5a-4e4f-ae89-759b03fa5c3e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olemak/sanity-gatsby-GMtools-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-GMtools-blog.netlify.com', category: 'apps'}
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
