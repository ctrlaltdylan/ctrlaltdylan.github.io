var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _permissions = {
  user : 7,
  group : 5,
  other : 5
};

function _changePermission(permission, amount) {
    var currentValue = _permissions[permission];
    _permissions[permission] = currentValue + amount;
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  getPermissions: function() {
    return _permissions;
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType) {
      case AppConstants.CHANGE_PERMISSION:
          _changePermission(payload.action.permission, payload.action.amount);
        break;
    }

    AppStore.emitChange();

    return true;
  })

})

module.exports = AppStore;