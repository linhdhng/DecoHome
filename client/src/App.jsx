import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Dashboard from './component/Dashboard'
import Welcome from './features/auth/Welcome'
import UsersProduct from './features/usersfile/UsersProduct'
import AdminControl from './features/adminpage/AdminControl'
import CreateProduct from './features/adminpage/ProductEdit/CreateProduct'
import UpdateProduct from './features/adminpage/ProductEdit/UpdateProduct'
import Header from './component/Header'
import Test from './component/test'
function App() {
  
  return (
    <>
    <Header />
    <Routes>
      {/* Main Home Page for Public */}
      <Route path='/' element={<Layout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>} />
          
          {/* Users Routes */}
          <Route path='/dashboard'element={<Dashboard />}>
            <Route index element={<Welcome/>} />
              <Route path='userfile' element={<UsersProduct/>} />
          </Route>
          {/* Protected Routes with auth */}
          <Route path='admin' element={<AdminControl />} />
          <Route path='/create' element={<CreateProduct />}/>
          <Route path='/edit/:id' element={<UpdateProduct />}/>

    </Routes>
    <Test />
    </>
  )
}

export default App
