# 🌟 Piccolo
 
**Piccolo** is an AI-powered image generation platform that transforms your text prompts into stunning visuals. This web-based tool offers a seamless experience for:

✅ **Generating high-quality images from simple text prompts**  
✅ **Exploring creative possibilities with AI-generated art**  
✅ **Buying additional credits to unlock more generations (free credits are limited)**

## 🚀 Built With

This project is built using the following technologies:

- [![MongoDB](https://img.shields.io/badge/MongoDB-116149?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
- [![React](https://img.shields.io/badge/React-087EA4?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
- [![Express.js](https://img.shields.io/badge/Express.js-202020?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
- [![Node.js](https://img.shields.io/badge/Node.js-215732?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
- [![Vite](https://img.shields.io/badge/Vite-363D55?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
- [![Razorpay](https://img.shields.io/badge/Razorpay-0D1A47?style=for-the-badge&logo=razorpay&logoColor=white)](https://razorpay.com/)
- [![Motion](https://img.shields.io/badge/Motion-FFA000?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)


## ✅ Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (LTS version recommended) – [Download here](https://nodejs.org/)
- **npm** or **yarn** (Comes with Node.js)
- **Git** (For cloning the repository) – [Download here](https://git-scm.com/)
- **MongoDB** (If using a local database) – [Download here](https://www.mongodb.com/try/download/community)

### Optional:

- **Vite** (For faster development with React) – [Documentation](https://vitejs.dev/)
- **Razorpay API Key** (If using payment method) – [Sign up here](https://dashboard.razorpay.com/app/dashboard/)
- **Clipdrop Account** (For image generation API) – [Sign up here](http://clipdrop.co/)

### Must-Have Basic Knowledge

To work with this project effectively, you should have **basic knowledge** of:

- JavaScript & ES6+
- React fundamentals
- Node.js & Express basics
- REST APIs & database handling (MongoDB)

Once you have these installed and understand the basics, you're ready to set up the project! 🚀

## ⚙️ Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AyushK0204/ai-image-generator.git
   ```
2. Install Dependencies

- For Client
  ```sh
  cd client
  npm install
  ```
- For Server
  ```sh
  cd..
  cd server
  npm install
  ```

3. Add Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- For Client

  `VITE_RAZORPAY_KEY_ID`
  `VITE_BACKEND_URL`

- For Server

  `JWT_SECRET`
  `MONGODB_URI`
  `CLIPDROP_API`
  `RAZORPAY_KEY_ID`
  `RAZORPAY_KEY_SECRET`
  `CURRENCY`

## 🔗 Live Website

https://ai-image-generator-client-chi.vercel.app/

![Website GIF](https://github.com/AyushK0204/ai-image-generator/blob/main/client/src/assets/piccolo-gif.gif)
