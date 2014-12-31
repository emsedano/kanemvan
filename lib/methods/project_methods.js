Meteor.methods({
  
    "Project.create": function (name, description) {
      
      // Make sure the user is logged in before inserting a task
      if (! Meteor.userId()) {
        throw new Meteor.Error("not-authorized");
      }
  
      Projects.insert({
        name: name,
        description: description,
        createdAt: new Date(),
        owner: Meteor.userId(),
        totalWorkedHours: 0,
        currentIteration: "Not started",
        status: "new"
      }, function(a,b){
        console.log("callbakc a => " + a);
        console.log("callbakc b => " + b);
        UsersProjects.insert({
          user_id: Meteor.userId(), 
          project_id: b
        });
      });

    },
    
    "Project.delete": function (id) {
      var project = Projects.findOne(id);
      if (project.owner !== Meteor.userId()) {
        // If the task is private, make sure only the owner can delete it
        throw new Meteor.Error("not-authorized");
      }
  
      Projects.remove(id);
    }
});