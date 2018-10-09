var React = require("react");

class TestPage extends React.Component {
  render() {
    return (
      <html>
        <body>
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

          </nav>
        </body>
     </html>
           );
  }
}

module.exports = TestPage;

