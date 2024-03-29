import { db } from '../../../../firebase';
import { getDocs, collection } from 'firebase/firestore';

export async function GET(request, context) {
  try {
    const { index } = context.params;
    const querySnapshot = await getDocs(collection(db, 'pokemoni'));
    const data = querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .find((pokemon) => pokemon.index == index);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response('Error fetching data', { status: 500 });
  }
}
