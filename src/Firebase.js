import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyChh5_jjBIfusGITsDiYwORM1YtU0DYAO0",
  authDomain: "react-authentication-2df13.firebaseapp.com",
  projectId: "react-authentication-2df13",
  storageBucket: "react-authentication-2df13.appspot.com",
  messagingSenderId: "773170523700",
  appId: "1:773170523700:web:93b33be0feea04d92f6461",
  measurementId: "G-WWKQC2S50V"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// const analytics = getAnalytics(app);
export default app;