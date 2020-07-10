## Dota Game Info

### API Proxy Lambda
This lambda will call the Steam API (perhaps using [node-steamapi](https://github.com/xDimGG/node-steamapi#)) and save the results back to a DynamoDB table. The lambda will be proxied by an API Gateway.

Specifically, the code will have to call the `IDOTA2Match_570/GetMatchDetails/v1` endpoint.

---

### Stack
This is a CDK project that sets up all of the aforementioned infrastructure (DynamoDB table, Lambda function, API Gateway).

When making any changes to the lambda function, make sure to run `yarn run package` in the lambda project, before running `yarn run deploy` in the stack project.

---

### Twitch Extension
TODO. A React webapp that UI of the project. Will be an Overlay Extension that allows users to click on a hero in the hero bar at the top of the screen to see information on the player that is playing the clicked hero.
