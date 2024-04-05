 // Firebase SDK 라이브러리 가져오기
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
 import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
 import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

 // Firebase 구성 정보 설정
 const firebaseConfig = {
     apiKey: "AIzaSyAIP8svZiWmrZ5hcYP2R-qSeGapwrJESxk",
     authDomain: "ilboon.firebaseapp.com",
     projectId: "ilboon",
     storageBucket: "ilboon.appspot.com",
     messagingSenderId: "889902979830",
     appId: "1:889902979830:web:e06a486199415e115bead7",
     measurementId: "G-RZSDVG93QH"
 };

 // Firebase 인스턴스 초기화
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);