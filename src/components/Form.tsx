import React from 'react';

import { IonButton, IonIcon, IonContent, IonInput, IonToggle, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import './secondPageComponentStyle.css';

export const ButtonExample: React.FC = () => (
  <IonContent className="contentClass">
    
    {/*-- Default List Header --*/}
    <IonListHeader>
      <IonLabel style={{ fontSize: 50 }}></IonLabel>
    </IonListHeader>

    {/* Q1 */}
    <IonListHeader lines="inset">
      <IonLabel>How much do you earn? -- Monthly</IonLabel>
    </IonListHeader>

    <IonList>
      <IonItem>
        <IonInput></IonInput>
      </IonItem>
    </IonList>

    {/* Q2 */}
    <IonListHeader lines="inset">
      <IonLabel>How much do you save?</IonLabel>
    </IonListHeader>

    <IonList>
      <IonItem>
        <IonInput></IonInput>
      </IonItem>
    </IonList>

    {/* Q3 */}
    <IonListHeader lines="inset">
      <IonLabel>What do you do?</IonLabel>
    </IonListHeader>

    <IonList>
      <IonItem>
        <IonInput></IonInput>
      </IonItem>
    </IonList>

    {/*-- Round --*/}
    <IonButton shape="round" size="large" href="/secondPage">Next</IonButton>

  </IonContent>
);