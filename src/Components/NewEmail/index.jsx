import "./NewEmail.css"

const NewEmail = ({handleInput}) => {



    // const isEmailValid =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // const validateEmail = () => {
    //     if(handleInput.value && handleInput.match(isEmailValid))
    // }
        // const  isValidEmail = () => {
        //     if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(handleInput) ) {
        //         alert("You have entered a invalid email")
        //     }
        // } 

    return (
        <div className="col-12 col-md-7 offset-md-2 offset-lg-1 col-lg-5 newEmail bg-white position-fixed border"> 
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
            <div className="mt-4 ms-2 d-flex justify-content-end">
                <button type="button" className="btn btn-secondary m-1">Cancel</button>
                <button type="button" className="btn btn-success m-1">Send</button>
            </div>
        </div>
    )
}

export default NewEmail        