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
        <link rel="stylesheet" href="style.css" />
      </head>

        <body>

        <div>
            <h1>If you feel that your skill become better, feel free to edit</h1>

            <form action={postUrl} method="POST">

                <p>Backhand: <input type="text" placeholder={bh} name="backhand" required /></p>
                <p>Forehand: <input type="text" placeholder={fh} name="forehand" required /></p>
                <p>Endurance: <input type="text" placeholder={end} name="endurance" required /></p>
                <p>Serve: <input type="text" placeholder={sv} name="serve" required /></p>
                <p>Speed: <input type="text" placeholder={spd} name="speed" required /></p>
                <p>Volley: <input type="text" placeholder={vl} name="volley"  required /></p>

                <input type="submit"/>

            </form>

        </div>

        </body>

      </html>

    )
  }
};

module.exports = pageProfile;


