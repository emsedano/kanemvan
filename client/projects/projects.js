// This code only runs on the client
Meteor.subscribe("projects");


Template.projectsList.helpers({
  
  projects: function () {
      // Otherwise, return all of the project
      return Projects.find({}, {sort: {createdAt: -1}});
    
  },
  
  projectsCount: function () {
    return Projects.find({}).count();
  },
  
  isOwner: function () {
    return this.owner === Meteor.userId();
  }
});

Template.projectsList.events({
  "submit .open-project": function (event) {
    // This function is called when the new project form is submitted
    Router.go("/projects/"+this.id);

    // Prevent default form submit
    return false;
  }
  
});

Template.projectsList.events({
  "click .delete": function () {
    Meteor.call("Project.delete", this._id);
  }
});

// Build the relationship between the user creator and the project
Projects.find().observe({
  
  added: function(project) {
    
    console.log("projects.find().observe on added ");
    var member  = Members.find({user_id: project.owner});
    
    MembersProjects.insert( {
      user_id: member._id,
      project_id: project._id
    } );
    
  }
});







