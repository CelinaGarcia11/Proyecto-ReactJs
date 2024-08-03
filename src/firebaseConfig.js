import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8RyNyvGXF3kzp1NOW8dG6YvY0RW8AC5U",
  authDomain: "olivia-indumentaria-ecommerce.firebaseapp.com",
  projectId: "olivia-indumentaria-ecommerce",
  storageBucket: "olivia-indumentaria-ecommerce.appspot.com",
  messagingSenderId: "410994576895",
  appId: "1:410994576895:web:b01caa3ea97fba61ecabca"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
