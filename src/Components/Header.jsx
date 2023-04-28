import {useContext} from 'react'
import ThemeContext from '../Contaxt/ThemeContaxt'

function Header() {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <>
    <div>Active Theme : {theme}</div>
    <button onClick={()=>{setTheme(theme==='dark'?'light':'dark')}}>Change Theme</button>
    </>
  )
}

export default Header