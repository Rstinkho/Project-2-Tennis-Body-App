var React = require("react");


class profilePage extends React.Component {
  render() {

    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />
      </head>

        <body>

        <div>
        <h1>Tell about your tennis skills</h1>
        <form action="/profile" method="POST">
          <p>
            Backhand: <input type="text" name="backhand" />
          </p>
          <p>
            Forehand: <input type="text" name="forehand" />
          </p>
          <p>
            Endurance: <input type="text" name="endurance" />
          </p>
          <p>
            Serve: <input type="text" name="serve" />
          </p>
            <p>
            Speed: <input type="text" name="speed" />
          </p>
          <p>
            Volley: <input type="text" name="volley" />
          </p>
          <input type="submit"/>
        </form>
      </div>


        </body>
     </html>

           );
  }
}

module.exports = profilePage;