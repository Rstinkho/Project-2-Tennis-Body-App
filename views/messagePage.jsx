var React = require("react");
// here comes the question: spend 2 hours brain rough sex with implementing PUT method
// ok it's work but why the hell we need this if every action basically can be implemented by simple GET-POST combinations?

class MessagePage extends React.Component {
  render() {
    const messageUrl = `/message/${this.props.info.name}`;
    return (

    <html>

            <head>
            <link rel="stylesheet" href="style.css" />
            </head>

            <body>

            <h1>Send your message to {this.props.info.name} </h1>

                <form className="user-form" method="POST" action={messageUrl}>
                    <h3> TO {this.props.info.name} </h3>

                    <div className="user-attribute">
                    your message:<input name="message" type="text" />
                    </div>

                    <input name="submit" type="submit" />
                </form>

            </body>
    </html>

     )
  }
};

module.exports = MessagePage;