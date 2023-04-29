import './App.css'
import viteLogo from '/vite.svg'
import LoginForm from './stories/Login'
import reactLogo from './assets/react.svg'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState({
    loading: true,
    data: null,
  })

  useEffect(() => {
    setCart({ loading: true, data: null })
    fetch('/api/cart')
      .then(async (res) => console.log(await res.json()))
      .then((data) => setCart({ loading: false, data }))
      .catch(() => setCart({ loading: false, data: null }))
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">{cart.data}</div>
      <LoginForm />
    </>
  )
}

export default App
