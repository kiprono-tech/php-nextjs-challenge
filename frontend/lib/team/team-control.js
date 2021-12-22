export async function getMovements(params) {
  
  try {
    const movements = await fetch(`${process.env.NEXT_PUBLIC_API}/earth`, {
      method: 'GET',
    }).then((res) => res.json());
    
    return movements.data;

  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getFinalPosition(data) {
  
  try {
    
    const movements = await fetch(`${process.env.NEXT_PUBLIC_API}/final-position`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());
    
    return movements;

  } catch (error) {
    throw new Error(error.message);
  }
}