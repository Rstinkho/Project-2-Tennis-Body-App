var React = require("react");

class pageProfile extends React.Component {
  render() {

    const postUrl = `/profile/${this.props.info[0].name}/?_method=PUT`;

    const bh = `${this.props.info[0].backhand}`
    const fh = `${this.props.info[0].forehand}`
    const end = `${this.props.info[0].endurance}`
    const sv = `${this.props.info[0].serve}`
    const spd = `${this.props.info[0].speed}`
    const vl = `${this.props.info[0].volley}`

    return (

      <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://127.0.0.1:3000/main.css" />
      </head>

        <body>

        <div>
            <h1>If you feel that your skill become better, feel free to edit</h1>

            <form action={postUrl} method="POST">

                <div className="lol">Backhand: </div><input type="text" placeholder={bh} name="backhand" required />
                <div className="lol">Forehand: </div><input type="text" placeholder={fh} name="forehand" required />
                <div className="lol">Endurance: </div><input type="text" placeholder={end} name="endurance" required />
                <div className="lol">Serve: </div><input type="text" placeholder={sv} name="serve" required />
                <div className="lol">Speed: </div><input type="text" placeholder={spd} name="speed" required />
                <div className="lol">Volley: </div><input type="text" placeholder={vl} name="volley"  required />

                <input type="submit"/>

            </form>

        </div>

        </body>

      </html>

    )
  }
};

module.exports = pageProfile;


