////////////////
// BeforeHooks
////////////////
// I use an object that contains all before hooks
var IR_BeforeHooks = {
  
    isLoggedIn: function(pause) {
        if (!(Meteor.loggingIn() || Meteor.user())) {
          //this.render('signup');
          this.layout('loginLayout');
          this.render('signin');
          
        }
        
      this.next();
    }
    
    // add more before hooks here
}

// Before hooks for specific routes
// Must be equal to the route names of the Iron Router route map
Router.before(IR_BeforeHooks.isLoggedIn, {except : ['singup', 'about']});
//Router.onBeforeAction('loading');

