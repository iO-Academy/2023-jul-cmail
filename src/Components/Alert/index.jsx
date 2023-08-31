import './Alert.css'

const Alert = ({success, text, hideAlert}) => {

    setTimeout(() => {
        hideAlert(undefined)
    }, 5000)

    return (
        <div className={"alert col-6 col-md-4 col-lg-3 p-3 mx-3 sent-message position-fixed z-2 " + (success ? "alert-primary" : "alert-danger")} role="alert">
            {text} 
        </div>
    )
}

export default Alert