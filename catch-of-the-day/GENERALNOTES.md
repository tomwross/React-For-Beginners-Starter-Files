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
