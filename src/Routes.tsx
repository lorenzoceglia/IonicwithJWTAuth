import {Redirect, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import {HomePage} from "./pages/HomePage";
import {PrivateRoute} from "./auth/PrivateRoute";
import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton,IonTabs} from "@ionic/react";
import {documentTextOutline, ellipse, person, personCircleOutline, square, triangle} from "ionicons/icons";
import {Due} from "./pages/Due";
import {Tre} from "./pages/Tre";
import {Uno} from "./pages/Uno";

export const Routes = () => {
    return (
        <>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/uno" component={Uno} exact={true} />
                    <Route path="/due" component={Due} exact={true} />
                    <Route path="/tre" component={Tre} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="uno" href="/uno">
                        <IonIcon icon={triangle}/>
                        <IonLabel>Uno</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="due" href="/due">
                        <IonIcon icon={ellipse}/>
                        <IonLabel>Due</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tre" href="/tre">
                        <IonIcon icon={person}/>
                        <IonLabel>Profilo</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>

        </>
    )
}
