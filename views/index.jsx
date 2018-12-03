var React = require("react");


class TestPage extends React.Component {


  render() {
    console.log(this.props.info.two.length)
    const urlForEdit = `profile/:${this.props.info.one[0].name}/edit`;
    const urlForMesseges = `index/messages`;
    const urlForLogout = `/logout`;

    const people = this.props.info.two.map((person) => {
    const messageUrl = `/message/:${person.name}`;

        return (<form action={messageUrl} method="GET">
                <div className="row">
                    <div className="col col-6">
                        <i className="fas fa-signal"> </i> {person.name}
                    </div>

                    <div className="col col-6">
                        <button type="submit" value ="message">
                            <i  className="far fa-comments"> </i>
                        </button>
                    </div>

                </div>
                </form>)
            })

    var arrayPro = [];
    for ( var i = 0; i < this.props.info.two.length; i++ ) {
        var x = this.props.info.two
        if (x[i].skilllevel === "pro") {
            arrayPro.push(x[i].name)
        }
    };
    const pro = arrayPro.map((pros) => {
        return <li>{pros}</li>
    })

    var arrayNew = [];
    for ( var i = 0; i < this.props.info.two.length; i++ ) {
        var x = this.props.info.two
        if (x[i].skilllevel === "noob") {
            arrayNew.push(x[i].name)
        }
    };
    const nb = arrayNew.map((newbie) => {
        return <li>{newbie}</li>
    })

    var arrayAma = [];
    for ( var i = 0; i < this.props.info.two.length; i++ ) {
        var x = this.props.info.two
        if (x[i].skilllevel === "ama") {
            arrayAma.push(x[i].name)
        }
    };
    console.log("pro:", arrayPro)
    console.log("newbie:", arrayNew)
    console.log("ama:", arrayAma)

    var oneStar = <img src="/images/star.jpg" />
    var twoStar = <img src="/images/twostars.jpg" />
    var threeStar = <img src="/images/threestars.jpg" />


    // identifying the player level
    var x = this.props.info.one[0];
    var z = 0;
    var y = x.forehand + x.backhand + x.serve + x.speed + x.endurance + x.volley;
    if (y < 20 ) {
        var z = 'your skills are bad, most likely you are newbie'
    } else if (y > 20 && y < 30) {
        var z ='your skills are good, but still have a lot to learn'
    } else if (y > 30 && y < 45) {
        var z = 'your skills are really good, keep it up'
    }else {
        var z = 'you are an expert, try tournaments maybe?'
    };

    //giving stars to skill level

    var starForForhand;
    var starForBackhand;
    var starForServe;
    var starForSpeed;
    var starForEndurance;
    var starForVolley;
    //suggested court type
    var sct;
    //exersizes
    var exr;
    //techniques
    var tech;

    var searchShit = {
        noobs: `/search/:noobs`,
        amateurs: `/search/:amateurs`,
        pro: `/search/:pro`
    };

    if (x.forehand <= 4) {starForForhand = oneStar, tech = 'find personal trainer', sct = 'court type: clay'} else if (x.forehand >4 && x.forehand <7) {starForForhand = twoStar, exr ='tennis wall practice'} else {starForForhand = threeStar, tech ='concentrate on your best skills', sct = 'court type: your favorite'};
    if (x.backhand <= 4) {starForBackhand = oneStar, tech = 'find personal trainer'} else if (x.backhand >4 && x.backhand <7) {starForBackhand = twoStar} else {starForBackhand = threeStar, exr = 'explosive exersizes'};
    if (x.serve <= 4) {starForServe = oneStar, tech = 'find personal trainer'} else if (x.serve >4 && x.serve <7) {starForServe = twoStar, sct = 'court type: grass'} else {starForServe = threeStar, tech ='concentrate on your best skills', sct = 'court type: your favorite'};
    if (x.speed <= 4) {starForSpeed = oneStar, exr = 'work on cardio', sct = 'court type: clay'} else if (x.speed >4 && x.speed <7) {starForSpeed = twoStar, sct = 'court type: grass' } else {starForSpeed = threeStar, tech ='concentrate on your best skills'};
    if (x.endurance <= 4) {starForEndurance = oneStar, exr = 'work on cardio'} else if (x.endurance >4 && x.endurance <7) {starForEndurance = twoStar, sct = 'court type: clay' } else {starForEndurance = threeStar, sct = 'court type: your favorite'};
    if (x.volley <= 4) {starForVolley = oneStar, exr = 'coordination exersizes', sct = 'court type: clay'} else if (x.volley >4 && x.volley <7) {starForVolley = twoStar, exr = 'explosive exersizes'} else {starForVolley = threeStar};






    return (
      <html>
      <head>

        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Gloria+Hallelujah" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Unlock" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />

      </head>
    <body>
        <div className="container-fluid">

            <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <a href="/login" className="navbar-brand"><h1>Tennis Buddy</h1></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href ={urlForEdit} className="nav-link"> |profile </a>
                        </li>
                        <li className="nav-item">
                            <a href={urlForMesseges} className="nav-link"> |messages  </a>
                        </li>
                        <li className="nav-item">
                            <a href={urlForLogout} className="nav-link"> |logout  </a>
                        </li>
                    </ul>
                </div>
            </div>



            <div id="skills" className="row my-row">
                <div className="col-6 my-col">
                    <div className="row my-row" id="attributes">
                    <h1><font color="tomato">Status:</font></h1>
                    <br/>
                    <h2><font color="brown">{z}</font></h2>


                    <div className="col my-col mt-5">
                    <ul>
                      <li><p>forehand: {this.props.info.one[0].forehand} {starForForhand} </p> </li>
                      <li><p>backhand: {this.props.info.one[0].backhand} {starForBackhand}</p></li>
                      <li><p>volley: {this.props.info.one[0].volley} {starForVolley} </p></li>
                      <li><p>serve: {this.props.info.one[0].serve} {starForServe} </p></li>
                      <li><p>speed: {this.props.info.one[0].speed} {starForSpeed} </p></li>
                      <li><p>endurance: {this.props.info.one[0].endurance} {starForEndurance}</p> </li>
                    </ul>
                    </div>
                    <div id="pic" className="col my-col">

                    </div>

                    </div>


                </div>

                    <div id ="reccs" className="col my-col">

                        <h1><strong><font color="navy">Recomendations</font></strong></h1>
                        <ul>
                            <li>{sct}</li>
                            <li>{exr}</li>
                            <li>{tech}</li>
                        </ul>

                    </div>

                    <div id ="ppl" className="col my-col">

                          <div className="usersList">
                            <h1>Players <font color="lightgreen">Online</font></h1>
                            <h3>{people}</h3>
                          </div>

                    </div>
            </div>


            <footer className="page-footer fixed-bottom">

                <div className="container">

                  <div className="row text-center">

                    <div className="col-md-6 text-right">
                        <h2>I want to search for:</h2>
                    </div>


                    <div className="col-md-6 text-left">

                      <div id="searchEngine" className="container-fluid">
                          <div id="searcheEngine" >
                            <button id="b" type="button" className="btn btn-secondary m-1" data-toggle="modal" data-target="#newbieSearch">Newbies</button>
                            <button id="b" type="button" className="btn btn-secondary m-1" data-toggle="modal" data-target="#amaSearch">Amateurs</button>
                            <button id="b" type="button" className="btn btn-secondary m-1" data-toggle="modal" data-target="#proSearch">Pro</button>
                          </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="footer-copyright bg-dark text-center text-white py-3">© 2018 Copyright:
                  <strong> Tennis Buddy</strong>
                </div>


              </footer>
    </div>

    <div className="modal fade" id="newbieSearch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">List of newbies</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            {nb}
            </div>
          </div>
        </div>
       </div>

    <div className="modal fade" id="amaSearch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">List of amateurs</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <li>
            There is no amateurs on this website because creator didn't code skillset for them, doing other stuff, sorry folks
            </li>
            </div>
          </div>
        </div>
       </div>

    <div className="modal fade" id="proSearch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">List of proffesionals</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            {pro}
            </div>
          </div>
        </div>
       </div>




       <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
         crossorigin="anonymous"></script>
         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
           crossorigin="anonymous"></script>

    </body>

    </html>

    )
  }
};

module.exports = TestPage;
