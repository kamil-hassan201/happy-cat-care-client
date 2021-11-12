import { useContext } from "react";
import { AllContext } from "../context/ContextProvider/ContextProvider"

const useAuth = () => {
    return useContext(AllContext);
}
export default useAuth;