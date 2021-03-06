import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {  Route } from 'react-router-dom';
import Page from './pages/Page';
import { ButtonExample } from './components/Form';
import SecondPage from './pages/secondPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
             <ButtonExample />
            </Route>
            {/* <Route path="/page/:name" exact={true}>
              <Page />
            </Route> */}
            <Route path="/secondPage" exact={true}>
              <SecondPage/>
            </Route>

            {/* <Route path="/"  component={}*/}
            {/*  Route */}
            {/* component tag */}
            {/*  Close route */}
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
