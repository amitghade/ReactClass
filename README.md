1. How to insert react in our code.
2. Other elements with root element.
3. Content inside root.
4. Not rendered.
5. Script sequence.
6. Render complex html in root

npm init -y
npm init
npm install --save-dev parcel
npm install react
npm install react-dom/client
npx parcel index.html
npx parcel build index.html
npx parcel index.html --https

//Hot Module Replacement
// File Watcher algorithm in C++.
// Bundling
// Minifies
// Clean our code(Remove console.logs)
// Manages dev and production Build
// Image optimization
// Caching while development
// compress
// Compatibility with old browsers
// HTTPS on development
// Manages port number
// Consistent hashing algorithm
// Zero config tool

"browserslist": [
"defaults and fully supports es6-module",
"maintained node versions"
]

JSX is not html inside javascript, it is html like syntax

- JSX is seperate and React is seperate
- JSX is not HTML inside Javascript, it is HTML like syntax
- JSX code us transpiled before it reaches the JS engine
- Parcel is transpiring through Babel

12/2/25

Passed a unique key.....console.log(props.key)
why index is not used as keys in react
Create seperate components
File extension in imports is optional
Never keep hard coded data or hard coded string in component file
Two types of exports default and named.
React Hooks are normal JS utility functions

14/2/25
useState() ---create powerful state variables
State variable maintaines the state of your component
whenever state variable changes React re-renders the component
useEffect()
it takes two arguments 1. a callback function 2. Dependencies
the callback function in useEffect runs after the component is rendered
React if fast at manupulating DOM
Reconciliation algorithm(React fiber)
Diffing algorithm

conditional rendering
conditional rendering using ternary operator
login logout useState

17/02/2025
Filter restaurants based on search

18/02/2025
Create Routes.
Routing will be done in root component
Install npm i react-router
import createBrowserRouter
create configuration
Provide configuration by <RouterProvider router={nameOfRouterConfig}/>
const appRouter = createBrowserRouter([
{
path: "/",
element: <Application />,
errorElement: <Error />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
]);

Create About, Contact pages
If other route is provided it will give error which will be handled automatically by react router
We can create our own Error Conponent and render on random routes
One more feature is given by react router related to error
useRouteError() hook to get more info on error(import in Error component)
-Header should be visible in any case.
**Childern Routes**
const appRouter = createBrowserRouter([
{
path: "/",
element: <Application />,
children: [
{
path: "/",
element: <RestaurantContainer />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
],
errorElement: <Error />,
},
]);
**Link navigation to routes**

- Never use anchor tags to create routes.
- Use Link component given by react-router to route
- Link contains _to_ attribute just like _href_ in anchor tag
