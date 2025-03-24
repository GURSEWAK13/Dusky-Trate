# Dusky Turtle

A modern e-commerce web application built with React.

## Getting Started

### 1. Install dependencies

```
npm install
# or
yarn install
```

### 2. Run the development server

```
npm run dev
# or
yarn dev
```

### 3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/UI](https://ui.shadcn.com/) - Reusable UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [React Context API](https://reactjs.org/) - State management

## 📁 Project Structure

```
dusky-turtle/
├── app/                # Next.js Router pages
│   ├── about/          # About page
│   ├── account/        # User account page
│   ├── cart/           # Shopping cart page
│   ├── contact/        # Contact page
│   ├── checkout/       # Checkout process page
│   ├── faq/            # FAQ pages
│   ├── admin/          # Administrative content
│   ├── products/       # Product catalog pages
│   ├── shop/           # Store page with filters
│   └── api/            # Rest/server component
├── components/         # Reusable components
│   ├── ui/             # UI components (shadcn)
│   ├── form-section/   # Form-related section
│   ├── navbar.tsx      # Navigation bar component
│   ├── footer.tsx      # Footer component
│   ├── cart.tsx        # Product components
│   └── context/        # React Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── ...                 # Configuration files
```

## Features

- Responsive design for mobile and desktop
- User authentication and account management
- Product catalog with filtering and search
- Shopping cart and checkout process
- Admin dashboard for product management
- API routes for backend functionality

## Development

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
DATABASE_URL=your_database_connection_string
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment

This project can be easily deployed on Vercel:

```
npm run build
npm run start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.