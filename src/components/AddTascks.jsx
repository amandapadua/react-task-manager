import { useState } from "react";
import Input from "./Input"; // ← importar o componente

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!title) return
    onAddTaskSubmit(title, description)
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Digite o titulo da tarefa"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button type="submit" className="px-4 py-2 bg-slate-500 text-white rounded">
        Adicionar
      </button>
    </form>
  )
}

export default AddTask;