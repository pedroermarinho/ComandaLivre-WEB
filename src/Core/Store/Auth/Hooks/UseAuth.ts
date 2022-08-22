import authConstant from "../AuthConstant";
import {User} from "../../../../Domain/Entities/User";
import {useEffect, useState} from "react";
import {api} from "../../../Services/Api/Api";

interface IAuth {
    user: User;
    token: string;
}

export const UseAuth = () => {

    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const recoverAuth = () => {
        const {userStored, tokenStored} = recoverCookies();
        if(!!userStored && !!tokenStored) {
            setUser(userStored);
            setIsLoading(true);
        }else{
            signOut();
        }
    }

    const signInWithEmailAndPassword = async (email:string, password:string) => {
        const response = await api().post("/auth/login", {email, password});
        const auth:IAuth = response.data;
        addCookies(auth.user, auth.token);
        recoverAuth();
    }

    const signOut = () => {
        removeCookies();
        setUser(null);
        setIsLoading(false);
    }

    useEffect(() => {
      recoverAuth();
    },[])

    return  {SignInWithEmailAndPassword: signInWithEmailAndPassword, SignOut: signOut, user, isLoading};

}

const removeCookies = () => {
    localStorage.removeItem(authConstant.AUTH_USER);
    localStorage.removeItem(authConstant.AUTH_TOKEN);
    localStorage.removeItem(authConstant.AUTH_REFRESH);
}

const addCookies = (user:User, token:string, authRefresh?:string) => {
    localStorage.setItem(authConstant.AUTH_USER, JSON.stringify(user));
    localStorage.setItem(authConstant.AUTH_TOKEN, token);
    authRefresh && localStorage.setItem(authConstant.AUTH_REFRESH, authRefresh);
}

const recoverCookies = () => {
    const userStored = convertUser(localStorage.getItem(authConstant.AUTH_USER));
    const tokenStored = localStorage.getItem(authConstant.AUTH_TOKEN);
    const authRefreshStored = localStorage.getItem(authConstant.AUTH_REFRESH);
    return {userStored: userStored, tokenStored: tokenStored, authRefreshStored: authRefreshStored};
}

const convertUser = (user:string | null):User | null => {
    if(user) return JSON.parse(user)??null;
    return null;
}
