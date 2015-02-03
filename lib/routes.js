Router.configure({
  layoutTemplate: 'applicationLayout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.plugin('loading', {loadingTemplate: 'loading'});


Router.map( function () {
  
  // simple route with
  // name 'home' that
  // matches '/' and automatically renders
  // template 'home'
  this.route('home', {
    path: '/',
    waitOn: function(){
      Meteor.subscribe("userData");
    },
    
    action: function(){
      
      if(this.ready()){
        this.render('home');
      }else{
        this.render('signin');
      }
    }
  });
  
   // simple route with
  // name 'home' that
  // matches '/' and automatically renders
  // template 'home'
  this.route('gohome', {
    path: '/home',
    waitOn: function(){
      Meteor.subscribe("userData");
      Meteor.subscribe("members");
    },
    
    action: function(){
      
      if(this.ready()){
        this.render('home');
      }else{
        this.render('signin');
      }
    }
  });
  
  // simple route with
  // name 'about' that
  // matches '/about' and automatically renders
  // template 'about'
  this.route('about');
  
  
  /**User sessions paths**/
  this.route('signin');
  
  this.route('signup', {
     layoutTemplate: 'loginLayout'
  });
  
  
  /** Application path*/
  this.route('dashboard');
  
 
  /****** Project - todos *****
   ****************************
   */
  this.route('projects', {
    path: '/projects',
    waitOn: function(){
      Meteor.subscribe("projects");
    },
    
    action: function(){
      
      if(this.ready()){
        this.render('projectsList');
      }else{
        this.render('loading');
        this.stop();
      }
    }
  });
  
  // Data context from a collection with "notFound" template
  // HINT:
  //// If data is 'null' the notFoundTemplate will be automatically rendered
  //// Also this is only for data and NOT for bad url paths. Should be called noDataFoundTemplate :-)
  this.route('project.show', {
    path: '/projects/:_id',
    
    layoutTemplate: 'applicationLayout',
    
    before: function(){
      Meteor.subscribe('projectDetail', this.params._id);
      this.next();
    },
    
    data: function() {
      return Projects.findOne({_id: this.params._id});
    }
  });
  
  
  /****** Tasks - todos *****
   * */
  this.route('tasks', {
    path: '/tasks'
  });
  
});

