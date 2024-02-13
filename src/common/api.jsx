import axios from "axios"
import { global } from "./global"
import config from "./config"

axios.defaults.baseURL = `${config.server}${config.baseURL}`
export const getProfile = async (walletAddress) => {
    return (await axios.post(`/user/userLP/profile`, {
        walletAddress
    })).data;
}

export const createProfile = async (walletAddress) => {
    return (await axios.post(`/user/userLP/createProfile`, {
        walletAddress
    })).data;
}

export const createRefCode = async (walletAddress, ref) => {
    return (await axios.post(`/user/userLP/createRefCode`, {
        walletAddress,
        ref
    })).data;
}

export const addRefer = async (walletAddress, amount, refLink) => {
    return (await axios.post(`/user/userLP/addRefer`, {
        walletAddress,
        amount,
        refLink
    })).data;
}

export const getRefCodeList = async (walletAddress) => {
    return (await axios.post(`/user/userLP/getRefCodeList`, {
        walletAddress,
    })).data;
}