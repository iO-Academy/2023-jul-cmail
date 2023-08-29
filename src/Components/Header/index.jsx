import {useEffect, useState} from "react"


const Header = ({inboxCounter}) => {


        return (
        <div className="badge text-bg-warning">{inboxCounter}</div>

        )

}

export default Header