1. `npm run dev` instead of `npm start` or `npm run start`
   Please use `npm run dev` and _not_ `npm run start` to start the project. The `scripts` included in the package.json file have been updated recently and the `dev` script is now used to start the project for development. The reason for the `404` error is because `npm run start` is trying to serve the static files that you get when you deploy the project.

2. Props - Similar to HTML tag attributes e.g. `<img src="dog.jpg" alt="Dog"`
   Props allow data to be passed between props, a data bus
   No prescriptive prop names, but cannot use using HTML attribute names that would get overwritten
   Can pass a string with double quotes, for everything else (ints, objects) use curly braces
   e.g. `name="Tom" age={37}`

3. State - Where the data lives, home for the data

4. `this` - Component is an object, `this.props.value` is this instance's props

5. `$r` trick - Click on a component in React Dev Tools, go to console, type `$r`, outputs the component as object

6. Stateless functional component - Component that only has a render method to render HTML, no lifecycle or custom methods
   See `Header.js` for example

7. React does not come with a baked in router like Django or Angular or EmberJS
   Instead need to rely on other tools such as [react router](https://github.com/ReactTraining/react-router) or NextJS
   Even the router in React is a component
   Render the router component to the mounting point (`index.js`)

8. Use `defaultValue` instead of `value` when setting the initial value of a prop
   See `StorePicker` for example

9. React golden rule - Don't touch the DOM, avoid using querySelector or jquery
   Use refs and state
   Need to bind custom methods, the built-ins (`render`, `componentDidMount` are bound by default)
   OR use arrow functions for props, they are automatically bound (e.g. `myFunc = (event) => {}`)

10. React [SyntheticEvent](https://reactjs.org/docs/events.html) and [handling events](https://reactjs.org/docs/handling-events.html)
