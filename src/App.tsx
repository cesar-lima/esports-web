interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}


function App() {
  return (
    <div>
      <Button title="oi"/>
      <Button title="tchau"/>
      <Button title="enviar"/>
      <Button title="reiniciar"/>
    </div>
  )
}

export default App
