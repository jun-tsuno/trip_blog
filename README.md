## Travel blog app

- Trip blog app, where user can share their experience, see posts, and comment on the posts.
  <img width="500" alt="Screenshot 2023-05-05 at 12 17 18 AM" src="https://user-images.githubusercontent.com/110567844/236398481-eb3c8813-4ddf-4c03-96a1-a453111128d2.png">
  <img width="500" alt="Screenshot 2023-05-05 at 12 18 38 AM" src="https://user-images.githubusercontent.com/110567844/236398332-466c3f37-f37f-4053-99b9-372baaa626b3.png">

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
