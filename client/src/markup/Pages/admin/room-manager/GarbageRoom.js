import { alertActions, roomActions } from 'actions';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';
import './styles.css';


function GarbageRoom(props) {
  const noDataComponentContent = 'Thùng rác rỗng';
  const alert = useSelector(state => state.alert)
  const rooms = useSelector(state => state.roomReducer.itemsDeleted)
  const pending = useSelector(state => state.roomReducer.loading)
  const [selectedRooms, setSelectedRooms] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomActions.getAllDeleted())
  },[dispatch]);

  function handleDelete(room) {
    dispatch(roomActions.remove(room._id))
  }
  function handleRestore(room) {
    dispatch(roomActions.restore(room._id))
  }

const columns = [
      {
        name: 'Room Name',
        selector: row => row.name
      },
      {
        name: 'Host',
        selector: row => row.host
      },

      {
        name: 'Type',
        selector: row => row.category
      },
      {
        name: 'Price',
        selector: row => row.price
      },
      {
        cell: (column) =>
        (<>
          <Button onClick={() => handleRestore(column)}>Restore</Button>
          <Button onClick={() => handleDelete(column)}>Delete</Button>
        </>
        ),
        buttons: true,
        allowOverflow: true,
      }
    ]
  const handleChange = ({ selectedRows }) => {
    setSelectedRooms(selectedRows)
  };
  const handleRestoreMany = () => {
    if (selectedRooms.length > 0) {
      selectedRooms.forEach((value) => {
        handleRestore(value)
      })
    } else {
      dispatch(alertActions.error('Chưa chọn room cần hồi phục'))
    }
  }
  const handleDeleteMany = () => {
    if (selectedRooms.length > 0) {
      selectedRooms.forEach((value) => {
        handleDelete(value)
      })
    } else {
      dispatch(alertActions.error("Chưa chọn room để xóa"))
    }
  }

  return (
    <div className="mt-5 mx-5">
      <Link to="/admin/rooms-manager">Quay lại</Link>
      <div className="text-right mb-5">
        <Button onClick={() => handleRestoreMany()}>Restore</Button>
        <Button onClick={() => handleDeleteMany()}>Delete</Button>
      </div>
      {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <DataTable
        title='Room Garbage'
        columns={columns}
        data={rooms}
        selectableRows
        onSelectedRowsChange={handleChange}
        pagination
        theme="dark"
        noDataComponent={noDataComponentContent}
        progressPending={pending} />
    </div>
  )
}

export default GarbageRoom 