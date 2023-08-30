import EmailItem from "../EmailItem"

const EmailList = () => {
    return (
        <div className="container w-25">
            <div className="row">
                <EmailItem 
                    name="Joe Bloggs" 
                    subject="where are my keys?" 
                    body="Mate I am locked out...." 
                    date_created="2022-06-30 18:01:08"
                    read="0"
                />
            </div>
            <div className="row">
                <EmailItem 
                    name="Joe Bloggs" 
                    subject="where are my keys?" 
                    body="Mate I am locked out...." 
                    date_created="2022-06-30 18:01:08"
                    read="1"
                />
            </div>
            <div className="row">
                <EmailItem 
                    name="Joe Bloggs" 
                    subject="where are my keys?" 
                    body="Mate I am locked out...." 
                    date_created="2022-06-30 18:01:08"
                    read="0"
                />
            </div>
        </div>
    )
}

export default EmailList