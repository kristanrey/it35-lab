import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <IonCard style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <IonCardHeader style={{ textAlign: 'center' }}>
              <IonAvatar style={{ margin: '0 auto', width: '100px', height: '100px' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4eYWUYMxURMfMo8D1gnNiYd3wXkYf0ycLQ&s"
                  alt="Avatar"
                  style={{ width: '100%', height: '100%' }}
                />
              </IonAvatar>
              <IonCardTitle style={{ marginTop: '16px', fontWeight: 'bold' }}>User Login</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonInput
                label="Email"
                labelPlacement="floating"
                fill="outline"
                type="email"
                placeholder="Enter Email"
                value={email}
                onIonChange={e => setEmail(e.detail.value!)}
              />
              <IonInput
                style={{ marginTop: '16px' }}
                fill="outline"
                type="password"
                placeholder="Password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)}
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>

              <IonButton onClick={doLogin} expand="block" shape="round" style={{ marginTop: '20px' }}>
                Login
              </IonButton>

              <IonButton
                routerLink="/it35-lab/register"
                expand="block"
                fill="clear"
                shape="round"
                style={{ marginTop: '10px' }}
              >
                Don't have an account? Register
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
