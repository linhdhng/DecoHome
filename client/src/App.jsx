import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import Welcome from './features/auth/Welcome'
import UsersProduct from './features/usersfile/UsersProduct'
import AdminControl from './features/adminpage/AdminControl'
import CreateProduct from './features/adminpage/ProductEdit/CreateProduct'
import UpdateProduct from './features/adminpage/ProductEdit/UpdateProduct'
import Header from './component/Header'
import Featured from './component/Featured'
import Cabinet from './component/Cabinet'
import TableNChair from './component/TableNChair'
import KitchenNBath from './component/KitNBath'


function App() {
  
  return (
    <>
    <Header />
    <Routes>
      {/* Main Home Page for Public */}
      <Route path='/' element={<Layout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/featured' element={<Featured/>}/>
      <Route path='/cabinet' element={<Cabinet />} />
      <Route path='/tablenchair' element={<TableNChair/>}/>
      <Route path='/kitnbath' element={<KitchenNBath/>}/>
          {/* Users Routes */}

            <Route path='/dashboard' element={<Welcome/>} />
              <Route path='userfile' element={<UsersProduct/>} />
          {/* Protected Routes with auth */}
          <Route path='admin' element={<AdminControl />} />
          <Route path='/create' element={<CreateProduct />}/>
          <Route path='/edit/:id' element={<UpdateProduct />}/>

    </Routes>

    </>
  )
}

export default App
