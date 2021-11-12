import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializer = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitializer;