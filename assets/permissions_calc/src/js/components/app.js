var React = require('react');
var Permissions = require('./app-permissions');
var Chmod = require('./app-chmod');
var Umask = require('./app-umask');

var App = React.createClass({
  render:function(){
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h1 className="panel-title">
                What Permissions do you want?
              </h1>
            </div>
              <Permissions />
          </div>
        </div>
          <div className="row">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">
                  chmod 
                </h3>
              </div>
              <div className="panel-body">

              </div>
                <div className="well">
                  <Chmod />
                </div>
            </div>

          </div>
          <div className="row">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">umask</h3>
              </div>
              <div className="panel-body">

              </div>
              <div className="well">
                <Umask />
              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = App;