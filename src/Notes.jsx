import { useState } from "react";

const Notes = () => {
const [notes,setNotes] = useState([{title:"englsh",content:"dddd"}])
const [title,setTitle] = useState("")
const [note,setNote] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        setNotes([...notes,{title,content :note}])
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label style={{padding:"10px", margin:"5px"}}>Title</label>
        <input type="text" value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }}/><br></br>
        <label style={{padding:"10px", margin:"5px"}} >Content</label>
        <input type="text" value={note} onChange={(e) =>{
            setNote(e.target.value)
        }} /><br></br>
        <input type="submit"  value="add"/>
    </form>
    <ul>
        {notes.map((note,index)=>{
            const { title, content} = note;
            return <li key={index}>{`${title} ${content}`}</li>
        })}
    </ul>
    </>
  )
}

export default Notes