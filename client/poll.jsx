var YourComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Basic Poll Site</title>
          <link rel="stylesheet" href="Ximenastyle.css" />
          <div className="wrapper">
            <header> What do you want to vote on <br /></header>
            <div className="poll-area">
              <input type="checkbox" name="poll" id="opt-1" />
              <input type="checkbox" name="poll" id="opt-2" />
              <input type="checkbox" name="poll" id="opt-3" />
              <label htmlFor="opt-1" className="opt-1">
                <div className="row">
                  <div className="column">
                    <span className="circle" />
                    <span className="text">Option-1</span>
                  </div>
                  <span className="percent">55%</span>
                </div>
                <div className="progress" id="pstyle1" style={{"--w":"55"}} />
              </label>
              <label htmlFor="opt-2" className="opt-2">
                <div className="row">
                  <div className="column">
                    <span className="circle" />
                    <span className="text">Option-2</span>
                  </div>
                  <span className="percent">40%</span>
                </div>
                <div className="progress" id="pstyle2" style={{"--w":"80"}} />
              </label>
              <label htmlFor="opt-3" className="opt-3">
                <div className="row">
                  <div className="column">
                    <span className="circle" />
                    <span className="text">Option-3</span>
                  </div>
                  <span className="percent">20%</span>
                </div>
                <div className="progress" id="pstyle3" style={{"--w":"20"}} />
              </label>
            </div>
          </div>
        </div>
      );
    }
  });