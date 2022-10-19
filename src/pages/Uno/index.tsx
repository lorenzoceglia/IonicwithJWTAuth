import {IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonBackButton} from "@ionic/react";

export const Uno = () => {
    return (
        <IonPage>
            <IonContent scrollY={false}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Pagina Uno</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    )
}
