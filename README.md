# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## How to create a new project

cd ..AWS CDK Demonstration 

Step 1:
To create the main project folder, open the terminal in Visual Studio Code. Enter the following command in the terminal:

mkdir CDKPrimer

Step 2:
Navigate to the newly created folder. Enter the following command in the terminal:
cd CDKPrimer

Step 3:
In the CDKPrimer folder, initialize your AWS CDK project by running the init command in the terminal. This step specifies the TypeScript programming language. Enter the following command in the terminal:

cdk init --language typescript

Step 4:
Install the AWS Construct Library modules for Amazon Elastic Compute Cloud (Amazon EC2) and Amazon ECS. Enter the following command in the terminal:

npm install @aws-cdk/aws-ec2 @aws-cdk/aws-ecs @aws-cdk/aws-ecs-patterns

Step 5:
In the CDKPrimer folder, open the file cdk-primer-stack.ts in the /lib directory.

Step 6:
Add the following Amazon ECS and Amazon EC2 AWS Construct Library module imports to the cdk-primer-stack.ts file.

import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecs_patterns from "@aws-cdk/aws-ecs-patterns";

Step 7:
Under the comment that indicates where stack resources are included, add these lines of code, and then save the cdk-primer-stack.ts file:

    const vpc = new ec2.Vpc(this, "MyVpc", {maxAzs: 2});

    const cluster = new ecs.Cluster(this, "MyCluster", {vpc: vpc});

      new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {

          cluster: cluster,

          taskImageOptions: { image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },

          publicLoadBalancer: true

  });


Step 8:
Synthesize the code into an AWS CloudFormation template using the the cdk synth command.

cdk synth

Template synthesis time might vary.

Step 9:
View the synthesized AWS CloudFormation template in the terminal. Synthesized templates can also be located within the cdk.out directory. 

Step 10:
Deploy the stack by running the following command in the terminal:

cdk deploy

The terminal shows the steps AWS CloudFormation uses to deploy your App.  

Deploy times might vary.

Step 11:
When the deployment is complete, in the Outputs section, press Ctrl and click to open the load balancer URL and display the sample application page.

Step 12:
Log in to the AWS Management Console and search for CloudFormation. Choose CdkPrimerStack, and then select Resources to view the deployed resources.

Step 13:
To avoid unexpected AWS charges, remove the newly created AWS CDK stack.

To remove all resources created in the stack, run the following command in the terminal:

cdk destroy

Process time might vary.
