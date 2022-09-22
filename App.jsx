// import RepoList from "./RepoList"
// const RepoList = window.RepoList

const Navbar = window.Navbar.default

export default function App() {
  const [state, setState] = React.useState('red')
  return (
    <div style={{ backgroundColor: state }} onClick={() => state === 'green' ? setState('red') : setState('green')}>Hey
      <Navbar />
      <ReactRouterDOM.Routes>
        {/* <ReactRouterDOM.Route path="/index.html" element={<h1>Home</h1>} /> */}
        <ReactRouterDOM.Route path="/about" element={<h1>About</h1>} />

        {/* Need to match base path in production (github pages env defaults to repo name) */}
        {/* /index.html default for liveserver */}
        {/* / default for other deployments */}
        {/* /my-profile default for github pages */}
        <ReactRouterDOM.Route path="/index.html" element={<h1>Home <ReactRouterDOM.Link to='/about'><button>about</button></ReactRouterDOM.Link></h1>} />
        <ReactRouterDOM.Route path="/" element={<h1>Home <ReactRouterDOM.Link to='/about'><button>about</button></ReactRouterDOM.Link></h1>} />
        <ReactRouterDOM.Route path="/my-portfolio" element={<h1>Home <ReactRouterDOM.Link to='/about'><button>about</button></ReactRouterDOM.Link></h1>} />
      </ReactRouterDOM.Routes>
      {/* <RepoList /> */}
    </div>
  )
}
