import EmailPreview from "../EmailPreview"
import './EmailList.css'

const EmailList = ({emails, setEmailId, emailId}) => {
    return (
        <div className={(emailId ? " d-none d-md-block" : '')}>
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
                    selected={emailId == email.id ? true : false}
                />
            )}
        </div>
    )
}

export default EmailList