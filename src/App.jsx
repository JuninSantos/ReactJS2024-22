
import './App.css'
import { Button } from './components/Button.jsx'

function exibirMensagem(){
  alert(' Parabéns, agora você é Corinthiano!')
}

function App() {
  

  return (
    <> 
    {/* fragment*/}
    <Button texto='Ver meu Time' mensagem={exibirMensagem}/>
    </>
  )
}

export default App
