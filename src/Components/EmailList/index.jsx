import EmailPreview from "../EmailPreview"
import './EmailList.css'

const EmailList = ({emails, setEmailId}) => {
    
    return (
        <div className="col-3 col-xs-3 col-sm-3 col-md-4 col-lg-3 email-list">
            {emails.map(email => 
                    <EmailPreview
                        setEmailId={setEmailId}
                        id={email.id}
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