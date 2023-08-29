import EmailItem from "../EmailItem"

const EmailList = () => {
    return (
        <div class="container">
            <div className="row col-3">
                <EmailItem 
                name="Joe Bloggs" 
                subject="where are my keys?" 
                body="Mate I am locked out...." 
                date_created="2022-06-30 18:01:08"
                read="0"/>
            </div>
            <div className="row col-3">
                <EmailItem 
                name="Joe Bloggs" 
                subject="where are my keys?" 
                body="Mate I am locked out...." 
                date_created="2022-06-30 18:01:08"
                read="1"/>
            </div>
            <div className="row col-3">
                <EmailItem 
                name="Joe Bloggs" 
                subject="where are my keys?" 
                body="Mate I am locked out...." 
                date_created="2022-06-30 18:01:08"
                read="0"/>
            </div>
        </div>
    )
}

export default EmailList