# LoL API

**LoL API** is a RESTful API built with NestJS, designed to manage League of Legends Champions and their respective Abilities.

---

## Overview

The project serves as a backend to manage the game's character data. It provides endpoints for:
- **Champion Management:** Create, read, update, and delete champions including their role, difficulty, and region.
- **Abilities Management:** Manage specific abilities linked to champions, detailing their description and type or key (Q, W, E, R, Passive).
- **Automatic Relationships:** Automatically fetch champions along with their associated abilities through structured database relationships (1 to N).

---

## Documentation

- [Postman API Documentation](https://documenter.getpostman.com/view/48535719/2sBXwmPsHU) - Complete endpoint documentation with test data and descriptions, ready to be imported or viewed online.

---

## Main Technologies

- **Framework:** [NestJS](https://nestjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Sequelize](https://sequelize.org/)
- **Database:** [MySQL](https://www.mysql.com/)
- **Endpoints & Testing:** [Postman](https://www.postman.com/)

---

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:
- **Node.js**
- **NPM**
- **MySQL**
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devcarlosperez/lol-api
   cd lol-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Configuration:**
   Ensure your MySQL server is running. By default, the API expects a database named `lol_api`. You will need to update the database credentials (host, user, password) in the `src/app.module.ts` file to match your local MySQL configuration.

4. **Start the server:**
   ```bash
   # Start in development mode
   npm run start:dev
   ```
   The API will be running at `http://localhost:3000`.

---

## Acknowledgments

Special thanks to **Tiburcio** and the documentation provided on the campus, which were essential guides for following the steps and making this project possible.

---

## Author

Carlos Luis Pérez Santana
