var React = require("react");


class TestPage extends React.Component {
  render() {
  //  console.log(this.props.users)
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />
      </head>

        <body>

        <h1>Tennis Buddy App</h1>
          <nav><p>Hello {this.props.users[0].name}</p>
          <a href="">profile edit </a>
          <a href="">messages </a>
          <a href="">logout </a>
          </nav>




      <div class="col-25">
        <label htmlfor="country"><h2>Search for</h2></label>
      </div>

      <div class="col-75">
        <select id="country" name="country">
          <option value="australia">Noobs</option>
          <option value="canada">Amateurs</option>
          <option value="usa">Pro</option>
        </select>
      </div>


        </body>
     </html>

           );
  }
}

module.exports = TestPage;
