import axios from "axios"

const uploadImage = async(file) => {
    if(!file) return

    try{
        const formData = new FormData()
        formData.append('upload_preset', 'curso-vue')
        formData.append('file', file)

        const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dxhd2qugi/image/upload' 

        const { data } = await axios.post(cloudinaryURL, formData)
        const { secure_url } = data

        return secure_url
    }catch(error){
        console.log(error);
    }
}

export default uploadImage