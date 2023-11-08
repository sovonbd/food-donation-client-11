# Donation Nosh Project

## [live Website](https://food-donation-f7d5a.web.app/)

### Some features of this project

- **React Router Implementation:** The code uses the React Router library to define and manage the navigation of the React application. Routes are structured in a hierarchical manner, allowing for different components to be rendered based on the specified paths. Private routes are protected by a custom PrivateRoute component to control access based on authentication status.

- **Component-Based Routing:** The project follows a component-based routing approach, where each route is associated with a specific React component. This modular structure enhances code organization and maintainability, making it easier to understand and manage different pages of the application.

- **Authentication with JWT:** The code includes authentication middleware using JSON Web Tokens (JWT). Users receive a token upon successful login, stored as an HTTP-only cookie. The token is then verified on subsequent requests to ensure authorized access.

- **MongoDB Integration:** The server connects to a MongoDB database using the MongoDB Node.js driver. It performs various CRUD operations on a collection named "products," handling data related to food donations. The integration includes retrieving, adding, updating, and deleting products in the database.

- **CORS Configuration:** Cross-Origin Resource Sharing (CORS) is configured to allow specific origins, including a production web app and a local development server. This ensures that the server can respond to requests from authorized sources, preventing potential security issues.
