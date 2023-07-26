import React from 'react'
import './footer.scss'
import { AiFillSignal, AiFillGithub, AiFillFacebook, AiFillTwitterCircle,AiFillYoutube,AiFillLinkedin,
 AiOutlineWifi, AiOutlineCopyright, AiFillHeart} from 'react-icons/ai'

const data = [
  {
      label: 'Home',
     
  },
  {
      label: 'About',
     
  },
  {
    label: 'Docs',
   
},
{
  label: 'GitHub',
 
},
 
]
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerM">
        <div className="footerM__brand">
        <a to={"/"} className="footerM__brand__logo">
                 
                 <AiFillSignal size={30}/>

             </a>
             <h2 className='footerM__brand__name'> Starter</h2>

        </div>

        <div className="footerM__list">
        <ul className='footerM__list__ul'>
                {data.map((item, key) => (
                    <li key={key} className='footerM__list__ul__item'>
                        <a className='footerM__list__ul__item__link'>
                            {item.label}

                        </a>
                    </li>
                ))}

            </ul>
        </div>

        <div className="footerM__icons">
          <ul className='footerM__icons__items'>
            <li className='footerM__icons__items__item'><AiFillGithub/></li>
            <li className='footerM__icons__items__item'><AiFillFacebook/></li>
            <li className='footerM__icons__items__item'><AiFillTwitterCircle/></li>
            <li className='footerM__icons__items__item'><AiFillYoutube/></li>
            <li className='footerM__icons__items__item'><AiFillLinkedin/></li>
            <li className='footerM__icons__items__item'><AiOutlineWifi/></li>
           
          </ul>
        </div>
        
        <p className="footerM__p"><AiOutlineCopyright size={13}/>copyRight 2023 starter with
         <span><AiFillHeart size={15}/></span>  by <span className='footerM__p__span'>Front-end Team</span></p>
      </div>
    </div>
  )
}

export default Footer