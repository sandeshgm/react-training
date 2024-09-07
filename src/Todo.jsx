import  {  useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState(["js","php","css"]);

    function handleSubmit (e){
        e.preventDefault();
        setTodos([...todos, e.target[0].value])
    }
    function handleDelete(index){
        const newTOdos = todos.filter((todo,i) => {
            return i !==index;
        })
        setTodos(newTOdos);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="add" />
    </form>
    <ul>
        {todos.map((todo,index) => {
            return <li key={index}>{todo}
            <button onClick={()=>{
                handleDelete(index)
            }}>delete</button> </li>
        })}
    </ul>
    </>
  )
}

export default Todo