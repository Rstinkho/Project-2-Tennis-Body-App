var React = require("react");

class RegPage extends React.Component {
  render() {
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />
      </head>
        <body>

        <h1>Registration</h1>

          <nav>
            <form className="user-form" method="POST" action="/register">
            <div className = "user-attribute">
            username: <input className="loginImput" name="name" type="text" />
            </div>

            <div className="user-attribute">
            password: <input name="password" type="text" />
            </div>
            <input name="submit" type="submit" />
            </form>


          </nav>

        </body>
     </html>
           );
  }
}

module.exports = RegPage;