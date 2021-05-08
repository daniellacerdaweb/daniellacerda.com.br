const child_process = require('child_process');
const path = process.argv[2];
const env = require('dotenv').config({ path });

const { NEXT_PUBLIC_SPACES_CONTENTFUL, NEXT_PUBLIC_TOKEN_CONTENTFUL } = env.parsed;
const cmd = `apollo client:download-schema ./schema.graphql --header 'Authorization: Bearer ${NEXT_PUBLIC_TOKEN_CONTENTFUL}' --endpoint 'https://graphql.contentful.com/content/v1/spaces/${NEXT_PUBLIC_SPACES_CONTENTFUL}'`;

try {
  console.log('loading...');
  console.log(child_process.execSync(cmd).toString());
} catch (error) {
  error.status;
  error.message;
  error.stderr;
  error.stdout;
}
