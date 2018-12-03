var React = require("react");
// here comes the question: spend 2 hours brain rough sex with implementing PUT method
// ok it's work but why the hell we need this if every action basically can be implemented by simple GET-POST combinations?

class MessagePage extends React.Component {
  render() {
    const messageUrl = `/message/${this.props.info.name}`;

    return (

    <html>

            <head>
            <link rel="stylesheet" href="http://127.0.0.1:3000/style.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Unlock" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Gloria+Hallelujah" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
            </head>

            <body>
                <div className="container-fluid">



                </div>

                <header id="home-section">
                    <div className="li-overlay">
                        <div className="home-inner container">
                        <div className="row">
                            <div className="col-lg-8 d-none d-lg-block">


                                    <div className="d-flex">
                                        <div className="p-4 align-self-start">
                                        <h1>Send your message</h1>
                                            <form className="user-form" method="POST" action={messageUrl}>
                                                <h3> TO {this.props.info.name.substring(1)} </h3>

                                                <div className="user-attribute">
                                                <textarea id="lol" name="message" type="text" rows="5" placeholder="your message" />
                                                </div>

                                                <input name="submit" type="submit" />
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

module.exports = MessagePage;