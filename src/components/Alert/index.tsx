import {useState} from "react";
import {IonAlert} from "@ionic/react";

export const Alert = (props : any) => {
    const {showAlert,setShowAlert,header,subHeader,message,buttons} = props
    return (
        <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={header}
            subHeader={subHeader}
            message={message}
            buttons={buttons}
        />
    )
}
