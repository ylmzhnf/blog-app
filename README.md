# 📝 BLOG APP: A Dynamic Blog Platform

A personal blog application created using Node.js, Express.js, and EJS, designed to demonstrate core **CRUD** (Create, Read, Update, Delete) functionalities in a mobile-responsive environment.

---

## 📋 Table of Contents

- [Overview](#✨-overview)
- [Setup & Installation](#⚙️-setup--installation)
- [Technical Details](#💻-technical-details)
  - [Tech Stack](#🛠️-tech-stack)
  - [Routing (CRUD Operations)](#🌐-routing-crud-operations)
  - [Data Security and Input Management](#✨-data-security-and-input-management)
- [Future Improvements](#🚀-future-improvements)

---

## ✨ Overview

This project serves as a foundational back-end application focusing on Server-Side Rendering (SSR) using the **EJS** templating engine. It features a clean, simple, and functional interface for managing blog posts.

---

## 🖥️Live Demo

🔗 **[Visit Website](https://ylmzhnf.github.io/blog-app)**

---

- **Design Philosophy:** The application adopts a mobile-first layout for guaranteed responsiveness across devices.
- **Data Management:** Posts are currently stored in a transient array (`let posts = []`) within the server logic (`main.js`), meaning data is not persistent across server restarts.

---

## ⚙️ Setup & Installation

Follow these steps to get the project running on your local machine:

1.  **Prerequisites:** Ensure you have Node.js installed.
2.  **Clone the Repository:**
    ```bash
    git clone [Insert Project GitHub Address Here]
    cd blog-app
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Start the Application:**
    ```bash
    node main.js
    ```
5.  Open your web browser and navigate to `http://localhost:3000`.

---

## 💻 Technical Details

### 🛠️ Tech Stack

- **Backend Runtime:** Node.js
- **Web Framework:** Express.js
- **Templating Engine:** EJS (Embedded JavaScript)
- **Styling:** Custom CSS with Variables (`:root`)
- **Client-Side Scripting:** Vanilla JavaScript (for mobile menu toggling)

### 🌐 Routing (CRUD Operations)

All core functionalities are handled by the following routes defined in `main.js`:

|     Function     | Route Example | HTTP Method |
| :--------------: | :------------ | :---------: |
|  List All Posts  | `/`           |    `GET`    |
|  New Post Form   | `/new`        |    `GET`    |
| View Post Detail | `/view/:id`   |    `GET`    |
| Create New Post  | `/new`        |   `POST`    |
|  Edit Post Form  | `/edit/:id`   |    `GET`    |
|   Update Post    | `/edit/:id`   |   `POST`    |
|   Delete Post    | `/delete/:id` |   `POST`    |

---
### ✨ Data Security and Input Management

The project now utilizes a two-layered input management strategy to enhance both security and user experience:

* **Enhanced Form Validation (Server-Side):**
    * Input data is immediately validated on the server side (`main.js`) before processing, checking for empty or invalid fields.
    * Error messages are displayed **right next to the relevant input field** (esthetic, field-specific error display) instead of a general top-of-form warning.
    * In case of validation failure, the user's previously entered valid data (`oldData`) is preserved to prevent the user from having to re-enter all information.

* **Input Sanitization (Security):**
    * All user input is rigorously cleaned using the `sanitize-html` library before being saved to the database (or in-memory array) and rendered on the screen.
    * This prevents **XSS (Cross-Site Scripting)** attacks, significantly boosting application security. Titles are strictly cleaned (no HTML), while post content is allowed to retain basic formatting tags (like `<b>`, `<i>`, `<p>`, `<ul>`, etc.).

--- 

## 🚀 Future Improvements

The following items are prioritized to enhance the application's robustness, security, and architecture:

- **Persistent Data Storage:** Integrate a database (e.g., MongoDB or PostgreSQL) to replace the in-memory array (`let posts = []`) and ensure data durability.
- **Architectural Refactoring:** Implement the **MVC** (Model-View-Controller) pattern by separating routing logic into a dedicated `routes/` folder and business logic into `controllers/` for better maintainability.
- **User Authentication:** Implement session management and authentication so only authorized users can create and edit posts.

---

## 📫Contact

**Email:** [ylmzhnf@gmail.com](ylmzhnf@gmail.com)
**LinkedIn:** [Hanife Yılmaz](https://www.linkedin.com/in/hanife-y%C4%B1lmaz-b9137b178/)
**GitHub:** [ylmzhnf](https://github.com/ylmzhnf)
**Frontend Mentor:** [@ylmzhnf](https://www.frontendmentor.io/profile/ylmzhnf)

---

© 2025 Hanife Yilmaz
