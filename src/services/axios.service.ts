import axios, {AxiosError} from "axios";
import {createBrowserHistory} from 'history'

import {baseURL, urls} from "../constants";
import {authService} from "./auth.service";
import {IWaitListCB} from "../types";

const axiosService = axios.create({baseURL});

let isRefreshing = false

const waitList:IWaitListCB[] = []

const history = createBrowserHistory({window});
axiosService.interceptors.request.use(res=>{
    const access = authService.getAccessToken();
    if(access){
        res.headers.Authorization = `Bearer ${access}`
    }
    return res
})

axiosService.interceptors.response.use(
    res=>{
    return  res
},
   async (error:AxiosError)=>{
        const originalRequest = error.config;
        if (error.response.status === 401){
            if (!isRefreshing){
                isRefreshing = true
                try {
                    await authService.refresh()
                    isRefreshing = false
                    afterRefresh()
                    return axiosService(originalRequest)
                }catch (e) {
                    authService.deleteToken()
                    isRefreshing = false
                    history.replace('/login?expSession=true')
                    return Promise.reject(error)
                }
            }
            if (originalRequest.url === urls.auth.refresh){
                return Promise.reject(error)
            }
            return new Promise(resolve => {
                subscribeToWaitList(() => {
                    resolve(axiosService(originalRequest))
                })
            })
        }
       return Promise.reject(error)
   }

)

const subscribeToWaitList = (cb:IWaitListCB):void => {
    waitList.push(cb)
}

const afterRefresh = () => {
    while (waitList.length){
        const cb = waitList.pop();
        cb();
    }
}

export {
    axiosService,
    history
}