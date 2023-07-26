import React from 'react'
import './MainPage.scss'
const MainPage = ({pic1,pic4,pic3,title1,title2,title3,desc1,desc2,desc3}) => {
  return (
    <div className='main'>
      <div className="main__first">
        <h1 className='main__first__title'>
          Your Title
        </h1>
        <p className='main__first__p'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore mollitia facilis incidunt asperiores voluptatum ipsum? Obcaecati odio dolorum
        </p>

      </div>
      <div className="main__sec">
        <div className="main__sec__s1">
          <img className="main__sec__s1__logo" src={pic1} />
          <div className="main__sec__s1__container">
          <h2 className="main__sec__s1__container__title">{title3}</h2>
          <p className="main__sec__s1__container__p">{desc1}</p>

          </div>
          
        </div>

        <div className="main__sec__s1 revers">
          <img className="main__sec__s1__logo2" src={pic3} />
          <div className="main__sec__s1__container">
          <h2 className="main__sec__s1__container__title">{title2}</h2>
          <p className="main__sec__s1__container__p">{desc1}</p>

          </div>
          
        </div>

        <div className="main__sec__s1">
          <img className="main__sec__s1__logo" src={pic4} />
          <div className="main__sec__s1__container">
          <h2 className="main__sec__s1__container__title">{title1}</h2>
          <p className="main__sec__s1__container__p">{desc3}</p>

          </div>
          
        </div>
  
        
        </div>
      <div className="main__thir">
        <h1 className="main__thir__title">Lorem ipsum dolor sit amet consectetur. <span className='main__thir__title__span'>Start Your Free Trial</span> </h1>
        <button className='main__thir__button'>Get Started</button>
      </div>
    </div>
  )
}

export default MainPage