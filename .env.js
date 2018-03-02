// this is formatted to echo the structure of the Bluemix credentials
module.exports = {
  VCAP_SERVICES: JSON.stringify({
    conversation: [
      {
        credentials: {
          url: "https://gateway.watsonplatform.net/conversation/api",
          password: "tAXR3sb5JqzI",
          username: "c6e77019-63f1-4c0d-b533-1d771b8607d9"
        }
      }
    ],
    discovery: [
      {
        credentials: {
          url: "https://gateway.watsonplatform.net/discovery/api",
          username: "a7ce77c2-cfb4-4295-93b8-d857d3e3d006",
          password: "Yt5kC0AACw53"
        }
      }
    ]
  }),
  // conversation creds
  workspace_id: "a0636cef-4dd7-49fa-977a-c661ee3c2025",
  conversation_version: "2017-04-21",
  // disco creds
  environment_id: "e6a3ba3f-46dd-4e60-b1e8-6ee7a4bbdb95",
  collection_id: "3f14af9e-c831-407f-a1fa-8d72c1cd7e09",
  discovery_version: "2017-04-27"
};
