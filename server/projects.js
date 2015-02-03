
// Only publish tasks that are public or belong to the current user
Meteor.publish("projects", function (id) {
  
  return Projects.find({ owner: this.userId }); 
});


Meteor.publish("projectDetail", function(projectId){
  var self = this;
  
  var projectCursor = Projects.find({_id: projectId});
  
  var membersProjectsCursor = MembersProjects.find({
    project_id: projectId
  });
  
  
  var memberObservers = {};
  var membersProjectsObserver = membersProjectsCursor.observe({
    added: function(newDoc){
      var memberCursor = Members.find({user_id: newDoc.user_id});
      memberObservers[newDoc.user_id] = memberCursor.observeChanges({
        
        added: function(id, fields){
          self.added('members', id, fields);
        },
        
        changed: function(id, fields){
          self.changed('members', id, fields);
        },
        
        removed: function(id){
          self.removed('members', id);
        },
        
      });
    },
    
    removed: function(oldDoc){
      self.removed('members', oldDoc.user_id);
      memberObservers[oldDoc.user_id].stop();
    }
  });
  
  this.onStop(function(){
    membersProjectsObserver.stop();
  });
  
  return [projectCursor, membersProjectsCursor];
});

Meteor.publish("members_projects", function() {
  return MembersProjects.find({});
});

