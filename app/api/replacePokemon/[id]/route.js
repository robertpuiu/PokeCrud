import { db } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function PUT(request, context) {
  try {
    const { id } = context.params;
    const body = await request.json();

    await setDoc(doc(db, 'pokemoni', id), body);

    return new Response('Document replaced successfully', { status: 200 });
  } catch (error) {
    console.error('Error replacing document:', error);
    return new Response('Error replacing document', { status: 500 });
  }
}
