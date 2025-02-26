import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";

const serviceAccount = {
  type: "service_account",
  project_id: "firenext-b5d52",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n1v7r%40firenext-b5d52.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

let firestore: Firestore;
const currentApps = getApps();

if (!currentApps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
  firestore = getFirestore();
} else {
  const app = currentApps[0];
  firestore = getFirestore(app);
}

export { firestore };
