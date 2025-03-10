
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
    useIonRouter,
    IonText
  } from '@ionic/react';
  
  const Registration: React.FC = () => {
    const navigation = useIonRouter();
  
    // Mock registration logic
    const doRegister = () => {
      console.log('User registered!');
      navigation.push('/it35-lab', 'forward', 'replace'); // Redirect to login page after registration
    };
  
    const goToLogin = () => {
      navigation.push('/it35-lab');
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <div style={{ marginTop: '25%' }}>
            <IonGrid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <IonRow>
                <IonCol size="8">
                  <IonAvatar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      style={{ width: '100px', objectFit: 'cover' }}
                      alt="Silhouette of a person's head"
                      src="https://scontent.fceb8-1.fna.fbcdn.net/v/t39.30808-1/373517144_10006395102767259_3385756574041204882_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHBrFaQij8eDgSuEsVdtzwujoTTnHYPDyiOhNOcdg8PKDGM2CFS1CwOynjLEQU__nSeMWHgMNodej7rK_hmYIj3&_nc_ohc=OtcpRFFXc10Q7kNvgF-U2AF&_nc_oc=Adj7hKROWsqIU5z2Gj_n1XlsnoMrW5sgS0ex3TNXvLdF2ASFxGK8U6py5AIlwRcNNn0_VgNwnSHfqOz1HIAnEumU&_nc_zt=24&_nc_ht=scontent.fceb8-1.fna&_nc_gid=AYQt_hhoUSBJnRBZOcDtrVU&oh=00_AYGCMuyOLIAJtpSbW72s-4ED0c4hEybf7hzBLTkiOZmK2A&oe=67D495D4"
                    />
                  </IonAvatar>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonInput label="Username" placeholder="Enter username" />
            <IonInput type="email" label="Email" placeholder="Enter email" />
            <IonInput type="password" label="Password">
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
            <IonInput type="password" label="Confirm Password">
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
            <IonButton onClick={doRegister} expand="full">
              Sign Up
            </IonButton>
  
            <IonText color="primary" style={{ display: 'block', marginTop: '15px', textAlign: 'center' }}>
              Already have an account?{' '}
              <span onClick={goToLogin} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Log in
              </span>
            </IonText>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Registration;
  
