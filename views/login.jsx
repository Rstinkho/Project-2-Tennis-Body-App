var React = require("react");

class LoginPage extends React.Component {
  render() {
    const linkForRegs = `/register`
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />
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
                            <h1>Welcome to <strong>Tennis Buddy</strong></h1>

                                <div className="d-flex">
                                    <div className="p-4 align-self-start">
                                        <i className="fas fa-check fa-2x"></i>
                                    </div>
                                        <div className="p-4 align-self-end">
                                        <h5>analize</h5>
                                        <p>go through your skills, and try to improve it day after day</p>
                                        </div>
                                </div>

                                <div className="d-flex">
                                    <div className="p-4 align-self-start">
                                         <i className="fas fa-check fa-2x"></i>
                                    </div>
                                        <div className="p-4 align-self-end">
                                        <h5>communicate</h5>
                                        <p>drop a messages to fellas for playing and training together</p>
                                        </div>
                                 </div>

                                <div className="d-flex">
                                    <div className="p-4 align-self-start">
                                        <i className="fas fa-check fa-2x"></i>
                                     </div>
                                        <div className="p-4 align-self-end">
                                        <h5>search</h5>
                                        <p>find tennis buddies with equal level of skills</p>
                                        </div>
                                </div>

                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="card bg-info text-center card-form">
                            <h2>Login to your account:</h2>
                            <div className="card-body">
                            <form className = "user-form" method="POST" action="/index">
                            <div className="form-group">
                            <input className="form-control form-control-lg" name="name" type="text" placeholder="username" />
                            </div>

                            <div className="form-group">
                            <input className="form-control form-control-lg" name="password" type="text" placeholder="password" />
                            </div>

                            <input name="submit" type="submit" value="submit" className="btn btn-outline-light btn-block" />
                            </form>
                            <p>Dont have an account yet? <a href={linkForRegs}>Register!</a></p>
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

module.exports = LoginPage;



