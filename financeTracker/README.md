# Personal Finance Tracker App

A mobile-friendly **Personal Finance Tracker** built with **React Native** and **Firebase**. The app allows users to track income and expenses, categorize transactions, view totals, filter by month, and search transactions by description, category, or amount.

## Features

- **Authentication** using Firebase (Signup/Login/Logout)
- **Add, edit, and delete transactions**
- **Transaction types**: income or expense
- **Categories**: context-aware for income or expense
- **Filter transactions by month**
- **Search** transactions by description, category, or amount
- **Visual overview** of income, expenses, and balance
- **Protected navigation** based on login state
- **Firebase Firestore** for backend data storage

---

## Tech Stack

- **React Native**
- **Firebase Authentication**
- **Firebase Firestore**
- **React Navigation**
- **React Context API**
- **React Native Chart Kit**

---

## Getting Started

### 1. Clone the repository

git clone https://github.com/hlaing_INF657/financeTracker.git
cd finance-tracker

### 2. Install dependencies

npm install

### 3. Run the app

npx expo start
Make sure you have Expo CLI installed: npm install -g expo-cli

---

## Folder Structure

src
├── components/
│ ├── Navbar.jsx
| └── Chart.jsx
├── contexts/
│ ├── AuthContext.jsx
│ └── TransactionContext.jsx
├── navigation/
│ └── AppNavigator.jsx
├── screens/
│ ├── HomeScreen.jsx
│ ├── Charts.jsx
│ ├── AddTransactionScreen.jsx
│ ├── EditTransactionScreen.jsx
│ ├── TransactionListScreen.jsx
│ ├── SearchScreen.jsx
│ ├── LoginScreen.jsx
│ └── SignupScreen.jsx
└── utils/
└── firebase.jsx

---

## Credits

Developed by Gabriel Hlaing as part of a frontend development project assignment.
