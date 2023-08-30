import EmailPreview from "../EmailPreview"
import './EmailList.css'

const EmailList = ({emails, setEmailId, emailId}) => {
    
    return (
        <div className={"col-12 col-md-4 col-lg-3 email-list border-end" + (emailId ? " d-none d-md-block" : '')}>
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