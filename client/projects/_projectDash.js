// This code only runs on the client
Meteor.subscribe("projects");

Template.projectDash.helpers({
  
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