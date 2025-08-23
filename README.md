# NextShop

NextShop is a simple e-commerce style application built with **Next.js 15 (App Router)**. The app includes public and protected pages with authentication using **NextAuth.js**. Users can view products and manage them after logging in.

---

## **Table of Contents**

- [Features](#features)  
- [Pages](#pages)  
- [Technologies](#technologies)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [Optional Enhancements](#optional-enhancements)  
- [Live Site](#live-site)  
- [Server Repository](#server-repository)  
- [License](#license)  

---

## **Features**

- Public Landing Page with Navbar, Hero section, Product Highlights, and Footer  
- Authentication using **NextAuth.js** (Credential login or Google login)  
- Public Product List and Product Details pages  
- Protected Product Management page (`/dashboard/add-product`)  
- Add new products to the database securely  

---

## **Pages**

### **1. Landing Page (`/`)**
- Sections: Navbar, Hero, Product Highlights, Footer  
- Navigation to Login and Product List  
- No authentication required  

### **2. Login Page (`/login`)**
- Credential login or Google login via NextAuth.js  
- Redirects to `/products` after successful login  

### **3. Product List Page (`/products`)**
- Publicly accessible  
- Fetches product list from mock backend or database  
- Displays product name, description, price, and a Details button  

### **4. Product Details Page (`/products/[id]`)**
- Publicly accessible  
- Shows full product details  

### **5. Protected Page (`/dashboard/add-product`)**
- Accessible only for authenticated users  
- Form to add a new product  
- Redirects unauthenticated users to login page  

---

## **Technologies**

- **Next.js 15 (App Router)**  
- **NextAuth.js** for authentication  
- **React** for UI components  
- **DaisyUI / TailwindCSS** for styling  
- **Route Handlers (/api)** for backend operations  
- **Optional:** Express.js for backend API  

---

## **Getting Started**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextshop.git
   cd nextshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env.local` file** in the root folder with the following content:
   ```env
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=Qwb/q+JsMnkASD1ZS7j53Q6oGTOKD92cCRKxI6q+GlY=

   # Demo User Credentials
   DEMO_USER=mdrafiislam9411@gmail.com
   DEMO_PASS=Rafi@1234

   # IMGBB API Key for image uploads
   NEXT_PUBLIC_IMGBB_KEY=902df5a8ebe6bd9e8a620ffb7477a857
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   - Starts the app in development mode  
   - Open [http://localhost:3000](http://localhost:3000)  

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Start production server**
   ```bash
   npm start
   ```

7. **Run in preview mode (after build)**
   ```bash
   npm run preview
   ```

---

## **Environment Variables**

| Variable               | Description                                           |
|------------------------|-------------------------------------------------------|
| `NEXTAUTH_URL`         | Base URL of your app (http://localhost:3000)         |
| `NEXTAUTH_SECRET`      | Secret for NextAuth.js (used for session signing)    |
| `DEMO_USER`            | Demo login email for credential login                |
| `DEMO_PASS`            | Demo login password for credential login             |
| `NEXT_PUBLIC_IMGBB_KEY`| API key for uploading images via imgbb.com           |

---

## **Optional Enhancements**

- Loading spinner when submitting forms  
- Toast message on successful product addition  
- Theme toggle (light/dark)  

---

## **Live Site**

Check out the live application here:  
👉 [NextShop Live Site](https://my-next-shop-swart.vercel.app/)

---

## **Server Repository**

The backend API and server code for NextShop can be found here:  
👉 [NextShop Server Repository](https://github.com/md-rafi-3/Next-shop-server)

---

## **License**

This project is licensed under the **MIT License**.
