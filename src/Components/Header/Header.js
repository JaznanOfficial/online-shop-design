import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header w-100 '>
        
            <div class="d-flex justify-content-evenly py-5 align-items-center">
                <div>
                    <h1 className='fw-bolder shop-name'>Online Shop</h1>
                    <h6 className='text-light'>Work Hard, Make History</h6>
                    <h2 className='mt-3 mb-2 fw-bold'>Elon Musk</h2>
                    <p className='fw-bold'>Texas, USA</p>
                </div>
                <div><img className='header-img' src="https://i.ibb.co/KKQ4jzq/178-1783030-online-shopping-logo-png-transparent-png-removebg-preview.png" alt="img not found" width={350} /></div>
            </div>
      
        </div>
    );
};

export default Header;