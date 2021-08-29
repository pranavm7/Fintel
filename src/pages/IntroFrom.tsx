
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage } from '@ionic/react'
import React from 'react'
import { ButtonExample } from '../components/Form'

function IntroFrom() {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
            <IonTitle size="large">FINTEL</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            
            <ButtonExample />
        </IonContent>
        </IonPage>
    )
}

export default IntroFrom;
export {}
