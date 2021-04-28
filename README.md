# SOHO DEMO APP

This is a simple app built with react to search github users and get their details

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Requirements

- There is a search bar to let the user search by username (login name)✔️
- While searching, the application shows an animated loading indicator✔️
- After the search is completed, the application shows the list of users along with their avatar and their username on the same page✔️
- If the results are not complete in one page, the pagination is shown on the screen✔️
- When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user✔️
- The new page also has to display the list of the user's repositories, followers and following✔️
- The application is built by [React](https://github.com/facebook/react) (Bonus if built in [Next.js](https://nextjs.org/))✔️
- The application has to be responsive and optimised for mobile✔️
- A documentation on how the application works and how to set up and build the project is provided

## Bonus points

- It uses React hooks and functional components✔️
- The pages are server-side rendered and are cached in the server
- The animated loading indicator is done in CSS✔️
- The application style is built by one of the CSS preprocessors✔️
- All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result✔️
- All pages are SEO optimised
- The results list also asynchronous-ly shows the number of followers and following of each user without going the user page
- The search input does the searching as you type (See google search as an example)✔️
- There is animated transition between pages
