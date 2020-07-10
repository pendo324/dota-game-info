import { join } from 'path';
import * as cdk from '@aws-cdk/core';
import * as apiGateway from '@aws-cdk/aws-apigatewayv2';
import * as lambda from '@aws-cdk/aws-lambda';

export class DotaApi extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);

    const dotaApiProxyLambda = new lambda.Function(this, 'DotaGameInfoTable', {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(join(__dirname, '../../api-proxy-lambda/dist.zip')),
      handler: 'index.handler',
    });

    const dotaApiProxyLambdaIntegration = new apiGateway.LambdaProxyIntegration({
      handler: dotaApiProxyLambda,
    });

    const httpApi = new apiGateway.HttpApi(this, 'HttpApiGateway', {
      apiName: 'DotaApiGateway',
    });

    httpApi.addRoutes({
      path: '/match',
      methods: [apiGateway.HttpMethod.GET, apiGateway.HttpMethod.POST],
      integration: dotaApiProxyLambdaIntegration,
    });

    new cdk.CfnOutput(this, 'DotaApiProxyLambdaName', {
      value: dotaApiProxyLambda.functionName,
      exportName: 'DotaApiProxyLambdaName',
    });

    new cdk.CfnOutput(this, 'DotaApiProxyLambdaArn', {
      value: dotaApiProxyLambda.functionArn,
      exportName: 'DotaApiProxyLambdaArn',
    });
  }
}
