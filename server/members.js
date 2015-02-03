// Only publish tasks that are public or belong to the current user
Meteor.publish("members", function (id) {
  
  return Members.find({ owner: this.userId }); 
});