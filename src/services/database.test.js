/* eslint-disable no-undef */
import firebase from 'firebase';
import { getItem, deleteItem, addItemWithId } from './database';
import 'firebase/firestore';
import config from '../config';
firebase.initializeApp(config.firebaseConfig);

describe('API - crud testing', () => {
  it('API - testing adding item with id', async () => {
    const collection = 'books';
    const item = 'aaa';
    const id = '1234';
    const result = await addItemWithId(collection, item, id);
    expect(!!result).toBe(true);
  });
  it('API - get item', async () => {
    const collection = 'books';
    const itemId = '1234';
    const result = await getItem(collection, itemId);
    expect(!!result).toBe(true);
  });
  it('API - delete item', async () => {
    const collection = 'books';
    const itemId = '1234';
    const result = await deleteItem(collection, itemId);
    expect(!!result).toBe(true);
  });
});