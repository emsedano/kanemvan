// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({ service: 'github' });

ServiceConfiguration.configurations.insert({
  service:      'github',
  clientId:     '5f052fb26f12faa18bfe',
  clientSecret: '85c1e413eaae866239a29734df4d6726674d52ce'
});



Accounts.onCreateUser(function(options, user){
  console.log(" Options => " + JSON.stringify(options));
  if(user.services.github){
    var accessToken, result, profile;
    
    accessToken = user.services.github.accessToken, 

  
    result = Meteor.http.get("https://api.github.com/user", {
      params: {
        accessToken: accessToken
      }
    });
    
    if (result.error)
      throw result.error;
      
    profile = _.pick(result.data, 
      "login",
      "name",
      "avatar_url",
      "url",
      "company",
      "blog",
      "location",
      "email",
      "bio",
      "html_url");
  }
  
  user.profile = options.profile;
  console.log("creating => " + JSON.stringify(user));
  return user;
});



