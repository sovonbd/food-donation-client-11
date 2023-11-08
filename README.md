# Donation Nosh Project

## [live Website](https://654bb137440eb872f0bcf3a9--bespoke-biscotti-8a9049.netlify.app/)

### Some features of this project

- **Brand Display:** The "FoodMenu" component fetches and displays a dynamic food menu from an external data source. It uses React's 'useEffect' and 'useState' for data retrieval and management. The menu items are rendered as links, making it easy to navigate to individual brand pages.

- **Product Addition Form:** The "AddProduct" component allows users to submit new product information via a user-friendly form. Upon form submission, the data is sent to a server for storage, and the form is reset to accept new entries. This feature facilitates easy product addition to the brand page.

- **Authentication with JWT:** The code includes authentication middleware using JSON Web Tokens (JWT). Users receive a token upon successful login, stored as an HTTP-only cookie. The token is then verified on subsequent requests to ensure authorized access.

- **MongoDB Integration:** The "Login" component provides a user-friendly login form with email and password fields. Users can log in with email credentials, Google, or GitHub accounts. Successful logins trigger alerts, and users are redirected to the appropriate destination based on their actions.

- **Shopping Cart Management:** The "MyCart" component displays a user's shopping cart with dynamically loaded items. Users can view and manage the items in their cart. It leverages React state management to facilitate real-time updates to the cart content and provides a clear user interface for cart management.