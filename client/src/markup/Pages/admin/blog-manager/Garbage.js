import { alertActions, userActions } from 'actions';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';
import './styles.css';

function Garbage(props) {
  const alert = useSelector(state => state.alert)
  const users = useSelector(state => state.userReducer.items)
  const pending = useSelector(state => state.userReducer.loading)
  const dispatch = useDispatch();
  const [selectedUsers, setSelectedUsers] = useState([])
  useEffect(() => {
    dispatch(userActions.getAllDeleted())
  }, [dispatch]);

  function handleDelete(user) {
    dispatch(userActions.remove(user._id))
  }

  function handleRestore(user) {
    dispatch(userActions.restore(user._id))
  }
  const columns =[
      {
        name: 'Username',
        selector: row => row.username
      },
      {
        name: 'Email',
        selector: row => row.email
      },
      {
        name: 'Phone Number',
        selector: row => row.phoneNumber
      },
      {
        name: 'Full Name',
        selector: row => row.fullname,
        sortable: true
      },
      {
        name: 'Address',
        selector: row => row.address
      },
      {
        name: 'Role',
        selector: row => row.roles,
      },
      {
        cell: (column) =>
        (<>
          <Button onClick={() => handleRestore(column)}>Restore</Button>
          <Button onClick={() => handleDelete(column)}>Delete</Button>
        </>
        ),
        buttons: true,
        ignoreRowClick:true,
        allowOverflow: true,
      }
    ]
  const handleChange = ({ selectedRows }) => {
    setSelectedUsers(selectedRows);
  };
  const handleRestoreMany = () => {
    if (selectedUsers.length > 0) {
      selectedUsers.forEach((value) => {
        handleRestore(value)
      })
    } else {
      dispatch(alertActions.error("Chưa chọn user để restore"))
    }
  }
  const handleDeleteMany = () => {
    if (selectedUsers.length > 0) {
      selectedUsers.forEach((value) => {
        handleDelete(value)
      })
    } else {
      dispatch(alertActions.error("Chưa chọn user để xóa"))
    }
  }
  return (
    <div className="mt-5 mx-5">
      <Link to="/admin/users-manager">Quay lại</Link>
      <div className="text-right mb-5">
        <Button onClick={() => handleRestoreMany()}>Restore</Button>
        <Button onClick={() => handleDeleteMany()}>Delete</Button>
      </div>
      {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <DataTable
        title='User Garbage'
        columns={columns}
        data={users}
        selectableRows
        onSelectedRowsChange={handleChange}
        pagination
        progressPending={pending}
        theme="dark"
      />
    </div>
  )
}


export default Garbage