# EzDoc – Healthcare Appointment Scheduler

EzDoc is a comprehensive web application designed to streamline the process of scheduling doctor appointments. The platform enables patients to book appointments efficiently while providing doctors with an intuitive interface to manage their schedules.

## 📌 Features

- **Patient Module**:

  - Register and log in securely.
  - Browse available doctors by specialization.
  - Book, view, and manage appointments.

- **Doctor Module**:

  - Register and authenticate securely.
  - Manage availability and appointment slots.
  - View and confirm patient appointments.

- **Admin Module**:

  - Manage users (patients and doctors).
  - Monitor and oversee appointment activities.

- **System Features**:

  - Secure authentication (with role-based access).
  - Real-time appointment scheduling and notifications.
  - Responsive UI for seamless access across devices.

## 🛠️ Tech Stack

### Frontend:

- HTML, CSS, Bootstrap, Material Design
- Angular (for dynamic UI and client-side logic)

### Backend:

- Java (Spring Boot for RESTful APIs)
- Hibernate (for ORM and database handling)
- MySQL (Relational Database Management System)

## 📚 Project Structure

```
EzDoc/
├── backend/               # Spring Boot Application
│   ├── src/main/java/
│   │     ├── com.ezdoc/  # Main package
│   │     │      ├── controllers/
│   │     │      ├── services/
│   │     │      ├── dao/
│   │     │      └── exceptions/
│   └── resources/        # Application configuration
└── frontend/              # Angular Application
    ├── src/
    │   ├── app/
    │   │    ├── components/
    │   │    ├── services/
    │   │    └── pages/
    └── angular.json
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Java Development Kit (JDK 17 or higher)
- Node.js and npm (for Angular)
- MySQL Database

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iamchaitanya7/ezdoc.git
   cd ezdoc
   ```

2. **Set up the Backend:**

   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Configure MySQL in `application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ezdoc
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   ```

   - Build and run the Spring Boot application:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. **Set up the Frontend:**

   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies and start the Angular app:

   ```bash
   npm install
   ng serve
   ```

4. **Access the Application:**
   Open your browser and visit: `http://localhost:4200`

## 🧪 Testing

- Ensure the backend is running on `http://localhost:8080`
- Ensure the frontend is running on `http://localhost:4200`
- Validate appointment booking, doctor management, and user flows.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Contact

For any queries or support:

- **Chaitanya Gawali** – [LinkedIn](https://www.linkedin.com/in/chaitanya-gawali)
- Email: [chaitanyagawalipatil@gmail.com](mailto\:chaitanyagawalipatil@gmail.com)

