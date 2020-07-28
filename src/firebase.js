import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: 'backend-36356',
  storageBucket: 'backend-36356.appspot.com',
  messagingSenderId: '724136616956',
  appId: '1:724136616956:web:440ea1c5859fd568e1c879',
  measurementId: 'G-2ZML52PWLY',
};

firebase.initializeApp(config);
export default firebase.firestore();
