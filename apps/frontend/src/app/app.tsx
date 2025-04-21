import { UserPage } from '@modules/user-frontend';
import { OrderPage } from '@modules/order-frontend';

function App() {
  return (
    <div className="p-8">
      <UserPage />
      <div>        
        <OrderPage />
      </div>
    </div>
  );
}

export default App;
