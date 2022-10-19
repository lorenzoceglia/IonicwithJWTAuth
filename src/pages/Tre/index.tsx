import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {Alert} from "../../components/Alert";
import {useState} from "react";
import {useHistory} from "react-router";

export const Tre = () => {
    const [logoutAlert,setLogoutAlert] = useState(false)
    const history = useHistory()

    const onLogout = () => {
        setLogoutAlert(!logoutAlert)
    }

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const logoutButtons = [
        {
            text: 'Annulla',
            role: 'cancel',
            handler: () => {
                console.log('1');
            },
        },
        {
            text: 'OK',
            role: 'confirm',
            handler: () => {
                logout();
            },
        },
    ]

    return (
        <IonPage>
            <IonContent scrollY={false}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Profilo</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={() => onLogout()} className="ion-margin-top" expand="block">
                    Logout
                </IonButton>
                <Alert showAlert={logoutAlert} setShowAlert={setLogoutAlert} header={'Stai per effettuare il logout'} subHeader={''} message={'Sei sicuro?'} buttons={logoutButtons}/>
            </IonContent>
        </IonPage>
    )
}
