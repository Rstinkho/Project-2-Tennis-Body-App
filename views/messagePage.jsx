var React = require("react");

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
           );
  }
}

module.exports = MessagePage;