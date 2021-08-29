import React from 'react'
import SecondPageComponent from '../components/secondPageComponent'
import { IonPage, IonHeader, IonTitle, IonToolbar } from '@ionic/react'

function SecondPage() {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle size="large">FINTEL</IonTitle>
            </IonToolbar>
        </IonHeader>        
        <SecondPageComponent />
    </IonPage>        
    )
}

export default SecondPage;
