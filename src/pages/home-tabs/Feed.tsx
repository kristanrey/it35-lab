import { 
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const newsData = [
  {
    id: "1",
    title: "Airport security personnel sacked over bullet-planting case",
    subtitle: "Manila Times",
    image: "https://cdn4.premiumread.com/?url=https://www.manilatimes.net/manilatimes/uploads/images/2025/03/10/561424.jpg&w=700&q=100&f=webp&t=1.0",
    link: "https://www.manilatimes.net/2025/03/10/news/airport-security-personnel-sacked-over-bullet-planting-case/2069924"
  },
  {
    id: "2",
    title: "Philippines' Duterte says he will accept arrest if ICC issues warrant",
    subtitle: "GMA networks",
    image: "https://www.reuters.com/resizer/v2/MYJTDLFUAZLZZGXRMV5KZCZ5YE.jpg?auth=77607e702d2cdacbd8e14439fc39422fd19472a56f7ac76b8c0e8355b2315803&width=640&quality=80 ",
    link: "https://www.reuters.com/world/asia-pacific/philippines-duterte-says-he-will-accept-arrest-if-icc-issues-warrant-2025-03-10/"
  },
  {
    id: "3",
    title: "Planned tollway seen to cut Bicol transport costs, boost jobs",
    subtitle: "Movies & Hollywood",
    image: "https://source.unsplash.com/800x400/?movie",
    link: "https://www.movienews.com/new-blockbuster-2025"
  }
];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>News Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {newsData.map((news) => (
          <IonCard key={news.id}>
            <IonCardHeader>
              <IonCardTitle>
                <a 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  {news.title}
                </a>
              </IonCardTitle>
              <IonCardSubtitle>{news.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <img src={news.image} alt={news.title} style={{ width: "100%", borderRadius: "10px" }} />
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
