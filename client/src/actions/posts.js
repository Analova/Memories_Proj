import * as api from "../api"

export const getPosts=()=> async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts()

        dispatch({type:"FETCH_ALL", playload:data})
    }catch(error){
        console.log(error.message)

    }
}