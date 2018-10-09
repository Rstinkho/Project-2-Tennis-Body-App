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
          <a href="http://127.0.0.1:3000/profile">profile edit </a>
          <a href="">messages </a>
          <a href="">logout </a>
          </nav>




      <div class="col-25">
        <label htmlfor="user"><h2>Search for</h2></label>
      </div>

      <div class="col-75">
        <select id="lvl" name="player level">
          <option value="t1">Noobs</option>
          <option value="t2">Amateurs</option>
          <option value="t3">Pro</option>
        </select>
      </div>


        </body>
     </html>

           );
  }
}

module.exports = TestPage;
