import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { trpc } from './trpc'

function App() {
  const fetchUser = async () => {
    const user = await trpc.user.getUser.query('1');
    console.log(user);
  };

  const getUser = () => {
    fetchUser();
  }

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
      <div className="card">
        <button onClick={getUser}>
          getUser
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
