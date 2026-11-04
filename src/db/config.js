// Import the centralized API configuration, which resolves all
// environment variables according to NODE_ENV
import { config } from '../config/config.js';

/**
 * Sequelize database configuration object.
 *
 * Defines connection settings for development, test, and production.
 * All database credentials are sourced from the centralized config module,
 * which automatically selects DEV_, TEST_, or PROD_ variables based on NODE_ENV.
 */

// -------------------------- Shared Connection ----------------------------

// Connection settings shared by all environments.
// The actual values depend on the NODE_ENV selected in config.js.
const connection = {
  // Database username
  username: config.dbUser,
  // Database user password
  password: config.dbPassword,
  // Database name
  database: config.dbName,
  // Database host
  host: config.dbHost,
  // Database port (host port)
  port: config.dbPort,
  // Database dialect (postgres)
  dialect: config.dialect,
};

// -------------------------- Database Environments -------------------------

const databaseConfig = {
  // Configuration used when NODE_ENV=development
  // Loads DEV_DB_* variables
  development: {
    ...connection,
  },
  // Configuration used when NODE_ENV=test
  // Loads TEST_DB_* variables
  test: {
    ...connection,
  },
  // Configuration used when NODE_ENV=production
  // Loads PROD_DB_* variables
  production: {
    ...connection,
  },
};

// Export as the single source of truth for Sequelize CLI
// and model initialization across the API
export default databaseConfig;
