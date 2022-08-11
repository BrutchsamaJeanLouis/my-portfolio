const Navbar = window.Navbar.default

export default function App() {
  const [state, setState] = React.useState('red')
  return (
    <div style={{ backgroundColor: state }} onClick={() => state === 'green' ? setState('red') : setState('green')}>Hey
      <Navbar />
    </div>
  )
}
