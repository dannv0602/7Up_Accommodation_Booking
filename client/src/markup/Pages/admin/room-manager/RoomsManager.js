import {alertActions, roomActions} from 'actions';
import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import {Button, Label} from 'reactstrap';
import RoomModal from './RoomModal';

function RoomsManager(props) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [editableRoom, setEditableRoom] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState([]);
  const [isSearch, setIsSearch] = useState(false)
  const [searchBy, setSearchBy] = useState("name");

  const alert = useSelector(state => state.alert);
  const rooms = useSelector(state => state.roomReducer.items)
  const roomsSearch = useSelector(state => state.roomReducer.itemsSearch)
  const pending = useSelector(state => state.roomReducer.loading)
  const dispatch = useDispatch();
  const columns = [
    {
      name: 'Room Name',
      selector: row => row.name
    },
    {
      name: 'Type',
      selector: row => row.category.name
    },
    {
      name: 'Price',
      selector: row => row.price
    },
    {
      buttons: true,
      cell: (column) =>
      (<>
        <Button onClick={() => handleEdit(column)}>Edit</Button>
        <Button onClick={() => handleDelete(column)}>Delete</Button>
      </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    }

  ]
  useEffect(() => {
    dispatch(roomActions.getAll())
  }, [dispatch]);

  function handleDelete(room) {
    const id = room.id;
    dispatch(roomActions.delete(id))
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
  const handleChange = ({ selectedRows }) => {
    setSelectedRooms(selectedRows)
  };

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  const handleAdd = () => {
    setIsAddModal(true)
    setEditableRoom();
    handleOpenModal()
  }
  const handleEdit = (room) => {
    setIsAddModal(false)
    setEditableRoom(room)
    handleOpenModal()
  }
  const handleSearch = (e) => {
    const { value } = e.target;
    dispatch(roomActions.search(searchBy, value));
  }
  const handleSearchBy = (e) => {
    const { value } = e.target;
    setSearchBy(value)
  }
  const handleFocus = () => {
    setIsSearch(true);
  }
  return (
    <div>
      <div className="mt-5 mx-5 mb-5">

        <Link to='/admin/rooms-manager/garbage'>Thùng rác của tôi</Link>

        <div className="text-right mb-5">
          <Button onClick={() => handleAdd()}>Add</Button>
          <Button onClick={() => handleDeleteMany()}>Delete</Button>
        </div>
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Label className="mr-5">Search:</Label>
        <input
          onChange={(e) => handleSearch(e)}
          onFocus={(e) => handleFocus(e)}
          name="keySearch"
          placeholder={'Search by ' + searchBy}
          type="text" />
        <select style={{ marginLeft: "5px", height: "30px" }} onChange={(e) => handleSearchBy(e)}>
          <option value="name" defaultChecked>Name</option>
        </select>
        <DataTable
          title='Room Store'
          columns={columns}
          data={isSearch ? roomsSearch : rooms}
          theme="dark"
          selectableRows
          onSelectedRowsChange={handleChange}
          pagination
          progressPending={pending}
        />
      </div>
      {isAddModal &&
        <RoomModal
          isAdd={isAddModal}
          isOpen={isOpenModal}
          toggle={handleOpenModal}
        ></RoomModal>
      }
      {!isAddModal &&
        <RoomModal
          isAdd={isAddModal}
          room={editableRoom}
          isOpen={isOpenModal}
          toggle={handleOpenModal}
        ></RoomModal>
      }
    </div>
  )
}

export default RoomsManager
