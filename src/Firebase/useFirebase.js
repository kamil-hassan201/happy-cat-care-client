import firebaseInitializer from "./firebase.init";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitializer();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { displayName: name, email, password, role: 'user' };
                setUser(newUser);
                saveUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const sinInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    // observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(true);

                fetch(`https://tranquil-dusk-11890.herokuapp.com/users/${user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setAdmin(data.admin)
                        setIsLoading(false);
                    })
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    //log out function
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setAuthError(error.message);
        })
            .finally(() => setIsLoading(false));
    }
    // save user to database
    const saveUser = (user) => {
        console.log(user);
        fetch('https://tranquil-dusk-11890.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    // useEffect(() => {
    //     setIsLoading(true);
    //     console.log("admin call calling");
    //     console.log("Email", user.email);
    //     fetch(`https://tranquil-dusk-11890.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data.admin)
    //             console.log(admin)
    //             setIsLoading(false);
    //         })
    // }, [user.email, admin])


    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        sinInUser,
        logout,
    }
}
export default useFirebase;