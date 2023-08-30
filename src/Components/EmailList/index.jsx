import EmailPreview from "../EmailPreview"
import './EmailList.css'

const EmailList = ({emails}) => {
    
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-3 email-list">
            {emails.map(email => 
                <EmailPreview
                    key={email.id} 
                    name={email.name} 
                    subject={email.subject} 
                    body={email.body}
                    date_created={email.date_created}
                    read={email.read}
                />
            )}
        </div>
    )
}

export default EmailList