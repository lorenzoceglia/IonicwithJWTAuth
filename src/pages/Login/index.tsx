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
import {FcGoogle} from "react-icons/fc";
import {AiFillApple} from "react-icons/ai";

export const Login = () => {
    const [, setToken] = useToken();
    const history = useHistory();

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [loginAlert, setLoginAlert] = useState(false)

    const emailHandler = (email: string) => {
        setEmailValue(email)
    }

    const passwordHandler = (password: string) => {
        setPasswordValue(password)
    }

    const onSubmit = async () => {
        if (emailValue && passwordValue || (emailValue.length !== 0 && passwordValue.length)) {
            const response = await axios.post('http://localhost:8080/api/login', {
                email: emailValue,
                password: passwordValue,
            }).catch(error => setLoginAlert(true));
            const {token} = response?.data;
            if (response?.data) {
                setToken(token)
                window.location.reload();
                history.push('/uno');
            } else setLoginAlert(true)
        } else setLoginAlert(true)
    }

    return (
        <IonPage>
            <IonContent scrollY={false}>
                <div className={style.login_page_container}>
                    <form className="ion-padding">
                        <div className={style.login_bottom}>
                            <IonImg className={style.image_logo} src={'/assets/react-ioni.png'}/>
                        </div>
                        <div className={style.login_header}>
                            Login
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
                        <div className={style.oath}>
                            <IonButton onClick={() => onSubmit()} className={style.login_button} expand="block">
                                Login
                            </IonButton>
                            <FcGoogle className={style.oath_elem}/>
                        </div>
                        <div className={style.login_bottom}>
                            <span>Non hai ancora un account?</span>
                            <IonRouterLink href={'/register'}>Registrati</IonRouterLink>
                        </div>
                    </form>
                </div>
                <Alert showAlert={loginAlert} setShowAlert={setLoginAlert} header={'Credenziali non valide'}
                       subHeader={''} message={'Inseriscile nuovamente'} buttons={['Ok']}/>
            </IonContent>
        </IonPage>
    )
}

