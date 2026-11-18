// Firebase bağlantı ayarları ve uygulamayı kullanabilecek kişiler.
// Kullanıcı adı ile girilir. Arka planda "kullaniciadi@EMAIL_DOMAIN" e-postasına çevrilir.
// Yeni kişi eklemek için PEOPLE listesine bir satır ekleyin (ve firestore.rules'ta da aynı adresi yetkilendirin).

export const firebaseConfig = {
  apiKey: "AIzaSyAGtw7G9IyfylLe7EF3kR9ZvuU_3-_nF_w",
  authDomain: "takip-listesi-2b01a.firebaseapp.com",
  projectId: "takip-listesi-2b01a",
  storageBucket: "takip-listesi-2b01a.firebasestorage.app",
  messagingSenderId: "785563920465",
  appId: "1:785563920465:web:20a9d7acbae356af067070"
};

export const EMAIL_DOMAIN = "takip.example.com";

export const PEOPLE = [
  { name: "Yağız", email: "yagiz@takip.example.com" }
];
