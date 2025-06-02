
// npm i -g webpack webpack-cli@5

// It is a module bundler that takes modules with dependencies and generates static assets representing those modules.
// It is used to bundle JavaScript files for usage in a browser, but it can also transform, bundle, or package just about any resource or asset.
// Webpack is a powerful tool that can be used to bundle JavaScript files, but it can also handle other types of files like CSS, images, and more.

// npm init -y   // Initialize a new Node.js project with default settings

// Add a new command to the "scripts" section of package.json
// "build": "webpack -w"  // This command will run webpack in watch mode, meaning it will automatically rebuild the bundle whenever a file changes.

// npm run build  // Run the build command to start webpack in watch mode
// Webpack will look for an entry point (default is src/index.js) and bundle all the dependencies into a single file (default is dist/main.js).
// Webpack can also be configured to handle different types of files, such as CSS, images, and more, using loaders and plugins.