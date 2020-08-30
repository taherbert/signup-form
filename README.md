# Giving Assistant Sample Application

This application attempts to strike a balance between best practices and demonstrating my thoughts and ideas. For the sake of brevity and clarity, the application is _not_ written to be "production ready". I have left comments throughout as I typically do in a standard project describing some of what may need to be modified for a proudction application.

In a few areas, I show some of what might be typical in a production environment. For example, the modal window is responsive and will change size/orientation at smaller sizes -- I took some creative liberty there! Styling was done with a CSS-in-JS framework. Not all styling was done to be consistent throughout, rather, I applied several different methods for demonstration purposes with explanations throughout.

Project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app). Scripts for building and running the application are located in the `package.json`. See CRA's [quick start](https://create-react-app.dev/docs/getting-started#quick-start) documentation for detailed instructions. There is a single unit test written as an example. Primary scripts are:

```
yarn start
yarn test
yarn build
```

I also created a very simple API to respond to requests and have deployed it via Firebase. The code for the API is available inside of the `functions` folder.
