/**
 * --------
 * @class Action
 * --------
 * Une Action est une action pouvant être effectuée sur le chrono.
 * 
 * NOTE Pas de code spécifique au controlleur dans cette classe.
 */
chronoapp.Action = (function() {
	
	// public
	// ------

	/**
	 * Construit une action pouvant être effectuée sur le chrono.
	 * @property {string} _name Le nom de l'action.
	 * @property {string} _handler Le code de l'action.
	 */
	function Action(name, handler, onAction, keys) {	
		this._name = name;
		this._handler = handler;
		this._onAction = onAction;
		this._keys = keys;
	}

	Action.prototype.getName = function() {
		return this._name;
	};
	
	Action.prototype.getKeys = function() {
		return this._keys;
	};
	
	Action.prototype.execute = function(context) {
		this._handler();
		this._onAction(context);
	};
	
	return Action;
})();
