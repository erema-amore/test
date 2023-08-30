import React from 'react';
import photo from '../images/homePage/home_page_main_photo1.jpg'
import style from './styles/homepage.module.css'

const HomePage = () => {
  return (
    <div className='home_page_main'>
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Добро Пожаловать!</h2>
        <p className="text-gray-700">
          Самый лучший сайт во вселенной
        </p>
        <img src={photo} alt="" />
      </div>
    </div>
    </div>
  );
};

export default HomePage;
