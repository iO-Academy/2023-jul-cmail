const OpenEmail = () => {

  // const [displayOpenEmail, setDisplayOpenEmail] = useState(false)
  
    return (
        <div className="px-5 py-5 col-md-7 col-lg-8 d-sm-none d-md-block d-lg-block">
            <div className="border border-start-0 border-end-0 border-top border-bottom py-5"> 
              <div className="d-flex justify-content-between">
                <h3>Sender's name</h3><span>Date goes here</span>
              </div>
                <p>someonesname@gmail.com</p>
                <h2>Email subject</h2>
                <p>Dear user, </p>
                <p>Body of email goes here. blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p> 
              </div> 
        </div>
    )
}
export default OpenEmail