const { CloudControlClient, ListResourcesCommand, GetResourceCommand } = require("@aws-sdk/client-cloudcontrol");
const { CloudFormationClient, DescribeStackResourceCommand } = require("@aws-sdk/client-cloudformation");

const logicalId = process.argv[2];
const attribute = process.argv[3];
const typeName = process.argv[4];
const stackName = process.argv[5];

const cloudcontrol = new CloudControlClient({ region: process.env.AWS_DEFAULT_REGION });
const cloudformation = new CloudFormationClient({ region: process.env.AWS_DEFAULT_REGION });

async function fetch() {

  const cfnResource = await cloudformation.send(new DescribeStackResourceCommand({
    StackName: stackName,
    LogicalResourceId: logicalId,
  }));

  const identifier = cfnResource.StackResourceDetail?.PhysicalResourceId;
  const typeName = cfnResource.StackResourceDetail.ResourceType;

  if (!identifier) {
    throw new Error(`Resource with logical id '${logicalId}' in stack '${stackName}' does not have a physical resource id`);
  }

  const resource = await cloudcontrol.send(new GetResourceCommand({
    TypeName: typeName,
    Identifier: identifier
  }))

  if (attribute === 'Ref') {
    // Refs aren't mapped in Cloud Control...
    // Assuming its the idenitifier is probably wrong but we don't have
    // a choice.
    return identifier
  }  

  const properties = JSON.parse(resource.ResourceDescription?.Properties ?? '{}')

  // is it true that cloudcontrol properties map to cloudformation attributes?
  const value = properties[attribute]
  if (!value) {
    throw new Error(`Attribute '${attribute}' not found on resource with logical id '${logicalId}' of type '${typeName}' in stack '${stackName}'`);
  }
  return value;
}

fetch()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });