import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonText,
  IonAlert,
  useIonRouter,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [presentToast] = useIonToast();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      setAlertMessage("The username you entered isn’t connected to an account. Find your account and log in.");
      setShowAlert(true);
      return;
    }

    presentToast({
      message: "Login Success!",
      duration: 2000,
      position: "top",
      color: "success",
    });

    router.push("/it35-lab/app");
  };

  const goToRegister = () => {
    router.push("/it35-lab/register");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonGrid style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <IonRow>
    <IonCol className="ion-text-center">
      <IonAvatar style={{ width: "100px", height: "100px", margin: "auto" }}>
        <img src="https://scontent.fceb8-1.fna.fbcdn.net/v/t39.30808-1/373517144_10006395102767259_3385756574041204882_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHBrFaQij8eDgSuEsVdtzwujoTTnHYPDyiOhNOcdg8PKDGM2CFS1CwOynjLEQU__nSeMWHgMNodej7rK_hmYIj3&_nc_ohc=OtcpRFFXc10Q7kNvgF-U2AF&_nc_oc=Adj7hKROWsqIU5z2Gj_n1XlsnoMrW5sgS0ex3TNXvLdF2ASFxGK8U6py5AIlwRcNNn0_VgNwnSHfqOz1HIAnEumU&_nc_zt=24&_nc_ht=scontent.fceb8-1.fna&_nc_gid=AscMIHAs1IBSSXGO0o1OjgF&oh=00_AYHRNwOAHBZnpgJDS0h8u2xd9DS6Eg4cWrnJCK6buA5BDQ&oe=67D495D4" alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </IonAvatar>
    </IonCol>
  </IonRow>
</IonGrid>

        <IonInput label="Email" type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} placeholder="Enter email" />
        <IonInput type="password" label="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} placeholder="Enter password">
          <IonInputPasswordToggle slot="end" />
        </IonInput>
        <IonButton onClick={doLogin} expand="full">
          Login
        </IonButton>

        <IonText color="primary" style={{ display: "block", marginTop: "15px", textAlign: "center" }}>
          Don't have an account?{" "}
          <span onClick={goToRegister} style={{ textDecoration: "underline", cursor: "pointer" }}>
            Sign up
          </span>
        </IonText>

        {/* Alert for incorrect login */}
        <IonAlert isOpen={showAlert} message={alertMessage} buttons={["OK"]} onDidDismiss={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Login;
