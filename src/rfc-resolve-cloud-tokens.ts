// eslint-disable-next-line import/no-extraneous-dependencies
import * as aws from 'aws-cdk-lib';
import * as k8s from '.';

const awsApp = new aws.App();
const stack = new aws.Stack(awsApp, 'Stack');

const k8sApp = new k8s.App({ awscdkStack: stack });
const manifest = new k8s.Chart(k8sApp, 'Manifest');

const topic = new aws.aws_sns.Topic(stack, 'Topic');
// const queue = new aws.aws_sqs.Queue(stack, 'Queue');
const bucket = new aws.aws_s3.Bucket(stack, 'Bucket', {
  removalPolicy: aws.RemovalPolicy.DESTROY,
});
new k8s.ApiObject(manifest, 'ConfigMap', {
  kind: 'ConfigMap',
  apiVersion: 'v1',
  data: {
    topicArn: topic.topicArn,
    bucketName: bucket.bucketName,
    // queueArn: queue.queueArn,
  },
});

awsApp.synth();
k8sApp.synth();
