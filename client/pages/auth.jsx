import Signup from "../src/features/auth/Signup";
import Login from "../src/features/auth/Login";
import React from 'react'

function auth() {
    const [newUser, setNewUser] = useState(false)
  return (
    <>
    {newUser ? (<Signup setNewUser={setNewUser}/>) : (<Login setNewUser={setNewUser} />)}
    </>
  )
}

export default auth