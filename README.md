
---

# TUF

TUF features a flashcard learning tool, an admin panel for managing flashcards, and is built with a tech stack that ensures scalability and maintainability.

![WhatsApp Image 2024-08-12 at 11 43 32 PM](https://github.com/user-attachments/assets/3c785b50-6093-4ffb-af69-2e380a8b81f9)
![WhatsApp Image 2024-08-12 at 11 43 32 PM (1)](https://github.com/user-attachments/assets/6a67e5db-ed7b-474b-9f19-bd8f54cf26dc)


## Tech Stack

### Frontend
- **Tailwind CSS**: For styling and responsive design.
- **Next.js**: For rendering and building the frontend application.
- **React Card Flip**: This creates interactive flip card components.
- **Ky**: A lightweight, modern HTTP client built on the native fetch API, used for making promise-based HTTP requests.
- **Tanstack Query**: For advanced data management and server-state synchronization, a modern evolution of React Query.

### Backend
- **Node.js**: For the server-side runtime environment.
- **Express**: For building the backend API and handling server-side logic.
- **MySQL**: For database management.
- **Railway**: For deploying the backend services (managed by Aiven).

### Package Manager
- **Yarn**: For managing project dependencies.

## Project Features

- **Flashcard Learning Tool**: Users can view flashcards with questions and answers. Flashcards are interactive and can be flipped to reveal answers.
- **Admin Dashboard**: Allows administrators to manage flashcards, including creating and deleting them. The dashboard includes a responsive design for both desktop and mobile views.
- **Responsive Design**: The application is optimized for various screen sizes, including phones, tablets, and desktops.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn (>= 1.x)
- MySQL Server (if running locally)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/tuf.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd tuf
   ```

3. **Install Dependencies**

   ```bash
   yarn install
   ```

4. **Run the Development Server**

   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

### Building for Production

1. **Build the Project**

   ```bash
   yarn build
   ```

2. **Start the Production Server**

   ```bash
   yarn start
   ```

## Responsive Design

- **Desktop View**: Uses Flexbox and Tailwind CSS utilities for a clean and organized layout.
- **Mobile View**: Utilizes responsive design classes to ensure usability on smaller screens. Specific styles are applied using media queries.

## Challenges faced

- **Design Consistency Across Devices**: Ensuring a consistent and user-friendly design across various devices and screen sizes was challenging.
- **Integration of New Tools**: Adapting to Ky for HTTP requests and using React Query mutations for interactive components presented initial challenges but ultimately improved application efficiency.
- **Backend Deployment and Management**: Deploying the backend using Railway and managing it through Aiven introduced complexities in configuration and maintenance. Ensuring reliable connectivity between the frontend and backend services required meticulous setup and monitoring.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
