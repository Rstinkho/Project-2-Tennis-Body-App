var React = require("react");

class Messages extends React.Component {
  render() {
   console.log(this.props.info.one)

   const OutMsg = this.props.info.one.map((msg) => {
    return <div>{msg.message}</div>
   })

   const OutMsgName = this.props.info.one.map((msg) => {
    return <div><font color="navy">TO:</font> {msg.receiver}</div>
   })

   const IncMsg = this.props.info.two.map((msg) => {
    return <div>{msg.message} </div>
   })

    const IncMsgName = this.props.info.two.map((msg) => {
    return <div><font color="tomato">FROM:</font> {msg.name}</div>
   })
    return (
      <html>
      <head>
      <link rel="stylesheet" href="https://salty-ridge-12319.herokuapp.com/style.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Unlock" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Gloria+Hallelujah" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
      </head>

      <body>






          <header id="home-section">
              <div className="li-overlay">
                  <div className="home-inner container">
                  <div className="row">
                      <div className="col-lg-8 d-none d-lg-block">


                              <div className="d-flex">
                                  <div className="p-4 align-self-start">
                                  <h1>Messages:</h1>
                                  <div class="row">

                                    <div class="col-8-sm">
                                      {IncMsg}
                                      {OutMsg}
                                    </div>
                                    <div class="col-sm">
                                      {IncMsgName}
                                      {OutMsgName}
                                    </div>
                                  </div>
                                  </div>
                              </div>
                      </div>
                  </div>
                  </div>
              </div>
          </header>

          <div className="footer-copyright fixed-bottom bg-dark text-center text-white py-3">© 2018 Copyright:
            <strong> Tennis Buddy</strong>
          </div>

      </body>


     </html>
           );
  }
}

module.exports = Messages;