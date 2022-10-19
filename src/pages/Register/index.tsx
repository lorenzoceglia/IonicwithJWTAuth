import {
    IonButton,
    IonCheckbox,
    IonContent,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRouterLink
} from "@ionic/react";
import {FormEvent, useState} from "react";
import {useToken} from "../../auth/useToken";
import axios from "axios";
import {useHistory} from "react-router";
import {navigate} from "ionicons/icons";
import style from './style.module.css';
import {Alert} from "../../components/Alert";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const Register = () => {
    const [, setToken] = useToken();
    const history = useHistory();

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [registerAlert, setRegisterAlert] = useState(false)
    const [registerMessages, setRegisterMessages] = useState({
        header : 'Registrazione Avvenuta Con Successo',
        message : ''
    })

    const emailHandler = (email: string) => {
        setEmailValue(email)
    }

    const passwordHandler = (password: string) => {
        setPasswordValue(password)
    }

    const onSubmit = async () => {
        if(emailValue && passwordValue || (emailValue.length !== 0 && passwordValue.length))
        {
            const response = await axios.post('http://localhost:8080/api/signup', {
                email: emailValue,
                password: passwordValue,
            }).catch(error => {
                setRegisterMessages({
                    header : 'Errore',
                    message : 'Riprova'
                })
                setRegisterAlert(true)
            });
            const {token} = response?.data;
            setToken(token)

            window.location.reload();
            history.push('/uno');
        }
        else {
            setRegisterMessages({
                header : 'Credenziali Non Valide',
                message : 'Riprova'
            })
            setRegisterAlert(true)
        }
    }

    return (
        <IonPage>
            <IonContent scrollY={false}>
                <div className={style.login_page_container}>
                    <form className="ion-padding">
                        <div className={style.login_bottom}>
                            <IonImg className={style.image_logo} src={'/assets/logo.png'} />
                        </div>
                        <IonItem className={style.login_input}>
                            <IonLabel position="floating">Email</IonLabel>
                            <IonInput onIonChange={(e: any) => emailHandler(e.target.value)} value={emailValue}/>
                        </IonItem>
                        <IonItem className={style.login_input}>
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput onIonChange={(e: any) => passwordHandler(e.target.value)} value={passwordValue}
                                      type="password"/>
                        </IonItem>
                        <IonButton onClick={() => onSubmit()} className={style.login_button} expand="block">
                            Registrati
                        </IonButton>
                        <div className={style.login_bottom}>
                            <span>Hai un account?</span>
                            <IonRouterLink href={'/login'}>Login</IonRouterLink>
                        </div>
                    </form>
                </div>
                <Alert showAlert={registerAlert} setShowAlert={setRegisterAlert} header={registerMessages.header} subHeader={''} message={registerMessages.message} buttons={['Ok']}/>
            </IonContent>
        </IonPage>
    )
}

