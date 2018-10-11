var React = require("react");


class TestPage extends React.Component {
  render() {
    var x = this.props.info;
    var z = 0;
    var y = x.forehand + x.backhand + x.serve + x.speed + x.endurance + x.volley;
    if (y<30) {
        var z = 'your skills are bad, most likely you are noob'
    } else {
        var z = 'your are cool, pro bro'
    }

    //console.log(x.forehand + x.backhand + x.serve + x.speed + x.endurance + x.volley);
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />
      </head>

        <body>

        <h1>Tennis Buddy App</h1>
          <nav><p>Hello {this.props.info.name}</p>
          <a href="http://127.0.0.1:3000/profile">profile edit </a>
          <a href="">messages </a>
          <a href="http://127.0.0.1:3000/logout"> logout </a>
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
<h1>{z}</h1>
      <ul>
      <li>forehand: {this.props.info.forehand} </li>
      <li>backhand: {this.props.info.backhand} </li>
      <li>volley: {this.props.info.volley} </li>
      <li>serve: {this.props.info.serve} </li>
      <li>speed: {this.props.info.speed} </li>
      <li>endurance: {this.props.info.endurance} </li>
      </ul>

        </body>

     </html>

           );
  }
}

module.exports = TestPage;
