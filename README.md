# 🩺 MediBook — Doctor Appointment Booking Platform

MediBook is a full-stack doctor appointment booking application built as a personal learning and portfolio project.

The platform allows patients to discover doctors, view their availability and schedule appointments online. It also provides dedicated dashboards for doctors and administrators to manage appointments, profiles and platform activity.

This project was developed to practise backend development, REST API design, authentication, database modelling and full-stack application architecture.

> **Disclaimer:** MediBook is an educational portfolio project and is not intended for real-world medical use.

---

## 🌐 Live Demo

- **Patient Application:** [Add frontend URL]
- **Admin & Doctor Dashboard:** [Add dashboard URL]
- **Backend API:** [Add backend URL]

---

## 📸 Screenshots

### Patient Application

![Patient application screenshot](./screenshots/patient-app.png)

### Doctor Dashboard

![Doctor dashboard screenshot](./screenshots/doctor-dashboard.png)

### Admin Dashboard

![Admin dashboard screenshot](./screenshots/admin-dashboard.png)

---

## ✨ Features

### Patient

- Create an account and sign in securely
- Browse available doctors
- Filter doctors by medical speciality
- View doctor profiles, fees and availability
- Book an appointment
- View upcoming and previous appointments
- Cancel an appointment
- Update personal profile information

### Doctor

- Sign in through a protected doctor dashboard
- View scheduled appointments
- Complete or cancel appointments
- Review dashboard statistics
- Track appointment earnings
- Update profile information
- Manage availability status

### Administrator

- Secure administrator authentication
- Add new doctors to the platform
- View and manage registered doctors
- View all appointments
- Cancel appointments when necessary
- Access platform statistics
- Manage doctor availability and profile information

---

## 🔐 Authentication and Authorization

The application uses JSON Web Tokens for authentication.

Protected backend routes use role-based authorization to control access for:

- Patients
- Doctors
- Administrators

Passwords are hashed before being stored in the database.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcrypt
- Multer
- Cloudinary

### Deployment

- Vercel
- MongoDB Atlas
- Cloudinary

---

## 🏗️ Project Architecture

```text
medibook/
├── frontend/               # Patient-facing React application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── dashboard/              # Doctor and administrator dashboard
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── config/             # Database and third-party service configuration
│   ├── controllers/        # Application and business logic
│   ├── middlewares/        # Authentication and file-upload middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # REST API routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before running the project, install:

- Node.js
- npm
- MongoDB or a MongoDB Atlas account
- A Cloudinary account

---

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secure_jwt_secret

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

Start the backend development server:

```bash
npm run server
```

The backend will normally run on:

```text
http://localhost:4000
```

---

## 3. Install Patient Frontend Dependencies

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:

```bash
npm run dev
```

---

## 4. Install Dashboard Dependencies

```bash
cd dashboard
npm install
```

Create a `.env` file inside the `dashboard` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the dashboard:

```bash
npm run dev
```

---

## 📡 API Overview

The backend exposes REST API endpoints for authentication, users, doctors, administrators and appointments.

Example route groups:

```text
/api/users
/api/doctors
/api/admin
```

Typical operations include:

```text
POST   /api/users/register
POST   /api/users/login
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/users/book-appointment
GET    /api/users/appointments
POST   /api/users/cancel-appointment
```

```text
POST   /api/doctors/login
GET    /api/doctors/appointments
GET    /api/doctors/dashboard
POST   /api/doctors/complete-appointment
POST   /api/doctors/cancel-appointment
PUT    /api/doctors/profile
```

```text
POST   /api/admin/login
POST   /api/admin/add-doctor
GET    /api/admin/doctors
GET    /api/admin/appointments
GET    /api/admin/dashboard
POST   /api/admin/cancel-appointment
```

> Endpoint names may differ depending on the final implementation.

---

## 🗃️ Main Data Models

### User

Stores patient information such as:

- Name
- Email
- Hashed password
- Profile image
- Address
- Gender
- Date of birth
- Phone number

### Doctor

Stores information such as:

- Name
- Email
- Hashed password
- Medical speciality
- Degree
- Professional experience
- Appointment fee
- Address
- Available appointment slots
- Availability status

### Appointment

Connects patients and doctors and stores:

- Patient information
- Doctor information
- Appointment date
- Appointment time
- Appointment fee
- Booking status
- Cancellation status
- Completion status

---

## 🧠 What I Learned

Through this project, I practised:

- Designing a RESTful API with Express
- Structuring a Node.js backend using routes, controllers and models
- Modelling relationships with MongoDB and Mongoose
- Implementing JWT authentication
- Creating role-based protected routes
- Hashing and validating passwords
- Uploading and managing images with Multer and Cloudinary
- Connecting React applications to a backend API
- Managing authentication state in React
- Handling forms, validation and API errors
- Deploying a full-stack application

---

## 🗺️ Roadmap

Planned improvements include:

- [ ] Appointment confirmation emails
- [ ] Online payment integration
- [ ] Doctor reviews and ratings
- [ ] Password reset functionality
- [ ] Refresh-token authentication
- [ ] Pagination and advanced doctor search
- [ ] Automated backend tests
- [ ] API documentation with Swagger
- [ ] Docker support
- [ ] Improved accessibility
- [ ] Responsive dashboard improvements

---

## 🔒 Security Notes

For production use:

- Never commit `.env` files
- Use long and randomly generated JWT secrets
- Validate and sanitise all user input
- Configure restricted CORS origins
- Add API rate limiting
- Use secure HTTP headers
- Store production secrets in the deployment platform
- Restrict uploaded file types and sizes
- Use HTTPS
- Replace static administrator credentials with a proper administrator model

---

## 🧪 Testing

Automated testing is planned for a future version.

The intended testing stack includes:

- Jest or Vitest
- Supertest
- React Testing Library

---

## 🤝 Contributing

This is primarily a personal learning project, but suggestions and constructive feedback are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push your branch

```bash
git push origin feature/your-feature
```

5. Open a pull request

---

## 📄 License

This project is available under the MIT License.

See the `LICENSE` file for more information.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [Your GitHub profile]
- LinkedIn: [Your LinkedIn profile]
- Portfolio: [Your portfolio website]

---

## 🙏 Acknowledgements

This project was created for educational purposes while learning backend and full-stack web development.

The general concept was inspired by common online doctor appointment platforms. The implementation, architecture and documentation were developed as part of my personal learning process.
