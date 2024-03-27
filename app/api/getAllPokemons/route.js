import { db } from '../../../firebase.js';
import { getDocs, collection } from 'firebase/firestore';

export async function GET(request) {
  try {
    const querySnapshot = await getDocs(collection(db, 'pokemoni'));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response('Error fetching data', { status: 500 });
  }
}
