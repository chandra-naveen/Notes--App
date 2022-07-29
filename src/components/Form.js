

function Form({title, setTitle, desc, setDesc, notes, setNotes}) {

    const inputHandler=(e)=>{
        if(e.target.id==="title"){
            setTitle(e.target.value);
        }else{
            setDesc(e.target.value);
        }   
    }
    const addNotesHandler=(e)=>{
        const date = new Date();
        e.preventDefault()
        if(title!==""){
            setNotes((note)=>{
                return(
                    [...note,{
                        title:title,
                        desc:desc,
                        date: date.toLocaleDateString(),
                        id:new Date().getTime()
                    }]
                    )
                    })
        }else{
            alert("Please Enter the Title");
        }
        
        setTitle("");
        setDesc("");
    }

    return (
        <>
            <div className="container my-3">
                <div className="row-justify-content-center">
                    <div className="col-md-10">
                        <form style={{border:"2px solid black", padding:"30px", bordeRadius:"10px"}}>
                            <div className="mb-3">
                                <label for="title" className="form-label">Your Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Enter Title" value={title} onChange={inputHandler}/>
                            </div>
                            <div className="mb-3">
                                <label for="notes" className="form-label">Description</label>
                                <textarea name="desc" id="desc" rows="3" className="form-control" placeholder="Enter Notes" value={desc} onChange={inputHandler}/>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>Add Notes</button>
                        </form>
                    </div>

                </div>

            </div>


        </>
    )
}


export default Form;