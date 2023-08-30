import './OpenEmail.css'
const OpenEmail = ({emailId}) => {

  // const [displayOpenEmail, setDisplayOpenEmail] = useState(false)
  
    return (
        <> 
          <div className="p-md-5 pt-md-3 p-3 col-12 col-md-7 col-lg-8 openEmail">
            <button className="border rounded btn btn-secondary border-black text-center" type="button">Close</button>  
            <div className="border border-start-0 border-end-0 border-top border-bottom mt-3 py-5"> 
              <div className="d-flex justify-content-between">
                <h3>Sender's name ({"email.name"})</h3><span>({"email.date_created"}) Date goes here</span>
              </div>
                <p>someonesname@gmail.com ({"email.email"})</p>
                <h2>Email subject ({"email.subject"})</h2>
                <p>Dear user, ({"email.body"})</p>
                <p>Body of email goes here. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ({"email.body"})</p> 
              </div> 
          </div>
        </>
    )
}
export default OpenEmail