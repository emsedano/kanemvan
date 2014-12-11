/*******************************
******Simple Tastk - events ****
********************************/
Template.projectDashItem.events({
  "click #openProject": function (evt, tmpl) {
    evt.preventDefault();
    var target = "#projectDashItem_" +this._id;
    var panel = tmpl.find(target);
    var sticky = $(panel).children(".sticky");
    $(panel).toggleClass("panel-expanded");
    
    var _height = !$(panel).hasClass("panel-expanded") ? 290 : (window.innerHeight - 80); 
    $(sticky).css("min-height", _height);
    $.scrollTo(panel, 1000);
  }
});

$( window ).resize(function() {
  $( ".panel-expanded .sticky" ).each(function() {
    $(this).css("min-height", window.innerHeight - 80);
  });
});