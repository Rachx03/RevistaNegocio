'use client'
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAW0Vajn-5wpUaPz4HjwlqcYjXI4aLNMi8",
  authDomain: "revistatechno.firebaseapp.com",
  projectId: "revistatechno",
  storageBucket: "revistatechno.firebasestorage.app",
  messagingSenderId: "83602747773",
  appId: "1:83602747773:web:b44fd66c0518a4615e9c14",
  measurementId: "G-HB3TT53WF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function FirebaseAnalytics() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Evento ejemplo para probar
    logEvent(analytics, 'page_view');
  }, []);

  return null; // Este componente no renderiza nada
}