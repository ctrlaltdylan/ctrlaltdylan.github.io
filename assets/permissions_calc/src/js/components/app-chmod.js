var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions');

function permissions() {
	return AppStore.getPermissions()
}

var Chmod = React.createClass({
	getInitialState: function() {
		return {
			permissions : AppStore.getPermissions(),
			isRecursive : false
		}
	},

	componentWillMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	_onChange: function() {
		console.log(permissions());
		this.setState(permissions());
	},

	setRecusionFlag: function(e) {
		this.setState({
			isRecursive : e.target.checked
		});
	},

	isRecursive : function() {
		if(this.state.isRecursive) {
			return '-R';
		}
	},

	render: function() {
		

		return (
			<div>
				<div className="row">
					<div className="checkbox">
						<label>
							<input type="checkbox" checked={ this.state.isRecursive } onChange={this.setRecusionFlag} />
							Recursive? (Applies to all contents of this directory and all of it's children?)
						</label>
					</div>	
				</div>
				<code>
					sudo chmod { this.isRecursive() } { this.state.permissions.user.toString() + this.state.permissions.group.toString() + this.state.permissions.other.toString() } .
				</code>
			</div>
		);
	}
});

module.exports = Chmod;