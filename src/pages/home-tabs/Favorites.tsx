import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle 
} from '@ionic/react';

const Favorites: React.FC = () => {
  const favoriteDestinations = [
    {
      name: "Santorini, Greece",
      description: "White-washed houses with blue domes overlooking the Aegean Sea.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kyoto, Japan",
      description: "Ancient temples, vibrant autumn leaves, and peaceful bamboo forests.",
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Banff, Canada",
      description: "Majestic mountains, crystal-clear lakes, and breathtaking wildlife.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="favorites-title">🌟 Dream Destinations</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="favorites-content">
        {favoriteDestinations.map((destination, index) => (
          <IonCard key={index} className="favorites-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <IonCardHeader>
              <IonCardTitle>{destination.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{destination.description}</p>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Inline Style */}
        <style>
          {`
            .favorites-content {
              --background: linear-gradient(135deg, #d4f1f9, #e3f9fd, #c2ebf9);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: start;
              padding: 1rem;
              backdrop-filter: blur(8px);
              gap: 1rem;
            }

            .favorites-title {
              animation: pulseTitle 5s infinite alternate ease-in-out;
              font-weight: bold;
            }

            @keyframes pulseTitle {
              0% { color: #76d7f0; text-shadow: 0 0 8px #76d7f0; }
              100% { color: #2ab7e7; text-shadow: 0 0 12px #2ab7e7; }
            }

            .favorites-card {
              width: 95%;
              max-width: 400px;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 16px;
              backdrop-filter: blur(16px);
              box-shadow: 0 8px 24px rgba(179, 229, 252, 0.5);
              animation: floatIn 1s ease-out;
              overflow: hidden;
              text-align: center;
            }

            @keyframes floatIn {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }

            .destination-image {
              width: 100%;
              height: 200px;
              object-fit: cover;
              animation: fadeIn 1s ease;
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            IonCardTitle {
              font-size: 1.5rem;
              color: #34495e;
              margin-top: 0.5rem;
            }

            IonCardContent p {
              font-size: 1rem;
              color: #566573;
              padding: 0 1rem 1rem;
            }
          `}
        </style>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
