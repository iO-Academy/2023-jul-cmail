import "./NewEmail.css"

const NewEmail = ({handleInput}) => {

    return (
    <div className="newEmail w-50 bg-white position-fixed border"> 
        <div className="mb-3">      
            <label htmlFor="to" className="form-label"></label>
            <input onInput={handleInput} type="email" className="form-control form-control-lg" placeholder="To"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="subject" className="form-label"></label>
            <input className="form-control form-control-lg" placeholder="Subject"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="emailContent" className="form-label"></label>
            <textarea className="form-control" rows="10"></textarea>
            </div>
        <div className="mt-4 ml-2 d-flex justify-content-end">
            <button type="button" className="btn btn-secondary">Cancel</button>
            <button type="button" className="btn btn-success">Send</button>
        </div>
    </div>
    )
}

export default NewEmail        