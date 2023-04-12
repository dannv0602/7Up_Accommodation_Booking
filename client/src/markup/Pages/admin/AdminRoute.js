import { history } from 'helpers';
import Header from 'markup/Layout/Header';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Garbage from './user-manager/Garbage';
import UsersManager from './user-manager/UsersManager';

function AdminRoute(props) {

  return (
    <div>
      <Header />
      <PrivateRouter history={history} basename="/admin" >
        <div className="page-wraper">
          <Switch>
            <Route path={['/', 'users-manager']} exact component={UsersManager} />
            <Route path='/users-manager/garbage' exact component={Garbage} />
          </Switch>
        </div>

      </PrivateRouter>
    </div>
  )
}

export default AdminRoute