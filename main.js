import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './style.css'
import './index.html'


document.querySelector('#app').innerHTML = `
  
`

setupCounter(document.querySelector('#counter'))
