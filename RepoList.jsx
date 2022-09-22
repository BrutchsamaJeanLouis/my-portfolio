const { useEffect } = React

export default function RepoList () {
  const [state, setState] = React.useState(true)

  useEffect(() => {
    getGitHubProfile()
  }, [])
  
  const getGitHubProfile = () => {
    axios.get(
      'https://api.github.com/users/BrutchsamaJeanLouis/repos', { username: 'BrutchsamaJeanLouis'}, {
        headers: {
          'Accept': 'application/vnd.github+json'
        }
      }).then((res) => setState(res))
      .catch((err) => console.log(err.response.data.message))
  }

  return (
    <div style={{ color: 'white' }}>
      {JSON.stringify(state)}
      </div>
  )
}