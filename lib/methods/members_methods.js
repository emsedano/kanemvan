Meteor.users.find().observe({
  added: function(user) {
    
    var member = {
      user_id: user.email,
      profile: user.profile
    };
    
    console.log(" Saving Member => " + JSON.stringify(member));
    Members.insert(member);
  }
});