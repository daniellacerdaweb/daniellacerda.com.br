const dotenv = require('dotenv');
const child_process = require('child_process');
const env = require('dotenv').config({ path: '.env.local' });

const { NEXT_PUBLIC_SPACES_CONTENTFUL, NEXT_PUBLIC_TOKEN_CONTENTFUL } = env.parsed;
const cmd = `npx apollo schema:download --header 'Authorization: Bearer ${NEXT_PUBLIC_TOKEN_CONTENTFUL}' --endpoint 'https://graphql.contentful.com/content/v1/spaces/${NEXT_PUBLIC_SPACES_CONTENTFUL}'`;

try {
  console.log('carregando...');
  console.log(child_process.execSync(cmd).toString());
} catch (error) {
  error.status;
  error.message;
  error.stderr;
  error.stdout;
}
