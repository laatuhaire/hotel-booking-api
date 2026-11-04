// Function to test database connection
import { testConnection } from './libraries/DBConnection.js';
// Import the IP address and port from the network configuration module
import { theIPAddress, port } from './libraries/netConfig.js';
// Import the webSocket initialization
import { initSocket } from './sockets/index.js';
// Import the function that builds the Express application
import { createApp } from './app.js';

// Create the API with all its middlewares, routes and error handlers
const api = await createApp();

// Start the api listening on the specified IP address and port
const httpServer = api.listen(port, theIPAddress, () => {
  // Log the server start information to the console
  console.log(`Server on port http://${theIPAddress}:${port}`);

  // Initialize the WebSocket server and attach it to the HTTP server
  // Store the Socket.IO instance in the Express application to make it
  // accessible from the routes and controllers.
  const io = initSocket(httpServer);
  api.set('io', io);
});

// Test database connection
// Call the function to ensure the database connection is working
testConnection();

// Export the API for the use in other files
export default api;
