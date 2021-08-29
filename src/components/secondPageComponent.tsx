import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonButton } from '@ionic/react';
import React from 'react';
import './secondPageComponentStyle.css';
import {people, close} from 'ionicons/icons';


const __html =`<h1>What is an investment?</h1><dt>Definition:</dt><dd> An investment is an asset bought by an individual or organization with the expectation that it will generate some future income or profit—Examples of investments may include stocks and real estate. </dd><h4>🤔 Understanding investments</h4><p>When you make an investment, you trade resources (like money or credit) for assets (like stocks or real estate) in an attempt to gain future benefits. For example, an investor might purchase stocks believing that they’ll appreciate in value or to collect dividend payments. A student might invest in a college degree with the hope of starting a fulfilling career. Investments are often thought of in terms of money, but you can also invest other resources, like time and labor (like a business might do). An investment can produce losses if the acquired asset’s value decreases or if other realized benefits (think of rent payments for a rental property) don’t meet expectations. Where there’s a potential for reward, there’s also risk.</p> <br> <p>If you plant a seed in the right spot at the right time, and maintain it in the right conditions, someday that seed may grow into something that keeps giving back. Think of a lemon tree, a strawberry vine, or a fragrant flower. Similarly, an investment has the potential to grow into something with more value than what you paid to acquire it. But just as a plant may wither, an investment carries the risk of losing money.</p>`; 

function SecondPageComponent() {
    return (
    <IonContent fullscreen={true} scrollX={false}  class="contentClass">
        <div dangerouslySetInnerHTML={{__html}}></div>            
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary" closeIcon={close}> 
            <IonIcon icon={people}></IonIcon>
          </IonFabButton>
          <IonFabList side="start">
              <IonButton color="primary" href="https://findial-chat.herokuapp.com/join" >Chat with Advisor</IonButton>
              <IonButton color="primary" href="https://findial-chat.herokuapp.com/bot" >Chat with a Bot</IonButton>
          </IonFabList>
        </IonFab>
    </IonContent>        
    )
}

export default SecondPageComponent
