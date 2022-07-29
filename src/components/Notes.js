

function Notes({ element, notes, setNotes, setEditId }) {

  const deleteHandler = (id) => {
    const newNotes = notes.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    })
    alert("Remove notes ?")
    setNotes(newNotes);

  }

  const editHandler = (id) => {
    setEditId(id);
    notes.filter((elem) => {
      if (elem.id === id) {
        document.getElementById("edittitle").value = elem.title;
        document.getElementById("editdesc").value = elem.desc;
      }

    })
  }

  return (
    <>
      <div className="card mb-3">
        <div className="card-body" style={{ textTransfrom: "capitalise" }}>
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.desc}</p>
          <p>{element.date}</p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() =>
            editHandler(element.id)}>
            Edit
          </button>
          <button className="btn btn-danger mx-2" onClick={() =>
            deleteHandler(element.id)}> Delete </button>
        </div>
      </div>
    </>
  )
}

export default Notes;