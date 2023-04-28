import {useContext,useState} from 'react'
import UserContext from '../Contaxt/UserContext'


function User() {
const {user,setUser} = useContext(UserContext)
const [isloading, setisloading] = useState(false)
const handleLogin = () => {
  setisloading(true)
   setTimeout(() => {
    setUser({
        id:'1',
        name:'alperen',
        bio:'lorem ipsum dolor'
       
    })
   setisloading(false)
  
   
   }, 1500);
  
   }
   const handleLogout = () =>{
    setUser(null)
}

  return (
    <div>
      {!user &&  <button onClick={handleLogin}>{isloading ? 'Loading...':'Login'}</button>}
     <code>{JSON.stringify(user)}</code>
     <br />
     {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  )
}

export default User