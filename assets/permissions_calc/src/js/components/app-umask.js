var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions');

function permissions() {
	return AppStore.getPermissions()
}

var Umask = React.createClass({
	getInitialState: function() {
		return {
			permissions : AppStore.getPermissions(),
		}
	},

	componentWillMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	calculateUmask: function() {
		var permissionsString = '';

		for (var permission in this.state.permissions) {
			console.log(permission);
	    	permissionsString += this.state.permissions[permission];
		}

		var umask = 777 - parseInt(permissionsString);
		var umask = umask.toString();

		if(umask.length < 3) {
			do {
				umask = '0' + umask;	
			} while (umask.length < 3);
		}
		
		return umask;
		
	},

	_onChange: function() {
		this.setState(permissions());
	},

	render: function() {
		return (
			<div>
				<code>
					sudo umask { this.calculateUmask() } .
				</code>
			</div>
		);
	}
});

module.exports = Umask;