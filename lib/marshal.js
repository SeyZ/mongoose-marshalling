var mongoose = require('mongoose');
var _ = require('underscore');

var plugin = function(schema, opts) {

  schema.methods.marshal = function(args, callback) {
    if (_.isArray(opts.marshal)) {
      var obj = this.toObject()
      _.each(_.keys(obj), function(key) {
        if (opts.marshal.indexOf(key) === -1) {
          delete obj[key];
        }
      });

      callback(null, obj);
    }

    if (_.isFunction(opts.marshal)) {
      return opts.marshal(this, args, callback);
    }
  };

  schema.methods.unmarshal = function() {
  };
};

module.exports = plugin;
