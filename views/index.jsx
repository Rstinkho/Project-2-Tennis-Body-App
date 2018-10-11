var React = require("react");


class TestPage extends React.Component {
  render() {
    const people = this.props.info.two.map((person) => {
        return (<li>{person.name} <button name="message">messsage</button></li>)
    })
    console.log(this.props.info.two)
    var x = this.props.info.one[0];
    var z = 0;
    var y = x.forehand + x.backhand + x.serve + x.speed + x.endurance + x.volley;
    if (y<30) {
        var z = 'your skills are bad, most likely you are noob'
    } else {
        var z = 'your are cool, pro bro'
    };

    //console.log(x.forehand + x.backhand + x.serve + x.speed + x.endurance + x.volley);
    return (
      <html>
      <head>

      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />

      </head>
        <body>
        <div className="container my-container">
            <div className="row my-row" id="header">
                <div className="col my-col">
                    <h1>Tennis Buddy App</h1>

                </div>

                <div className="col text-right my-col" >
                    <nav className="navbar navbar-light bg-light">
                        <p className="navbar-brand">Hello {this.props.info.one[0].name}</p>

                            <a href="http://127.0.0.1:3000/profile"> | profile edit </a>
                            <a href=""> | messages  </a>
                            <a href="http://127.0.0.1:3000/logout"> | logout  </a>

                    </nav>
                </div>

            </div>

             <div className="row my-row" id="searcheEngine">
             <form className="selectLevel">

             <p>search for</p>
                <select id="lvl" name="player level">
                      <option value="t1">Noobs</option>
                      <option value="t2">Amateurs</option>
                      <option value="t3">Pro</option>
                     </select>
            <button>GO!</button>

            </form>
            </div>

            <div className="row my-row">
                <div className="col-7 my-col">
                    <h2>{z}</h2>
                    <ul>
                      <li>forehand: {this.props.info.one[0].forehand} </li>
                      <li>backhand: {this.props.info.one[0].backhand} </li>
                      <li>volley: {this.props.info.one[0].volley} </li>
                      <li>serve: {this.props.info.one[0].serve} </li>
                      <li>speed: {this.props.info.one[0].speed} </li>
                      <li>endurance: {this.props.info.one[0].endurance} </li>
                      </ul>
                </div>

                <div className="col my-col">
                          <div className="usersList">
                          <h3>{people}</h3>
                          </div>
                </div>
            </div>
        </div>


        </body>

     </html>

           );
  }
}

module.exports = TestPage;
