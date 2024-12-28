import React, {useContext, createContext, useEffect, useState} from "react";
import { fetchApiForYoutubeData } from "../utils/fetchApi";

export const Context = createContext();

export const AppContext = (({children})=>{
    const [selectedCategory, setSelectedCategory] = useState('0')
    const [loading, setLoading] = useState(false);
    const [videoData, setVideoData] = useState([])
    const [mobileMenu, setMobileMenu] = useState(false);

    const fetchYoutubeData = async (params) => {
        setLoading(true);
        try {
            const res = await fetchApiForYoutubeData("videos", params);
            if (res && res.items) {
                setVideoData(res.items);
            } else {
                // Fallback to an empty array if items are undefined
                setVideoData([]);
                console.error("No items found in response");
            }
        } catch (err) {
            console.error("Error fetching YouTube data:", err);
        } finally {
            setLoading(false);
        }
    };    

    useEffect(()=>{
        if(selectedCategory){
            if(selectedCategory === 0){
                fetchYoutubeData({
                    part: 'snippet,contentDetails,statistics',
                    chart: 'mostPopular',
                    regionCode: 'IN',
                    maxResults: 45,
                    videoCategoryId: 0,
                    key: 'YOUR_API_KEY'
                })
            }
            else{
                fetchYoutubeData({
                    part:'snippet,contentDetails,statistics',
                    chart:"mostPopular",
                    regionCode:'IN',
                    maxResults:45,
                    videoCategoryId:selectedCategory
                })
            }
        }
    }, [selectedCategory])

    return(
        <Context.Provider 
        value={{selectedCategory, setSelectedCategory, setMobileMenu, mobileMenu, videoData, loading, setLoading}}>
        {children}
        </Context.Provider>
    )
})

export const useAppContext = () =>{
    return useContext(Context)
}