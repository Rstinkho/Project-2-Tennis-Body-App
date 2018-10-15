var React = require("react");

class Messages extends React.Component {
  render() {
   console.log(this.props.info.one)

   const OutMsg = this.props.info.one.map((msg) => {
    return <div>*{msg.message}</div>
   })

   const OutMsgName = this.props.info.one.map((msg) => {
    return <div>TO: {msg.receiver}</div>
   })

   const IncMsg = this.props.info.two.map((msg) => {
    return <div>*{msg.message} </div>
   })

    const IncMsgName = this.props.info.two.map((msg) => {
    return <div>FROM: {msg.name}</div>
   })
    return (
      <html>
      <head>
      <link rel="stylesheet" href="http://127.0.0.1:3000/main.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />

      </head>
        <body>

        <div class="container">
        <h1>Incoming messages</h1>
  <div class="row">

    <div class="col-8-sm">
      {IncMsg}
    </div>
    <div class="col-sm">
      {IncMsgName}
    </div>
  </div>
</div>
<div class="container">
<h1>Your messages </h1>
  <div class="row">

    <div class="col-8-sm">
          {OutMsg}
    </div>
    <div class="col-sm">
      {OutMsgName}
    </div>
</div>
  </div>










        </body>
     </html>
           );
  }
}

module.exports = Messages;