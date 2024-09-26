import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import '../../Styles/Global.css'

export default function About() {
  return (
    <div>
        <div className='about-us'>
            <div className='left-content'>
                <h3>My name is Sofia White...</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque aliquet mattis. 
                    Duis ultricies eu mauris quis tincidunt. In non justo vel est consectetur porttitor.
                     Nulla a bibendum neque. Duis et nisi non augue pulvinar semper egestas quis massa. 
                     Suspendisse risus velit, commodo rutrum interdum aliquam, dictum et lacus. Morbi rhoncus, 
                     orci ut fringilla interdum, ipsum velit congue urna, id feugiat enim tortor vel eros.
                     <br/><br/>
                     Aenean euismod vel augue consectetur auctor. Mauris suscipit eu dui sed lacinia. 
                     Vestibulum dignissim justo non tellus mattis varius. Nam ut dignissim justo, in luctus mi. 
                     Mauris tincidunt in diam eget interdum.
                </p>
            </div>
            <div className='right-image'>
                <img src="https://zf2xqj.yourbrand.studio/files/dynamicContent/sites/zf2xqj/images/en/webpage_13/lsbx4xmb/element_312/rwdMode_1/397x466/Woman_3.webp" alt="Women" />
            </div>
        </div>
        <div className='social-icons'>
            <div>
                <BsInstagram />
            </div>
            <div>
                <FaFacebookF />
            </div>
            <div>
                <IoLogoYoutube />
            </div>
            <div>
                <FaPinterestP />
            </div>
            <div>
                <FaTwitter />
            </div>
            <div>
                <FaLinkedinIn />
            </div>
        </div>
        <div className='bottom-navigation'>
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Gallery</li>
                <li>Cooperation</li>
            </ul>
            <div>
                <div>
                    <FaFacebookF />
                </div>
                <div>
                    <BsInstagram />
                </div>
                <div>
                    <FaTwitter />
                </div>
            </div>
        </div>
        <div className="footer">
            <p>Website created in white label responsive website builder WebWave.</p>
        </div>
    </div>
  )
}
