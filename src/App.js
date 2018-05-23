// App.js

import React, { Component } from 'react';
import StockList from './stockList';
import UserList from './UserList';
import Hoc from './HOC';

const StocksData = [
  {
    id: 1,
    name: 'TCS'

  },
  {
    id: 2,
    name: 'Infosys'
  },
  {
    id: 3,
    name: 'Reliance'
  }
];
const UsersData = [
  {
    id: 1,
    name: 'Diljeet'

  },
  {
    id: 2,
    name: 'Aman'
  },
  {
    id: 3,
    name: 'Rishabh'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);


class App extends Component {

  render() {
    return (
      <div>
        <Stocks/>
        <br/>
        <Users></Users>
      </div>
    )
  }
}

export default App;