# Gaming Marketplace MVP

A minimum viable product for a gaming marketplace platform that allows users to browse, purchase, and manage games.

## Features

- Game catalog with search and filtering
- User authentication and profiles
- Shopping cart and checkout
- Order management
- Game reviews and ratings
- Wishlist functionality

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js/Express, REST API
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Payment**: Stripe Integration

## Project Structure

```
├── frontend/          # React frontend application
├── backend/           # Node.js/Express backend
├── database/          # Database schemas and migrations
├── docs/              # Documentation
└── tests/             # Testing files
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL

### Installation

```bash
# Clone the repository
git clone https://github.com/moeez-Ahmed-Dev/gaming-marketplace-mvp.git

# Install dependencies
cd frontend && npm install
cd ../backend && npm install
```

### Running the Application

```bash
# Start backend server
cd backend && npm start

# Start frontend (in another terminal)
cd frontend && npm start
```

## API Documentation

See [API.md](./docs/API.md) for detailed endpoint documentation.

## Contributing

Please follow the contributing guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT License - see LICENSE file for details
