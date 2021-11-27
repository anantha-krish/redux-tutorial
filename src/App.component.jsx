import { AppBlock, AppContainer } from "./App.styles";
import CreateOrder from "./components/create-order/CreateOrder.component";
import DashboardOrders from "./components/dashboard-orders/DashboardOrders.component";
import DeleteOrder from "./components/delete-order/DeleteOrder.component";
import UpdateOrderStatus from "./components/update-status/UpdateOrderStatus.component";
import ViewOrders from "./components/view-orders/ViewOrders.component";

function App() {
  return (
    <AppContainer>
      <AppBlock flex="2">
        <h1>View Orders</h1>
        <ViewOrders />
      </AppBlock>
      <AppBlock flex="1">
        <h1>Dashboard </h1>
        <DashboardOrders />
      </AppBlock>
      <AppBlock flex="1">
        <h1>Create </h1>
        <CreateOrder />
      </AppBlock>
      <AppBlock flex="1">
        <h1>Update </h1>
        <UpdateOrderStatus />
      </AppBlock>
      <AppBlock flex="1">
        <h1>Delete </h1>
        <DeleteOrder />
      </AppBlock>
    </AppContainer>
  );
}

export default App;
