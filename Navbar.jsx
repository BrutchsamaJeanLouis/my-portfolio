const useState = React.useState
const Link = ReactRouterDOM.Link

export default function Navbar() {
  const dispatch = ReactRedux.useDispatch()
  const githubLink = ReactRedux.useSelector((state) => state.githubProfileLink)
  const [navOpened, setNavOpened] = useState(false)

  // To update state
  {/* <button onClick={() => dispatch({ type: 'TEST_CHANGE_GIT_LINK', payload: 'hi' })}> */}
  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
             
             <button class="navbar-toggler collapsed" onClick={() => setNavOpened(!navOpened)} type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="navbar-toggler-icon"></span>
             </button> <a class="navbar-brand" href="#">Brand</a>
             <div class={`${!navOpened && 'collapse'} navbar-collapse`} id="bs-example-navbar-collapse-1">
                <ul class="navbar-nav">
                   <li class="nav-item active">
                    <Link to={'/about'}><button onClick={() => setNavOpened(false)} class="btn btn-link">About</button></Link>
                   </li>
                   <li class="nav-item">
                   <Link to={'/projects'}><button onClick={() => setNavOpened(false)} class="btn btn-link">Projects</button></Link>
                   </li>
                  </ul>
                <form class="form-inline">
                   <input class="form-control mr-sm-2" type="text" /> 
                   <button class="btn btn-primary my-2 my-sm-0" type="submit">
                      Search
                   </button>
                </form>
             </div>
          </nav>
  )
}
