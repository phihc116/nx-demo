import { useState, useEffect } from 'react';

interface Order {
  id: number;
  status: string;
}

export function OrderPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetch('/api/orders/1')
      .then((response) => response.json())
      .then((data: Order) => setOrder(data));
  }, []);

  return (
    <div>
      {order ? (
        <div>
          <h1>Order #{order.id}</h1>
          <p>Status: {order.status}</p>  
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
