// import React from 'react'

export default function Navbar() {
  const dispatch = ReactRedux.useDispatch()
  const githubLink = ReactRedux.useSelector((state) => state.githubProfileLink)
  return (
    <div>
      Navbar
      <button onClick={() => dispatch({ type: 'TEST_CHANGE_GIT_LINK', payload: 'hi' })}>
        change link
        {githubLink}
      </button>
      <ReactRouterDOM.Link to='/about'><button className="btn btn-primary">about</button></ReactRouterDOM.Link>
      <ReactRouterDOM.Link to='/my-portfolio'><button className="btn btn-primary">home</button></ReactRouterDOM.Link>
    </div>
  )
}
