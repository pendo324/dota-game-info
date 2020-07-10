import * as cdk from '@aws-cdk/core';

import { DotaApi } from './apiGateway';
import { DotaGameInfoTable } from './db';

const app = new cdk.App();

new DotaApi(app, 'DotaApi', {
  env: {
    region: 'us-west-2',
  },
});

new DotaGameInfoTable(app, 'DotaGameInfoTable', {
  env: {
    region: 'us-west-2',
  },
});

app.synth();
