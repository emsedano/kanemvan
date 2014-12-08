
// Only publish tasks that are public or belong to the current user
Meteor.publish("projects", function () {
  return Tasks.find({
    $or: [
      { owner: this.userId }
    ]
  });
});


