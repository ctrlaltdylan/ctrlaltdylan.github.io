var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
  changePermission: function(permission, amount) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CHANGE_PERMISSION,
      permission: permission,
      amount: amount
    }); 
  }
}

module.exports = AppActions;