import TodoForm from "./components/TodoForm"
import TodosLists from "./components/TodosLists"

function App() {

  return (
    <div className="App bg-slate-800 h-screen w-100 py-8 px-3 sm:px-10 flex flex-col gap-7 items-center justify-start">
      <TodoForm />
      <TodosLists />
    </div>
  )
}

export default App
