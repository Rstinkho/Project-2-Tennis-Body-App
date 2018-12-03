var React = require("react");

class RegPage extends React.Component {
  render() {
    return (
      <html>
      <head>
            <link rel="stylesheet" href="http://127.0.0.1:3000/style.css" />
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
                              <h1><font color="white">Registration</font></h1>

                                     <div className="card bg-info text-center card-form">
                                     <form className="user-form" method="POST" action="/register">
                                     <div className="card-body">

                                     <div className="form-group">
                                     <input className="form-control form-control-lg" name="name" type="text" placeholder="username" />
                                     </div>

                                     <div className="form-group">
                                     <input className="form-control form-control-lg" name="password" type="text" placeholder="password" />
                                     </div>

                                     <input name="submit" type="submit" value="submit" className="btn btn-outline-light btn-block" />
                                     </div>
                                     </form>


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

module.exports = RegPage;