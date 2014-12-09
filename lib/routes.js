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
  this.route('signup');
  
  
  /** Application path*/
  this.route('dashboard');
  
  
  
  /****** Tasks - todos *****
   * */
  this.route('tasks', {
    path: '/tasks'
  });
  
});

