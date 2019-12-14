import firebase from 'firebase';
import "firebase/firestore";

function parseDoc(doc) {
  return {
    id: doc.id,
    ...doc.data()
  }
}

let db;
function getDbInstance() {
  if (!db || db._isTerminated) {
    db = firebase.firestore();
  }
  return db;
}

async function getAll(collection) {
  const db = getDbInstance();
  const collectionData = await db.collection(collection).get();
  
  const results = [];
  collectionData.forEach((document) => {
    results.push(parseDoc(document));
  });

  return results;
}

async function getAllRealTime({ collection, filters, order, callback }) {
  let db = getDbInstance();
  db = db.collection(collection);
  if (filters){
    db = db.where(filters.field, filters.condition, filters.value);
  }
  if (order){
    db = db.orderBy(order);
  }
  db.onSnapshot(callback)
}

async function addItem(collection, item) {
  const db = getDbInstance();
  const result = await db.collection(collection).add(item)
  return !!result.id;
}

async function addItemWithId(collection, item, id) {
  const db = getDbInstance();
  const result = await db.collection(collection).doc(id).set(item);
  return !result;
}

async function updateItem(collection, item, id) {
  const db = getDbInstance();
  const result = await db.collection(collection).doc(id).set(item);
  return !result;
}

async function getItem(collection, itemId) {
  const db = getDbInstance();
  const document = await db.collection(collection).doc(itemId).get();
  
  if (document.exists) {
    return parseDoc(document);
  } 
  return null; 
}

async function deleteItem(collection, itemId) {
  const db = getDbInstance();
  const result = await db.collection(collection).doc(itemId).delete();
  return !result;
}


export {
  getAll,
  addItem,
  getItem,
  getAllRealTime,
  deleteItem,
  addItemWithId,
  updateItem
}