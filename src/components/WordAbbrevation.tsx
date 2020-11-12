import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from './ExploreContainer';
import Axios from 'axios';
const WordAbbrevation = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const local_url = "http://localhost:8080/abbreviation"
    const api_url = "https://waapi-y5tash35xa-an.a.run.app/abbreviation"
    return (
      <div>
          <div>
              <h1>input text</h1>
              <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
              <IonButton onClick={()=>submitText(text)}>submit</IonButton>
          </div>
          <div>
              <h1>result</h1>
              <div>
                  {result}
              </div>
          </div>
          <div>
            <input type='file' accept="audio/x-m4a"/>
            {//こうするとm4aのみ受け付けるファイル選択を作成できる。
            }
          </div>
      </div>
    );
    function submitText(submit_text:string){     
        Axios.post(api_url,{
            post_text:{submit_text},
        })
        .then((response) => setResult(response.data.result))
    }
};

  export default WordAbbrevation;