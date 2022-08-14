// import RepoList from "./RepoList"
// const RepoList = window.RepoList

const Navbar = window.Navbar.default

export default function App() {
  const [state, setState] = React.useState('red')
  return (
    <div style={{ backgroundColor: state }} onClick={() => state === 'green' ? setState('red') : setState('green')}>Hey
      <Navbar />
      <ReactRouterDOM.Routes>
        {/* Need to match base path in production (github pages env defaults to repo name) */}
        <ReactRouterDOM.Route path="/my-portfolio" element={<h1>Home</h1>} />
        {/* <ReactRouterDOM.Route path="/index.html" element={<h1>Home</h1>} /> */}
        <ReactRouterDOM.Route path="/about" element={<h1>About</h1>} />
      </ReactRouterDOM.Routes>
      {/* <RepoList /> */}
    </div>
  )
}
