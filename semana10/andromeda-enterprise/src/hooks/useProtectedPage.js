import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            history.push("/login");
            alert("Acesso negado, porfavor conclua login no site.")
        }
    }, [history]);
};

export default useProtectedPage;
