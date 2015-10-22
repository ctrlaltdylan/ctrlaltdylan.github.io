var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions');

function permissions() {
	return {
		permissions : AppStore.getPermissions()
	}
}

var Permissions = React.createClass({
	getInitialState: function() {
		return permissions();
	},

	componentWillMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	_onChange: function() {
		console.log(permissions());
		this.setState(permissions());
	},

	onPermissionChange(e) {
		var role = e.target.name;
		var amount = parseInt(e.target.value);

		if(!e.target.checked) {
			amount = -(amount);
		}
		
		AppActions.changePermission(role, amount);
	},

	render: function() {
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Role</th>
						<th>Read</th>
						<th>Write</th>
						<th>Execute</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							User
						</td>
						<td>
							<input type="checkbox" value="4" onChange={this.onPermissionChange} checked={ this.state.permissions.user >= 4 } name="user" />
						</td>
						<td>
							<input type="checkbox" value="2" onChange={this.onPermissionChange} checked={ this.state.permissions.user >= 6 || this.state.permissions.user == 3 || this.state.permissions.user == 2 } name="user" />
						</td>					
						<td>
							<input type="checkbox" value="1" onChange={this.onPermissionChange} checked={ this.state.permissions.user % 2 } name="user" />
						</td>
					</tr>	
					<tr>
						<td>
							Group
						</td>
						<td>
							<input type="checkbox" value="4" onChange={this.onPermissionChange} checked={ this.state.permissions.group >= 4 } name="group" />
						</td>
						<td>
							<input type="checkbox" value="2" onChange={this.onPermissionChange} checked={ this.state.permissions.group >= 6 || this.state.permissions.group == 3 || this.state.permissions.group == 2 } name="group" />
						</td>					
						<td>
							<input type="checkbox" value="1" onChange={this.onPermissionChange} checked={ this.state.permissions.group % 2 } name="group" />
						</td>
					</tr>
					<tr>
						<td>
							Other
						</td>
						<td>
							<input type="checkbox" value="4" onChange={this.onPermissionChange} checked={ this.state.permissions.other >= 4 } name="other" />
						</td>
						<td>
							<input type="checkbox" value="2" onChange={this.onPermissionChange} checked={ this.state.permissions.other >= 6 || this.state.permissions.other == 3 || this.state.permissions.other == 2 } name="other" />
						</td>					
						<td>
							<input type="checkbox" value="1" onChange={this.onPermissionChange} checked={ this.state.permissions.other % 2 } name="other" />
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
});

module.exports = Permissions;