import EmailItem from "../EmailItem"

const EmailList = ({emails}) => {
    const createEmailItem = (emails) => {
        emails.data.map(email => {
            return (
                <div className="row">
                    <EmailItem 
                        name={email.name} 
                        subject={email.subject} 
                        body={email.body}
                        date_created={email.date_created}
                        read={email.read}
                    />
                </div>
            )
            })
    }
    
    return (
        <div class="container w-25" onLoad={createEmailItem()}>
            
        </div>
    )
}

export default EmailList