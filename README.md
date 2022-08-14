# my-portfolio

This is an ongoing challenge to test how far/advanced can a react application get without using node js. Using react for a while this is something i've always been curious about
My Finding will be logged in a logbook format

- the type of application being built have not ywt been decided (thinking of a personal development analysis portfolio)
- redux devtools extension not supported, To solve this i will use a global caller function to check the state or our app whenever needed.
- redux devtools now working. Resolved by binding Redux's applyMiddleware function to the global devtools Var

- using React-redux connect to export components not behaving as expected accessing the default var (could be a flaw with babel standalone mode, need to investigate this)

- while implementing React Router error: Cannot read properties of undefined (reading 'createBrowserHistory') at e.BrowserRouter occurs. (Turns out the cdn bundle for ReactRouterDOM is not integrating well with history.js resolved by adding its cdn)

- routing will be a bit tricky due to github pages auto append the repo name in the url as the base browser path