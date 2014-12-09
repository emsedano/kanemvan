// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "github"
});
ServiceConfiguration.configurations.insert({
  service: "github",
  clientId: "5f052fb26f12faa18bfe",
  secret: "85c1e413eaae866239a29734df4d6726674d52ce"
});