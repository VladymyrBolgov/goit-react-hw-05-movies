import { Route, Routes } from 'react-router-dom'
import {Layout} from '../Layout/Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<div>Layout</div>}>

        </Route>
      </Routes>

      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    ></div>
    </>
  )
}

export default App;
