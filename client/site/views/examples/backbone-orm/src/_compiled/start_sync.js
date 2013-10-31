(function() {
  var MemorySync, Project, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MemorySync = require('backbone-orm').sync;

  Project = (function(_super) {
    __extends(Project, _super);

    function Project() {
      _ref = Project.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Project.prototype.urlRoot = '/projects';

    Project.prototype.sync = MemorySync(Project);

    return Project;

  })(Backbone.Model);

}).call(this);
