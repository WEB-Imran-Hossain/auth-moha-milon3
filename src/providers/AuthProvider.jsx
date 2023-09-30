import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    // const authInfo = { name: 'nodi sagor khal bill' }
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // sign in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }






    // observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing current user inside useEffect of AuthProvider', currentUser);
            setUser(currentUser);
            setLoading(false);
        });


        return () => {
            unSubscribe();
        }
    }, [])


    // other page controler
    const authInfo = { user, createUser, signInUser, logOut, loading }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}