

const Button = ({onClick, text}) => {
    return (
        <button className="border rounded btn btn-secondary border-black text-center  d-sm-block d-md-none" onClick={onClick}>{text}</button> 
    )
}

export default Button