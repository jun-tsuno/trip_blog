## Travel blog app

- Trip blog app, where user can share their experience, see posts, and comment on the posts.
  <img width="600" alt="screen-shot" src="https://github.com/jun-tsuno/trip_blog/assets/110567844/0b3e8693-05a4-4c47-9908-670e41741055">

## Built With

- `Nextjs` : version 13.3.0
- `TypeScript`
- `ReduxToolkit`
- `GraphQL / Apollo-Server`
- `MongoDB`
- `AWS S3 bucket`
- `Jest / RTL`
- `zod`
- `tailwindCSS`

## Upcoming

- Edit post function
- Post comments function (can comment on a post)

## Challenging

- Because post data is frequently updated by creating and deleting posts, I needed to handle cache in order to display the most up-to-date data on the client.
- In addition, I created custom hooks for mutations and queries to make those functionalities more reusable and the code seems cleaner, which took careful thought and an in-depth understanding of the application, both front and server side.
