// Import the Sequelize constructor from the 'sequelize' library
import { Sequelize } from 'sequelize';

// Import the centralized API configuration
import { config } from '../config/config.js';

// -------------------------- Environment Configuration ------------------------

// Human-readable name of the environment the API is running in
// (development, test or production; defaults to development)
const environmentLabel = config.env ?? 'development';

// Enable SQL query logging only in development
const enableLogging = environmentLabel === 'development';

// -------------------------- Sequelize Connection -----------------------------

// Create a new Sequelize instance using the credentials selected
// by the centralized configuration according to NODE_ENV
export const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    // Specify the database host
    host: config.dbHost,
    // Specify the database port
    port: config.dbPort,
    // Specify the database dialect (PostgreSQL)
    dialect: config.dialect,
    // Log SQL queries only in development
    // Keep the console clean during testing and production
    logging: enableLogging ? console.log : false,
    // PostgreSQL dialect-specific options
    dialectOptions: {
      // Set the database timezone to UTC+2
      timezone: '+2:00',
    },
  }
);

// -------------------------- Database Connection Test -------------------------

/**
 * Test the database connection.
 *
 * Authenticates the Sequelize instance and displays the connection status.
 *
 * @param {Function} next - Optional callback function to execute after testing.
 * @returns {Promise<void>}
 */
export const testConnection = async (next) => {
  try {
    // Attempt to authenticate the database connection
    await sequelize.authenticate();
    // Display the environment and database connection details
    console.log(
      `[${environmentLabel.toUpperCase()}] Connection has been established successfully ` +
      `to "${config.dbName}" at ${config.dbHost}:${config.dbPort}.`
    );
    // Execute the optional callback after successful authentication
    if (typeof next === 'function') {
      await next();
    }
  } catch (err) {
    // Display an error message if the database connection fails
    console.error(
      `[${environmentLabel.toUpperCase()}] Impossible to connect to the database ` +
      `"${config.dbName}" at ${config.dbHost}:${config.dbPort}:`,
      err
    );
    // Propagate the error to allow the application to handle the failure
    throw err;
  }
};
