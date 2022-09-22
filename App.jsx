const Navbar = window.Navbar.default
const RepoList = window.RepoList.default

export default function App() {
  const [state, setState] = React.useState('red')
  return (
    <div className="container-fluid bg-dark vh-100">
      <div class="row">
      <div class="col-md-12">
         <Navbar />
         <div class="jumbotron">
            <ReactRouterDOM.Routes>
              <ReactRouterDOM.Route path="/about" element={<h1>About this project</h1>} />
              <ReactRouterDOM.Route path="/projects" element={<RepoList />} />
              <ReactRouterDOM.Route path="/experience-and-skills" element={<h1>About</h1>} />
              <ReactRouterDOM.Route path="/contact" element={<h1>About</h1>} />

              {/* Need to match base path in production (github pages env defaults to repo name) */}
              {/* /index.html default for liveserver */}
              {/* / default for other deployments */}
              {/* /my-profile default for github pages */}
              <ReactRouterDOM.Route path="/index.html" element={<h1>Info About me</h1>} />
              <ReactRouterDOM.Route path="/" element={<h1>Info About me</h1>} />
              <ReactRouterDOM.Route path="/my-portfolio" element={<h1>Info About me</h1>} />
            </ReactRouterDOM.Routes>
         </div>
      </div>
   </div>
    </div>
  )
}
