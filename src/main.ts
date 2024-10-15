import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    a
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
