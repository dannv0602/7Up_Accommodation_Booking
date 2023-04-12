import axiosClient from "../api/axiosClient";

export const uploadService = {  
    uploadSingleImage,
    uploadMultiImage
};
function uploadSingleImage(file){
    const url ='/uploads/image';
    return axiosClient.post(url, file);
}
function uploadMultiImage(file){
    const url ='/uploads/multi-images';
    return axiosClient.post(url, file);
}