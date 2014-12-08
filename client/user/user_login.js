Template.user_loggedout.events({
  "click #login": function(e, tmpl){
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, function(err){
      if (err) {
        // who message     
      } else{
        // show alert
      }
    })
  },
  
  
  'submit #login-form' : function(e, tmpl){
      
      e.preventDefault();
      // retrieve the input field values
      var email = tmpl.find('#username').value
        , password = tmpl.find('#password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
        if (err){
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
          alert(err);
        } else{
          // The user has been logged in.
          alert("logged in");
          }
      });
         return false; 
      }
});


Template.user_logged.events({
  "click #logout": function(e, tmpl){
    Meteor.logout(function(err){
      if(err){
        
      }else{
        
      }
    })
  }
});