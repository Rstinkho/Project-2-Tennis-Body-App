var React = require("react");


class profilePage extends React.Component {
  render() {

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
                                        <h1><font color="white">Tell about your tennis skills</font></h1>
                                               <form action="/profile" method="POST">

                                               <div className="lol">Backhand: </div><input type="text" name="backhand" required />
                                               <div className="lol">Forehand: </div><input type="text" name="forehand" required />
                                               <div className="lol">Endurance: </div><input type="text" name="endurance" required />
                                               <div className="lol">Serve: </div><input type="text" name="serve" required />
                                               <div className="lol">Speed: </div><input type="text" name="speed" required />
                                               <div className="lol">Volley: </div><input type="text" name="volley"  required />

                                            <input type="submit" className="btn btn-secondary btn-sm m-2"/>

                                        </form>
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

module.exports = profilePage;