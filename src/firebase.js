import { initializeApp } from "firebase/app";
import {getFiresstore} from "@firebase/firesstore";
const firebaseConfig = {
  apiKey: "AIzaSyDiLM0y6vZY98O1DNsjsp15MW-gAuG-HhQ",
  authDomain: "fir-b1161.firebaseapp.com",
  projectId: "fir-b1161",
  storageBucket: "fir-b1161.appspot.com",
  messagingSenderId: "625573671204",
  appId: "1:625573671204:web:4a8b419bb860407fbc83b1"
};

const app = initializeApp(firebaseConfig);
 export const firesstore = getFiresstore(app);