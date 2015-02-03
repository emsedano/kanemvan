Meteor.users.find().observe({
  added: function(user) {
    
    console.log("users.find().observe on added ");
    
    Members.insert( {
      user_id: user._id,
      profile: user.profile
    } );
    
  }
});