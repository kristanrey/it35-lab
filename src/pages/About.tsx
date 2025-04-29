import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="about-title">✨ About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="about-content">
        <IonCard className="about-card">
          <IonCardHeader>
            <IonCardTitle>About This App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This application was crafted with ❤️ using Ionic React.  
            It is designed to deliver a fast, beautiful, and lightweight user experience.
          </IonCardContent>
        </IonCard>

        <IonCard className="about-card">
          <IonCardHeader>
            <IonCardTitle>Meet the Developer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Hi! I'm <strong>Kristan Rey</strong> 👋, passionate about building clean and efficient mobile apps.  
            I believe in coding with creativity, simplicity, and heart.
          </IonCardContent>
        </IonCard>

        <style>
          {`
            .about-content {
              --background: linear-gradient(135deg, #d0eaff, #f0faff);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: start;
              padding: 1rem;
              gap: 1rem;
              backdrop-filter: blur(8px);
            }

            .about-title {
              animation: glowTitle 5s infinite alternate ease-in-out;
              font-weight: bold;
            }

            @keyframes glowTitle {
              0% { color: #3fc1f3; text-shadow: 0 0 10px #3fc1f3; }
              100% { color: #007bff; text-shadow: 0 0 15px #007bff; }
            }

            .about-card {
              width: 95%;
              max-width: 400px;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 16px;
              box-shadow: 0 8px 24px rgba(173, 216, 230, 0.4);
              backdrop-filter: blur(16px);
              animation: fadeInUp 1.2s ease;
              text-align: center;
              overflow: hidden;
            }

            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }

            IonCardTitle {
              font-size: 1.6rem;
              margin-top: 0.5rem;
              color: #2c3e50;
            }

            IonCardContent {
              font-size: 1rem;
              padding: 1rem;
              color: #4a5568;
            }
          `}
        </style>
      </IonContent>
    </IonPage>
  );
};

export default About;
