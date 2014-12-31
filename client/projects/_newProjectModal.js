
Template.newProjectModal.events({
  "submit #new-project": function(event, tmpl) {
    console.log("new project process ran");
    var name = tmpl.find('#name').value,
        description = tmpl.find('#description').value;
    console.log(name);
    Meteor.call("Project.create", name, description);
    
    $("#newProjectModal").hide();
    $( ".close" ).trigger( "click" );
    return false;
  }
})