import { db } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export async function PATCH(request, context) {
  try {
    const { id } = context.params;
    const body = await request.json();

    await updateDoc(doc(db, 'pokemoni', id), body);

    return new Response('Document replaced successfully', { status: 200 });
  } catch (error) {
    console.error('Error replacing document:', error);
    return new Response('Error replacing document', { status: 500 });
  }
}
