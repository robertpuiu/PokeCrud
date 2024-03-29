import { db } from '../../../firebase.js';
import { addDoc, collection } from 'firebase/firestore';

export async function POST(request) {
  try {
    const body = await request.json();
    await addDoc(collection(db, 'pokemoni'), body);
    return new Response('Document created successfully', { status: 201 });
  } catch (error) {
    console.error('Error creating document:', error);
    return new Response('Error creating document', { status: 500 });
  }
}
