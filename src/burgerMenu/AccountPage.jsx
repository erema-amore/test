import React from 'react';

const AccountPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Аккаунт</h2>
        <div className="flex space-x-6">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Имя Фамилия</h3>
            <p className="text-gray-600">Должность</p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2">Контактная информация</h4>
          <p className="text-gray-600">Email: example@example.com</p>
          <p className="text-gray-600">Телефон: +123456789</p>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2">Настройки аккаунта</h4>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> */}
                </svg>
              </span>
              {/* <p className="text-gray-600">Подписка</p> */}
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21b-6 1-9-4-9-10a9 9 0 1118 0c0 6-3 11-9 10z" />
                </svg>
              </span>
              {/* <p className="text-gray-600">Настройки</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
