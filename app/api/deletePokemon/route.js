import { db } from '../../../firebase.js';
import { deleteDoc, doc } from 'firebase/firestore';

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await deleteDoc(doc(db, 'pokemoni', id));
    return new Response('Document deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting document:', error);
    return new Response('Error deleting document', { status: 500 });
  }
}
