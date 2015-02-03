

Template.user_logged.events({
  "click #logout": function(e, tmpl){
    Meteor.logout(function(err){
      if(err){
        alert(err);
      }else{
        Router.go('signin');
      }
    });
    return false;
  }
});



Template.signin.events({
  "click #login": function(e, tmpl){
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, function(err){
      if (err) {
        alert(err); // some custom packages
      } else{
        Router.go('home');
      }
    })
  },
  
  
  'submit #login-form' : function(e, tmpl){
      
      e.preventDefault();
      // retrieve the input field values
      var email = tmpl.find('#email').value
        , password = tmpl.find('#password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(err){
        if (err){
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
          
          Router.go('signin');
        } else{
          // The user has been logged in.
          Router.go('home');
        }
      });
         return false; 
      }
});


/********* Registration events ****
***********************************/
Template.signup.events({
  "click #login": function(e, tmpl){
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, function(err){
      if (err) {
        alert(err); // some custom packages
      } else{
        Router.go('home');
      }
    })
  },
  
  
  'submit #registration-form' : function(e, tmpl){
      
    e.preventDefault();
      // retrieve the input field values
    var email = tmpl.find('#email').value,
      name = tmpl.find('#fullname').value,
      password = tmpl.find('#password').value;

    // Trim and validate your fields here.... 

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
        
    Accounts.createUser({
          username: email,
          email : email,
          password : password,
          profile  : {
              name: name
          }
        }, function(err){
        if (err){
          // The user migh""t not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
          Router.go('signin');
        } else{
          // The user has been logged in.
          Router.go('home');
        }
      });
      
    return false; 
  }
});