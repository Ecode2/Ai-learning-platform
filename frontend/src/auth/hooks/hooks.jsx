import {useContext} from 'react';
import {AuthContext} from '../AuthContext';


/* export function useConfig () {
return useContext(AuthContext)?.config
} */

export const useUser = () => {
    return useContext(AuthContext)?.user
}

export const useLogin = () => {
    return useContext(AuthContext)?.login
}
export const useLogout = () => {
    return useContext(AuthContext)?.logout
}
export const useSignUp = () => {
    return useContext(AuthContext)?.register
}