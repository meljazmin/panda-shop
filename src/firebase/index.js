import firebase from 'firebase/app';
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDCDVBaSp_B2UvedFvLLRhx81bg8KdRe_I",
    authDomain: "red-panda-dca19.firebaseapp.com",
    projectId: "red-panda-dca19",
    storageBucket: "red-panda-dca19.appspot.com",
    messagingSenderId: "833890112094",
    appId: "1:833890112094:web:6fa8c6b9492b132a325acf"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}

export const getDocData = (doc) => {
    return { id: doc.id, ...doc.data() };
}

export const getCollection = (collectionName) => {
    const db = getFirestore();
    const collection = db.collection(collectionName);
    return collection.get().then(querySnapshot => {
        if (querySnapshot.size === 0) {
            throw new Error('Collection vacia');
        }
        return querySnapshot.docs.map(doc => getDocData(doc));
    });
}