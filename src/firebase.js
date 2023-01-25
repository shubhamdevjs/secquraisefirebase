import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDRDuLJRnZYvuV7_HnTZUcr5dAGw9h9lFs",
  authDomain: "secquraise-bea6c.firebaseapp.com",
  databaseURL: "https://secquraise-bea6c-default-rtdb.firebaseio.com",
  projectId: "secquraise-bea6c",
  storageBucket: "secquraise-bea6c.appspot.com",
  messagingSenderId: "736001687778",
  appId: "1:736001687778:web:38d3e3a1f02ee100265ebb",
  measurementId: "G-CKZRV07K5W"
};
  
  // const db = getDatabase(app);

  // useEffect(()=>{
  //   onValue(ref(db), snapshot =>{
  //   const data = snapshot.val()
  //   console.log(data)
  // })
  // },[])

  export const app = initializeApp(firebaseConfig);
  

 
  // console.log('hello')


  // export default app