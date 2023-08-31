import './Alert.css'

const Alert = ({success, text, hideAlert}) => {

    setTimeout(() => {
        hideAlert(undefined)
    }, 5000)

    return (
        <div class={"alert sent-message position-fixed z-2 " + (success ? "alert-primary" : "alert-danger")} role="alert">
            {text} 
        </div>
    )
}

export default Alert