import {User} from "../../../../Domain/Entities/User";
import React from "react";
import {UseAuth} from "../Hooks/UseAuth";


interface IAuthContext {
    signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    user: User | null;
    isLoading: boolean;
}

export const AuthContext = React.createContext<IAuthContext>( {} as IAuthContext);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const {SignInWithEmailAndPassword, SignOut, user, isLoading} = UseAuth();
    return (
        <AuthContext.Provider value={{signInWithEmailAndPassword: SignInWithEmailAndPassword, signOut: SignOut, user, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);
