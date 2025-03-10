import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonModal,
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

const Register: React.FC = () => {
  const router = useIonRouter();
  const [presentToast] = useIonToast();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email: string) => {
    return email.endsWith("@nbsc.edu.ph");
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
      setAlertMessage("Only @nbsc.edu.ph emails are allowed!");
      setShowAlert(true);
      return;
    }
    if (password !== confirmPassword) {
      setAlertMessage("Passwords do not match!");
      setShowAlert(true);
      return;
    }

    // Show confirmation modal
    setShowConfirmModal(true);
  };

  const confirmRegistration = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setShowConfirmModal(false);
    presentToast({
      message: "Registration Successful!",
      duration: 2000,
      position: "top",
      color: "success",
    });

    router.push("/it35-lab"); // Redirect to login
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAvatar>
                <img src="https://cdn-icons-png.flaticon.com/128/16951/16951316.png" alt="Avatar" />
              </IonAvatar>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonInput label="Email" type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} placeholder="Enter email" />
        <IonInput type="password" label="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} placeholder="Enter password" />
        <IonInput type="password" label="Confirm Password" value={confirmPassword} onIonChange={(e) => setConfirmPassword(e.detail.value!)} placeholder="Confirm password" />
        <IonButton onClick={handleRegister} expand="full">
          Register
        </IonButton>

        {/* Alert for errors */}
        <IonAlert isOpen={showAlert} message={alertMessage} buttons={["OK"]} onDidDismiss={() => setShowAlert(false)} />

        {/* Confirmation Modal */}
        <IonModal isOpen={showConfirmModal}>
          <IonContent className="ion-padding">
            <IonText>Confirm your details before registering?</IonText>
            <IonButton expand="full" color="success" onClick={confirmRegistration}>
              Confirm & Register
            </IonButton>
            <IonButton expand="full" color="danger" onClick={() => setShowConfirmModal(false)}>
              Cancel
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Register;
