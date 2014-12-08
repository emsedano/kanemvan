// This code only runs on the client
Meteor.subscribe("projects");

Template.projects.helpers({
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

Template.projects.events({
  "submit .new-project": function (event) {
    // This function is called when the new project form is submitted
    var text = event.target.text.value;

    Meteor.call("Project.create", text);

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
  
});

Template.projects.events({
  "click .delete": function () {
    Meteor.call("Project.delete", this._id);
  }
});







