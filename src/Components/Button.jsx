import {useContext} from 'react'
import ThemeContext from '../Contaxt/ThemeContaxt'

function Button() {
    const {theme,setTheme} = useContext(ThemeContext)
  return ( 
    <>
    <div>Active Theme:{theme}</div>
    <button onClick={()=>{setTheme(theme==='light' ? 'dark':'light')}}>Change Theme</button>
    </>
  )
}

export default Button