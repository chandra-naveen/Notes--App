import { useState } from "react";
import EditModal from "./components/EditModal";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";


function App() {
  
const[title, setTitle]=useState("");
const[desc, setDesc]=useState("");
const[notes, setNotes]=useState(getNotesFromLs);
const[editId, setEditId]=useState("");
localStorage.setItem(notes, JSON.stringify(notes));

  return (
    <div className="App">
     <Navbar/>
     <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}/>
     <EditModal editId={editId} notes={notes} setNotes={setNotes}/>
     <div className="container my-3">
                <div className="row-justify-content-center">
                    <div className="col-md-10">
                      <h1 className="mb-3"> Yours Notes</h1>
     {
      notes.length===0? <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">No notes are available to display</h5>
      </div>
    </div>:notes.map((element)=>{
      return (
        <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} setEditId={setEditId} />
      )
     })
    }
     </div>
     </div>
     </div>
    </div>
  );
  function getNotesFromLs(){
    const note=JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note;
    }else{
      return [];
    }
  }
}

export default App;
