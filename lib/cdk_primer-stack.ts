import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecs_patterns from "@aws-cdk/aws-ecs-patterns";
import * as s3 from "@aws-cdk/aws-s3";
import { env } from 'process';

// import * as sqs from '@aws-cdk/aws-sqs';

export class CdkPrimerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, "MyVpc", {maxAzs: 2});

    const cluster = new ecs.Cluster(this, "MyCluster", {vpc: vpc});

      new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {

          cluster: cluster,

          taskImageOptions: { image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },

          publicLoadBalancer: true

  });
    // example resource
    // const queue = new sqs.Queue(this, 'CdkPrimerQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
const app = new cdk.App();
const jur1 = { account: '444455556666', region:'us-west-1'};
const jur2 = { account: '123456789012', region:'us-west-2'};
new CdkPrimerStack(app, 'CdkPrimerStack', {env: jur1});
new CdkPrimerStack(app, 'CdkPrimerStack2', {env: jur2});