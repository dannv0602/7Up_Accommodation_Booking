import axiosClient from "api/axiosClient"

export const blogService = {
    getAll,
    getById,
    create,
    update,
    _delete,
}
function getAll() {
    const url = '/api/v1/blogs'
    return axiosClient.get(url)
}
function getById(id) {
    const url = `/api/v1/blogs/${id}`
    return axiosClient.get(url)
}
function create(blog) {
    const url = '/api/v1/blogs/';
    return axiosClient.post(url, blog);
}
function update(id, blogData) {
    const url = `/api/v1/blogs/${id}`
    return axiosClient.put(url, blogData)
}
function _delete(id){
    const url = `/api/v1/blogs/${id}`
    return axiosClient.delete(url)
}