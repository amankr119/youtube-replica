import axios from "axios";
const base_url = "https://www.googleapis.com/youtube/v3"
const Api_Key = "AIzaSyB51SCnclnKDzYRsvLIUPk-kGTkm5F3X9c";

export const fetchApiForYoutubeData = async(endpoint, params = {})=>{
    try {
        const response = await axios.get(`${base_url}/${endpoint}`, {
            params:{
                ...params,
                key:Api_Key,
            }
        })
        // console.log('this is my response', response.data)
        return response.data;
    } catch (error) {
        console.error(error, 'error fetching youtube data');
    }
}