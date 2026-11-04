// Import dotenv package to load environment variables from a .env file
import dotenv from 'dotenv';

// Load environment variables from .env file into process.env
dotenv.config();

// Map each NODE_ENV value to the prefix of its database variables
const prefixes = {
  // NODE_ENV=development -> DEV_DB_USER, DEV_DB_NAME, ...
  development: 'DEV_',
  // NODE_ENV=test -> TEST_DB_USER, TEST_DB_NAME, ...
  test: 'TEST_',
  // NODE_ENV=production -> PROD_DB_USER, PROD_DB_NAME, ...
  production: 'PROD_',
};

// Select the prefix that matches the current environment
// Default to development if NODE_ENV is not defined
const prefix = prefixes[process.env.NODE_ENV] ?? 'DEV_';

// Read the environment variable using the selected prefix
// Example: DEV_DB_USER, TEST_DB_USER, or PROD_DB_USER
const pick = (name) => process.env[`${prefix}${name}`];

// Export the configuration object containing API settings
export const config = {
  // ----------------------------- API environment -----------------------------

  // Application environment (development | test | production)
  env: process.env.NODE_ENV ?? 'development',
  // API port
  apiPort: process.env.API_PORT,

  // ---------------------------- ORM environment ------------------------------

  // Database dialect (postgres)
  dialect: process.env.DIALECT,

  // --------------------------- Database configuration ------------------------

  // Database username (DEV_, TEST_, or PROD_ depending on NODE_ENV)
  dbUser: pick('DB_USER'),
  // Database password
  dbPassword: pick('DB_PASSWORD'),
  // Database host
  dbHost: pick('DB_HOST'),
  // Database name
  dbName: pick('DB_NAME'),
  // Database host port
  dbPort: pick('DB_PORT'),
  // Database container port (internal PostgreSQL container port)
  dbContainerPort: pick('DB_CONTAINER_PORT'),

  // -------------------------- PgAdmin configuration -------------------

  // PgAdmin login email
  pgAdminEmail: process.env.PGADMIN_EMAIL,
  // PgAdmin login password
  pgAdminPassword: process.env.PGADMIN_PASSWORD,
  // PgAdmin host port
  pgAdminPort: process.env.PGADMIN_PORT,
  // PgAdmin container port
  pgAdminContainerPort: process.env.PGADMIN_CONTAINER_PORT,

  // -------------------------- API secrets -----------------------------

  // API key for endpoint requests
  APIKey: process.env.API_KEY,
  // JWT secret key for user authentication
  authAppJwtKey: process.env.AUTH_API_JWT_SECRET_KEY,
  // Symmetric key for message body encryption at rest
  messageEncryptionKey: process.env.MESSAGE_ENCRYPTION_KEY,

  // -------------------------- Front-end APP ---------------------------

  // Allowed front-end origin for CORS requests
  corsOrigin: process.env.CORS_ORIGIN,
  // Number of trusted proxy hops in front of the API
  trustProxyHops: Number.parseInt(process.env.TRUST_PROXY_HOPS ?? '0', 10) || 0,
};
