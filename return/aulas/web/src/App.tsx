interface ButtonProps {
  text?: string;
}

function Button(Props : ButtonProps) {
  return <button className="bg-[#000]  text-slate-300 px-4 h-10 rounded" >{Props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text='Um' />
      <Button text='Dois' />
      <Button />
    </div>
  )
}

export default App