import React from 'react'
import LigthButton from '../assets/website/light-mode-button.png'
import DarkButton from '../assets/website/dark-mode-button.png'
function DarkMode() {
const[theme , setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
React.useEffect(() => {
  localStorage.setItem('theme', theme)
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  } 
},[theme])
const element = document.documentElement;
// console.log(element)
  return (
    <div className='relative transition-all duration-300'>
        <img src={LigthButton} alt="" className= {`w-12  cursor-pointer ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} absolute right-0 z-10  transition-all duration-500`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <img 
         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={DarkButton} alt="" className= {`w-12 cursor-pointer transition-all duration-500`}
        />
    </div>
  )
}

export default DarkMode