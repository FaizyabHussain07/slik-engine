# 🚀 Smart Dashboard System (Firebase + Vanilla JS)

A professional, role-based dashboard system built using HTML, CSS, and Vanilla JavaScript.

## 📁 Project Structure

- `index.html`: Modern Landing Page.
- `login.html` & `register.html`: Secure Authentication Pages.
- `admin-dashboard.html`: For system administrators.
- `user-dashboard.html`: For regular users.
- `css/style.css`: Modern, responsive design system.
- `js/firebase-config.js`: Firebase configuration file.
- `js/auth.js`: Logic for registration, login, and auth monitoring.
- `js/dashboard.js`: Main logic for populating and managing dashboards.

---

## 🛠️ Step 1: Connect your Firebase

To connect your project to Firebase, follow these steps:

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Add Project"** and follow the instructions.
3.  Navigate to **Project Settings** (gear icon) and click on the **Web app** icon (`</>`).
4.  Copy the `firebaseConfig` object and paste it into `/js/firebase-config.js` to replace the placeholders.
5.  **Enable Authentication**: 
    - Go to **Build > Authentication** and enable **Email/Password** as a sign-in method.
6.  **Enable Firestore**:
    - Go to **Build > Firestore Database** and click **Create Database**.
    - Choose a location and start in **Production Mode**.
    - Copy the contents of `firestore.rules` (from this project) into the **Rules** tab of your Firestore console.

---

## 👑 Step 2: Create the First Admin

Since default registration sets every user's role to `"user"`, you must manually promote your first account:

1.  **Register** a new account via the `register.html` page.
2.  Go to your **Firebase Console > Firestore Database**.
3.  Find your user ID document in the `users` collection.
4.  Edit the `role` field from `"user"` to `"admin"`.
5.  Now, when you log in again, you'll be redirected to the **Admin Dashboard**.

---

## 🌐 Step 3: Deploy to Firebase Hosting

To deploy your live project to the web:

1.  **Install Firebase CLI**: 
    ```bash
    npm install -g firebase-tools
    ```
2.  **Login and Initialize**:
    ```bash
    firebase login
    firebase init
    ```
    - Choose **Hosting** and **Firestore** from the list.
    - Set your public directory to `./` (current directory).
    - Choose **no** for single-page app (since we use separate HTML files).
3.  **Deploy**:
    ```bash
    firebase deploy
    ```

---

## 🔥 Features Included

- **Dark Mode**: Toggle via the moon/sun icon on the landing page.
- **Role-based Redirects**: Admins see stats and a user management table; users see their profile.
- **Route Protection**: Browsing a dashboard without logging in correctly will redirect to login.
- **Responsive Sidebar**: Automatically transforms into a mobile-friendly menu on smaller screens.
- **Clean Animations**: Lucide icons and CSS transitions for a premium feel.
