import { Route, Routes } from 'react-router-dom'
import {Layout} from 

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<MovieDataPage /> } />
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
