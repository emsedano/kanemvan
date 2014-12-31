////////////////
// BeforeHooks
////////////////
// I use an object that contains all before hooks
Iron.Router.hooks.isLoggedIn = function() {
        if (!(Meteor.loggingIn() || Meteor.user())) {
          this.layout("loginLayout")
          Router.go("/signin");
        }
        
      this.next();
    // add more before hooks here
};

// Before hooks for specific routes
// Must be equal to the route names of the Iron Router route map
Router.onBeforeAction('isLoggedIn', { except: ['signup', 'about']} );
//Router.onBeforeAction('loading');

