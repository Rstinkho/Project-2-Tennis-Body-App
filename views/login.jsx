var React = require("react");

class LoginPage extends React.Component {
  render() {
    const linkForRegs = `/register`
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Gloria+Hallelujah" rel="stylesheet" />
      </head>
        <body>
        <header>
        <h1>Welcome to Tennis Buddy</h1>
        <h2>You can finally use your condo's tennis court </h2>
        </header>
        <div id="loginElem" className="container my-container">

            <div className="row my-row" id="header">

                <div className="col my-col">
                    <h1>Search for tennis buddies</h1>
                </div>

                <div className="col  my-col" >

                   <h1>Communicate</h1>

                </div>

                    <div className="col  my-col" >

                   <h1>Analyze your skills</h1>

                </div>

            </div>
        </div>









          <nav className="loginMenu">
            <form className = "user-form" method="POST" action="/index">
            <div className = "user-attribute">
            <p width ="50px"> username:</p><input className="loginImput" name="name" type="text" />
            </div>

            <div className="user-attribute">
            <p width ="50px"> password:</p><input name="password" type="text" />
            </div>

            <input name="submit" type="submit" />
            </form>
            <p>Dont have an account yet? <a href={linkForRegs}>Register!</a></p>

          </nav>
        </body>
     </html>
           );
  }
}

module.exports = LoginPage;

/*

        <div className="row my-row" id="header">

                <div className="col my-col">
                    <h1>pic</h1>
                </div>

                <div className="col  my-col" >

                   <h1>pic</h1>

                </div>

                    <div className="col  my-col" >

                   <h1>pic</h1>

                </div>

        </div>
    </div>
*/




