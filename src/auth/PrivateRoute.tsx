import {Redirect, Route} from "react-router-dom";
import {useUser} from "./useUser";

export const PrivateRoute = (props : any) => {
    const user = useUser();
    if (!user) return <Redirect exact to="/login" />
    return <Route {...props} />
}
