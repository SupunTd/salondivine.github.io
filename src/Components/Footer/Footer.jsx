import React from "react"
import "./footer.css"
const Footer = () => {
  return (
    <>
        <footer>
            <div className='container'>
                <div className='logoname'>
                    <h1>Salon Divine</h1>
                    <span>You Have Best Option</span>
                    <p>The purity of your heart is seen in the sincerity of your smile.</p>
                </div>

                <div className='box last'>
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Courses</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div className='box last'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Pricing</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy</li>
                        <li>Feedbacks</li>
                    </ul>
                </div>

                <div className='box last'>
                    <h3>Have a Questions?</h3>
                    <ul>
                        <li>12/2,Hapugala,Galle
                        </li>
                        <li>+947 77 6790 679
                        </li>
                        <li>info@salondivine.com
                        </li>
                    </ul>
                </div>

            </div>
        </footer>



      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | <i>Salon Divine</i>
        </p>
      </div>
    </>
  )
}

export default Footer;
