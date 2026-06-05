# Gaming Marketplace API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Use JWT tokens in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Games

#### GET /games
Get all games with optional filtering and pagination.

**Query Parameters:**
- `search` (string): Search by title
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)

**Response:**
```json
{
  "games": [
    {
      "id": 1,
      "title": "Game Title",
      "price": 49.99,
      "rating": 4.5
    }
  ],
  "total": 100
}
```

#### GET /games/:id
Get a specific game by ID.

#### POST /games
Create a new game (admin only).

#### PUT /games/:id
Update a game (admin only).

#### DELETE /games/:id
Delete a game (admin only).

### Users

#### GET /users/:id
Get user profile information.

#### PUT /users/:id
Update user profile.

#### GET /users/:id/wishlist
Get user's wishlist.

### Orders

#### POST /orders
Create a new order.

#### GET /orders/:userId
Get all orders for a user.

#### GET /orders/:id
Get order details.

#### PUT /orders/:id
Update order status.

### Authentication

#### POST /auth/register
Register a new user.

#### POST /auth/login
Login user.

#### POST /auth/logout
Logout user.

#### POST /auth/refresh
Refresh JWT token.
