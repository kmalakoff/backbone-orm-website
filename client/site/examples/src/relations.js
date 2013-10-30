
  var MongoSync = require('backbone-mongo').Sync;

  var Project = Backbone.Model.extend({
    urlRoot: 'mongodb://localhost:27017/projects'
  });
  Project.schema = {
    tasks: function() {
      return ['hasMany', Task];
    }
  };
  Project.prototype.sync = MongoSync(Project);

  var Task = Backbone.Model.extend({
    urlRoot: 'mongodb://localhost:27017/tasks'
  });
  Task.schema = {
    tasks: function() {
      return ['belongsTo', Project];
    }
  };
  Task.prototype.sync = MongoSync(Task);

  // Find a project
  Project.findOne({name: 'My project'}, function(err, project) {
    // Retrieve its tasks from mongo
    project.get('tasks', function(err, tasks) { /* do things with tasks */ });
  });

  // Find a project and its tasks with `$include`
  Project.findOne({name: 'My project', $include: 'tasks'}, function(err, project) {
    // Tasks are already loaded, we can just use them
    var tasks = project.get('tasks');
  });