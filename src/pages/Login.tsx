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
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import FacebookLogin from '@greatsumini/react-facebook-login';

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
                <img
                  src="https://scontent.fceb8-1.fna.fbcdn.net/v/t39.30808-1/373517144_10006395102767259_3385756574041204882_n.jpg"
                  alt="Avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonInput
          label="Email"
          type="email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
          placeholder="Enter email"
        />
        <IonInput
          type="password"
          label="Password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
          placeholder="Enter password"
        >
          <IonInputPasswordToggle slot="end" />
        </IonInput>

        <IonButton onClick={doLogin} expand="full" style={{ marginTop: '15px' }}>
          Login
        </IonButton>

        <IonText color="medium" style={{ display: "block", marginTop: "10px", textAlign: "center" }}>
          or
        </IonText>

        {/* Google Login Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                const decoded: any = jwtDecode(credentialResponse.credential);
                const googleEmail = decoded.email;
                const users = JSON.parse(localStorage.getItem("users") || "[]");
                const existingUser = users.find((u: any) => u.email === googleEmail);

                if (!existingUser) {
                  users.push({ email: googleEmail, password: "google_oauth" });
                  localStorage.setItem("users", JSON.stringify(users));
                }

                presentToast({
                  message: `Welcome ${decoded.name}!`,
                  duration: 2000,
                  position: "top",
                  color: "success",
                });

                router.push("/it35-lab/app");
              }
            }}
            onError={() => {
              setAlertMessage("Google Sign-In failed. Please try again.");
              setShowAlert(true);
            }}
          />
        </div>

        {/* Facebook Login Button */}
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            onSuccess={(response) => {
              const fbEmail = response.email;
              const users = JSON.parse(localStorage.getItem("users") || "[]");
              const existingUser = users.find((u: any) => u.email === fbEmail);

              if (!existingUser) {
                users.push({ email: fbEmail, password: "facebook_oauth" });
                localStorage.setItem("users", JSON.stringify(users));
              }

              presentToast({
                message: `Welcome ${response.name || 'Facebook User'}!`,
                duration: 2000,
                position: "top",
                color: "success",
              });

              router.push("/it35-lab/app");
            }}
            onFail={(err) => {
              setAlertMessage("Facebook login failed.");
              setShowAlert(true);
            }}
            style={{
              width: '250px',
              padding: '10px',
              backgroundColor: '#3b5998',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'inline-block',
            }}
          >
            Login with Facebook
          </FacebookLogin>
        </div>

        <IonText color="primary" style={{ display: "block", marginTop: "15px", textAlign: "center" }}>
          Don't have an account?{" "}
          <span onClick={goToRegister} style={{ textDecoration: "underline", cursor: "pointer" }}>
            Sign up
          </span>
        </IonText>

        <IonAlert isOpen={showAlert} message={alertMessage} buttons={["OK"]} onDidDismiss={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Login;
