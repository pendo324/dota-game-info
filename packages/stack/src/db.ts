import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class DotaGameInfoTable extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);

    const dotaGameInfoTable = new dynamodb.Table(this, 'DotaGameInfoTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    new cdk.CfnOutput(this, 'DotaGameInfoTableName', {
      value: dotaGameInfoTable.tableName,
      exportName: 'DotaGameInfoTableName',
    });

    new cdk.CfnOutput(this, 'DotaGameInfoTableArn', {
      value: dotaGameInfoTable.tableArn,
      exportName: 'DotaGameInfoTableArn',
    });
  }
}
