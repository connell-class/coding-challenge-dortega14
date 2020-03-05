import React from 'react';
// import './App.css';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { GroceryListTable } from './components/list-table/GroceryListTable';
import { GroceryItemTable } from './components/item-table/GroceryItemTable';
import { history } from './utility/history';
import NavBarComponent from './assets/NavBarComponent';
import CreateGroceryListComponent from './components/add-list/CreateGroceryListContainer';
import { store } from './store';

function App() {
  return (
    <>
      {/* <div className="mainPage">*/}
        <Provider store={store}>
          <Router history={history}> 
              <NavBarComponent />
            <Switch>
              {/* <Route path="/register" component={RegisterComponent} />
              <Route path="/createbatch" component={CreateComponent}/>
              <Route path="/addresses" component={AddressTableComponent}/>
              <Route path="/newaddress" component={CreateAddressComponent}/> */}
              <Route path="/addlist" component={CreateGroceryListComponent}/>
              <Route path="/groceryitem" component={GroceryItemTable}/>
              <Route path="/grocerylist" component={GroceryListTable}/>
              {/* <Route path="/" component={LoginComponent} /> */}
            </Switch>
          </Router>
        </Provider>

        <div className="footer"></div>
      {/* </div> */}
    </>
  );
}

export default App;
