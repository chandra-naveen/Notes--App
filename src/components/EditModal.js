import React from "react";


function EditModal({editId, notes, setNotes}) {

const updateHandaler=()=>{
 const updateNotes= notes.map((elem)=>{
    if(editId===elem.id){
      return ({...elem,title:document.getElementById("edittitle").value,
      desc:document.getElementById("editdesc").value
      })
    }else{
      return elem;
    }
  })
  setNotes(updateNotes);
}

    return (
        <>
    


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
                            <div className="mb-3">
                                <label for="title" className="form-label">Your Title</label>
                                <input type="text" className="form-control" id="edittitle" placeholder="Enter Title" />
                            </div>
                            <div className="mb-3">
                                <label for="notes" className="form-label">Description</label>
                                <textarea name="desc" id="editdesc" rows="3" className="form-control" placeholder="Enter Notes" />
                            </div>
                        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={updateHandaler} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
       
}

export default EditModal;