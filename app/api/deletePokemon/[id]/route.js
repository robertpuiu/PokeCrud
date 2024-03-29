import { db } from '../../../../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export async function DELETE(request, context) {
  try {
    const { id } = context.params;
    console.log('Deleting document with id:', id);
    console.log(doc(db, 'pokemoni', id));
    await deleteDoc(doc(db, 'pokemoni', id));
    return new Response('Document deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting document:', error);
    return new Response('Error deleting document', { status: 500 });
  }
}
