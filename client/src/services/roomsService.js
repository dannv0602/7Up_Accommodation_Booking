import axiosClient from "../api/axiosClient";


export const roomsService = {
    getAll,
    getById,
    getAllDeleted,
    update,
    create,
    deleteRoom,
    removeRoom,
    restoreRoom,
    groupByProvince,
    getByProvince,
    formatPrice,
};



// function getAll() {
//     const url = `/api/v1/rooms`;
//     return axiosClient.get(url);
//
// }
function getAll() {
    let url =`/api/v1/rooms`
    return axiosClient.get(url);

}

function getById(id) {
    const url = `/api/v1/rooms/${id}`;
    return axiosClient.get(url);
}
function getAllDeleted() {
    const url = `/api/v1/rooms/garbage`;
    return axiosClient.get(url);
}

function create(room) {
    const url = `/api/v1/rooms`;
    return axiosClient.post(url, room)
}
function update(id, newRoom) {
    const url = `/api/v1/rooms/${id}`;
    return axiosClient.put(url, newRoom);
}
function deleteRoom(id) {
    const url = `/api/v1/rooms/${id}`;
    return axiosClient.delete(url);
}

function removeRoom(id) {
    const url = `/api/v1/rooms/remove/${id}`;
    return axiosClient.delete(url);
}
function restoreRoom(id) {
    const url = `/api/v1/rooms/restore/${id}`;
    return axiosClient.post(url);
}
function groupByProvince(id) {
    const url = `/api/v1/rooms/province/${id}`;
    return axiosClient.get(url);
}
function getByProvince(id) {
    const url = `/api/v1/rooms/province/${id}`;
    return axiosClient.get(url);
}
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style:'currency',
        currency:'VND'
    }).format(price)
}