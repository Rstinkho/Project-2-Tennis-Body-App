var React = require("react");

class LoginPage extends React.Component {
  render() {
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />
      </head>
        <body className ="loginpage">

        <h1>Welcome to Tennis Buddy</h1>
        <h2>An aplication, with which you can finally find out where is the tennis courts in your condo </h2>
        <div className="info">
        <div className="desc"><p>info1</p></div>
        <div className="desc"><p></p>info2</div>
        <div className="desc"><p></p>info3</div>
        </div>
          <nav>
            <form className="user-form" method="POST" action="/login">
            <div className="user-attribute">
            name<input name="name" type="text" />
            </div>

            <div className="user-attribute">
              password:<input name="password" type="text" />
            </div>

            <input name="submit" type="submit" />
            </form>
            <p>Dont have an account yet? <a href="http://127.0.0.1:3000/register">Register!</a></p>

          </nav>
        </body>
     </html>
           );
  }
}

module.exports = LoginPage;

