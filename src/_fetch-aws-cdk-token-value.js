const { CloudControlClient, ListResourcesCommand, GetResourceCommand } = require("@aws-sdk/client-cloudcontrol");

const logicalId = process.argv[2];
const attribute = process.argv[3];
const typeName = process.argv[4];
const stackName = process.argv[5];

const client = new CloudControlClient({ region: process.env.AWS_DEFAULT_REGION });

async function fetch() {

  const list = new ListResourcesCommand({
    TypeName: typeName,
  });

  const resources = await client.send(list);

  for (const short of resources['ResourceDescriptions']) {
    const get = new GetResourceCommand({
      TypeName: typeName,
      Identifier: short.Identifier
    })
    const long = await client.send(get)
    const resource = long['ResourceDescription']
    const properties = JSON.parse(resource.Properties);
    const tags = properties.Tags ?? [];
    if (findStackName(tags) === stackName && findLogicalId(tags) === logicalId) {

      if (attribute === 'Ref') {
        // Refs aren't mapped in Cloud Control...
        // Assuming its the idenitifier is probably wrong but we don't have
        // a choice.
        return short.Identifier
      }

      value = properties[attribute]
      if (!value) {
        throw new Error(`Attribute '${attribute}' not found on resource with id '${logicalId}' in stack '${stackName}'`);
      }
      return value;
    }
  }

  // TODO better errors based on the actual scenario
  throw new Error(`Resource with id '${logicalId}' not found in stack '${stackName}'`);

}

function findStackName(tags) {
  return findKey(tags, 'aws:cloudformation:stack-name');
}

function findLogicalId(tags) {
  return findKey(tags, 'aws:cloudformation:logical-id');
}

function findKey(tags, key) {
  filtered = tags.filter(tag => tag.Key === key);
  return filtered.length === 1 ? filtered[0].Value : undefined
}

fetch()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });