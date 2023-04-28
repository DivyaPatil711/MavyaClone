// import React from 'react'
// import './Tipsmain.css'
// export default function Tipsmain() {
// return(
//   <>
//   <div className="main2">
 
// <div className="imgBox">
// <img className='phot1' src="./image/sy4.jpg" alt="" />
// <img className='phot1' src="./image/sy4.jpg" alt="" />
// </div>
// <div className="details">
//   <div className="content">
//     <h2>tips</h2><br/><span>abcd</span>
//   </div>
// </div>
//    </div>
// </>

//   )
// }

import React from 'react'
import fir from './first.svg'
import sec from './second.svg'
import thir from './third.svg'
import four from './fourth.svg'
import './Tipsmain.css'

const Tipsmain = () => {
  return (
    <div>
     <main class="main">
            
            <section class="card-area">
    
                
                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--city">
                                    <fir/>
                                   <h2 class="card-front__heading">
                                </h2>
                                <p class="card-front__text-price">
                                Eat a healthy diet
                                </p>
                                    </div>
                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--city">
                                            View me
                                        </p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    {/* <video class="video__container" autoplay muted loop>
                                        <source class="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                                    </video> */}

                                    <img src="./image/i1.jpg" alt="" />

                                </div>
                            </div>
                        </div>
    
                        <div class="inside-page">
                            <div class="inside-page__container">
                                <p class="inside-page__heading inside-page__heading--city">
                                Eat a healthy diet
                                </p>
                                <p class="inside-page__text">
                                Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. 
                                </p>
                                {/* <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a> */}
                            </div>
                        </div>
                    </div>
                </section>
    
               
                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--ski">

                                    <sec/>
                                       
                                                   <h2 class="card-front__heading">
                                                       
                                                   </h2>
                                                   <p class="card-front__text-price">
                                                   Consume less salt and sugar
                                                   </p>
                                    </div>
    
                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--ski">
                                            View me
                                        </p>
                                    </div>
                                </div>
    
                                <div class="card-back">
                                    {/* <video class="video__container" autoplay muted loop>
                                        <source class="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4"/>
                                    </video> */}
                                    <img src="./image/i2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
    
                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--ski">
                                Consume less salt and sugar
                                </h3>
                                <p class="inside-page__text">
                                Filipinos consume twice the recommended amount of sodium, putting them at risk of high blood pressure, which in turn increases the risk of heart disease and stroke. Reduce your salt intake to 5g per day, equivalent to about one teaspoon.
                                </p>
                                {/* <a href="#" class="inside-page__btn inside-page__btn--ski">View deals</a> */}
                            </div>
                        </div>
                    </div>
                </section>
    
                
                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--beach">
                                        <thir/>
                                   
                                                   <h2 class="card-front__heading">
                                                       
                                                   </h2>
                                                   <p class="card-front__text-price">
                                                   Reduce intake of harmful fats
                                                   </p>
                                    </div>
    
                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--beach">
                                            View me
                                        </p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    {/* <video class="video__container" autoplay muted loop>
                                        <source class="video__media" src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                                    </video> */}
                                    <img src="./image/i3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
    
                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--beach">
                                Reduce intake of harmful fats
                                </h3>
                                <p class="inside-page__text">
                                WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </section>
    
                
                <section class="card-section">
                    <div class="card">
                        <div class="flip-card">
                            <div class="flip-card__container">
                                <div class="card-front">
                                    <div class="card-front__tp card-front__tp--camping">
                                       

                                       <four/>
                                                   <h2 class="card-front__heading">
                                                       
                                                   </h2>
                                                   <p class="card-front__text-price">
                                                   Avoid harmful use of alcohol
                                                   </p>
                                    </div>
    
                                    <div class="card-front__bt">
                                        <p class="card-front__text-view card-front__text-view--camping">
                                            View me
                                        </p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    {/* <video class="video__container" autoplay muted loop>
                                        <source class="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
                                    </video> */}
                                    <img src="./image/i4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
    
                        <div class="inside-page">
                            <div class="inside-page__container">
                                <h3 class="inside-page__heading inside-page__heading--camping">
                                Avoid harmful use of alcohol
                                </h3>
                                <p class="inside-page__text">
                                Consuming alcohol can lead to health problems, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions.
                                </p>
                                
                            </div>
                        </div>
                        
                    </div>
                </section>
            </section>

           
    
                       
            
        </main>
      
    </div>
  )
}

export default Tipsmain


