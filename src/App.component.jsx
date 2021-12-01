import { AppBlock, AppContainer } from "./App.styles";
import CreateOrder from "./components/create-order/CreateOrder.component";
import DashboardOrders from "./components/dashboard-orders/DashboardOrders.component";
import DeleteOrder from "./components/delete-order/DeleteOrder.component";
import UpdateOrderStatus from "./components/update-status/UpdateOrderStatus.component";
import ViewOrders from "./components/view-orders/ViewOrders.component";

function App() {
  return (
    <AppContainer>
      <AppBlock flex={2}>
        <h1>View Orders</h1>
        <ViewOrders />
      </AppBlock>
      <AppBlock bkgColor="rebeccapurple">
        <h1>Dashboard </h1>
        <DashboardOrders />
      </AppBlock>
      <AppBlock bkgColor="purple">
        <h1>Create Order</h1>
        <CreateOrder />
      </AppBlock>
      <AppBlock bkgColor="darkgoldenrod">
        <h1>Update Order </h1>
        <UpdateOrderStatus />
      </AppBlock>
      <AppBlock bkgColor="crimson">
        <span style={{ fontSize: "12px", color: "white" }}>
          (Challenge Yourself)
        </span>
        <h1>Delete Order</h1>
        <DeleteOrder />
      </AppBlock>
    </AppContainer>
  );
}

export default App;
