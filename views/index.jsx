var React = require("react");


class TestPage extends React.Component {

  render() {
    const urlForEdit = `profile/:${this.props.info.one[0].name}/edit`

    const people = this.props.info.two.map((person) => {
    const messageUrl = `/message/:${person.name}`;

        //console.log(urlForEdit);

        return (<form action={messageUrl} method="GET">
            {person.name}  <input type="submit" value ="message"/>
                </form>)
    })



    var oneStar = <img src="/images/star.jpg" />
    var twoStar = <img src="/images/twostars.jpg" />
    var threeStar = <img src="/images/threestars.jpg" />


    // identifying the player level
    var x = this.props.info.one[0];
    var z = 0;
    var y = x.forehand + x.backhand + x.serve + x.speed + x.endurance + x.volley;
    if (y < 20 ) {
        var z = 'your skills are bad, most likely you are noob'
    } else if (y > 20 && y < 30) {
        var z ='Your skills is ok, but still have a lot to learn'
    } else if (y > 30 && y < 45) {
        var z = 'Your skills are really good, keep it up'
    }else {
        var z = 'your are cool, pro bro'
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

    if (x.forehand <= 4) {starForForhand = oneStar, tech = 'find personal trainer'} else if (x.forehand >4 && x.forehand <7) {starForForhand = twoStar} else {starForForhand = threeStar, tech ='concentrate on your best skills'};
    if (x.backhand <= 4) {starForBackhand = oneStar, tech = 'find personal trainer'} else if (x.backhand >4 && x.backhand <7) {starForBackhand = twoStar} else {starForBackhand = threeStar, exr = 'explosive exersies'};
    if (x.serve <= 4) {starForServe = oneStar, tech = 'find personal trainer'} else if (x.serve >4 && x.serve <7) {starForServe = twoStar, sct = 'court type: grass'} else {starForServe = threeStar, tech ='concentrate on your best skills'};
    if (x.speed <= 4) {starForSpeed = oneStar, exr = 'work on cardio'} else if (x.speed >4 && x.speed <7) {starForSpeed = twoStar, sct = 'court type: grass' } else {starForSpeed = threeStar, tech ='concentrate on your best skills'};
    if (x.endurance <= 4) {starForEndurance = oneStar, exr = 'work on cardio'} else if (x.endurance >4 && x.endurance <7) {starForEndurance = twoStar, sct = 'court type: clay' } else {starForEndurance = threeStar};
    if (x.volley <= 4) {starForVolley = oneStar} else if (x.volley >4 && x.volley <7) {starForVolley = twoStar, exr = 'explosive exersies'} else {starForVolley = threeStar};






    return (
      <html>
      <head>

      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Gloria+Hallelujah" rel="stylesheet" />

      </head>
    <body id="indexBody">
        <div className="container my-container">

            <div className="row my-row" id="header">

                <div id="colName" className="col my-col">
                    <h1>Tennis Buddy App</h1>
                </div>

                <div className="col text-right my-col" >

                    <nav className="navbar navbar-light bg-darkdark">
                        <p className="navbar-brand">Hello {this.props.info.one[0].name}</p>
                            <a href ={urlForEdit}> |profile </a>
                            <a href="http://127.0.0.1:3000/index/messages"> | messages  </a>
                            <a href="http://127.0.0.1:3000/logout"> | logout  </a>
                    </nav>

                </div>

            </div>



             <div className="row my-row" id="searcheEngine" >
<select name="menu1" id="menu1">
<option value="http://www.espn.com">Newbies</option>
<option value="http://www.cnn.com">Amateurs</option>
<option value="http://www.abcnews.com">Pros</option>
<option value="http://www.cbsnews.com">ByName</option>
</select>
            </div>

            <div id="skills" className="row my-row">
                <div className="col-6 my-col">
                    <h2>{z}</h2>

                    <ul>
                      <li><p>forehand: {this.props.info.one[0].forehand} {starForForhand} </p> </li>
                      <li><p>backhand: {this.props.info.one[0].backhand} {starForBackhand}</p></li>
                      <li><p>volley: {this.props.info.one[0].volley} {starForVolley} </p></li>
                      <li><p>serve: {this.props.info.one[0].serve} {starForServe} </p></li>
                      <li><p>speed: {this.props.info.one[0].speed} {starForSpeed} </p></li>
                      <li><p>endurance: {this.props.info.one[0].endurance} {starForEndurance}</p> </li>
                    </ul>

                </div>

                    <div id ="peeps" className="col my-col">

                        <h2>Recomendations</h2>
                        <ul>
                            <li>{sct}</li>
                            <li>{exr}</li>
                            <li>{tech}</li>
                        </ul>

                    </div>

                    <div id ="peeps" className="col my-col">

                          <div className="usersList">
                            <h1>Players</h1>
                            <h3>{people}</h3>
                          </div>

                    </div>
            </div>
        </div>
        <script src = "script.js"></script>
    </body>

    </html>

    )
  }
};

module.exports = TestPage;
