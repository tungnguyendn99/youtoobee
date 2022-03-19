import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcf-slbKGC1AioCpMeJlfZl3dmMCakxfU",
  authDomain: "youtoobee-99.firebaseapp.com",
  projectId: "youtoobee-99",
  storageBucket: "youtoobee-99.appspot.com",
  messagingSenderId: "444469122779",
  appId: "1:444469122779:web:5f5308fcfd302335341efe",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
