var React = require("react");

class Messages extends React.Component {
  render() {
   // console.log(this.props.info.two)

   const OutMsg = this.props.info.one.map((msg) => {
    return <div>{msg.message}</div>
   })

   const IncMsg = this.props.info.two.map((msg) => {
    return <div>{msg.message} FROM {msg.name}</div>
   })
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" />

      </head>
        <body>

        <h1>Incoming messages</h1>
        {IncMsg}
        <h1>Otcomming messages</h1>
        {OutMsg}




        </body>
     </html>
           );
  }
}

module.exports = Messages;