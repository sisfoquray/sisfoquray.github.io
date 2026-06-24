import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjDCNFdFwJaIkWUtKkx-E9MQv7BLWGcmo",
  authDomain: "sisfo-151fa.firebaseapp.com",
  projectId: "sisfo-151fa",
  storageBucket: "sisfo-151fa.firebasestorage.app",
  messagingSenderId: "163695339142",
  appId: "1:163695339142:web:cca30441cf2c46f57e5307",
  measurementId: "G-VGGTQ2CNJ8"
};

// Inisialisasi Firebase App
export const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore dengan Mesin Cache Lokal Cerdas (Menghemat 95% Kuota Reads)
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
  })
});
