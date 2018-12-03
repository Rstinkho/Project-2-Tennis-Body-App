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
        <head>
              <link rel="stylesheet" href="https://app-tennis-buddy.herokuapp.com/style.css" />
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
              <link href="https://fonts.googleapis.com/css?family=Unlock" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Gloria+Hallelujah" rel="stylesheet" />
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
              </head>
      </head>

        <body>
        <header id="home-section">
            <div className="li-overlay">
                <div className="home-inner container">
                <div className="row">
                    <div className="col-lg-8 d-none d-lg-block">


                            <div className="d-flex">
                                <div className="p-4 align-self-start">
                                <h1><font color="white">If you feel that your skill become better, edit your skills:</font></h1>
                                <form action={postUrl} method="POST">

                                    <div className="lol">Backhand: </div><input type="text" placeholder={bh} name="backhand" required />
                                    <div className="lol">Forehand: </div><input type="text" placeholder={fh} name="forehand" required />
                                    <div className="lol">Endurance: </div><input type="text" placeholder={end} name="endurance" required />
                                    <div className="lol">Serve: </div><input type="text" placeholder={sv} name="serve" required />
                                    <div className="lol">Speed: </div><input type="text" placeholder={spd} name="speed" required />
                                    <div className="lol">Volley: </div><input type="text" placeholder={vl} name="volley"  required />

                                    <input type="submit" className="btn btn-secondary btn-sm m-2"/>

                                </form>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </header>

        <div className="footer-copyright fixed-bottom bg-dark text-center text-white py-3">© 2018 Copyright:
          <strong> Tennis Buddy</strong>
        </div>


        </body>

      </html>

    )
  }
};

module.exports = pageProfile;


