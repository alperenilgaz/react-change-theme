import {useContext} from 'react'
import Button from './Button'
import Header from './Header'
import ThemeContext from '../Contaxt/ThemeContaxt'
import User from './User'
function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
        <Button/>
        <br />
        <hr />
        <Header />
        <br />
        <hr />
        <User />

    </div>
  )
}

export default Container