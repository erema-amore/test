import React from 'react';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Профиль</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4">
            <img
              className="w-20 h-20 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <div>
              <h3 className="text-xl font-semibold">Имя Фамилия</h3>
              <p className="text-gray-600">Должность</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Контактная информация</h4>
            <p className="text-gray-600">Email: example@example.com</p>
            <p className="text-gray-600">Телефон: +123456789</p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2">О себе</h4>
          <p className="text-gray-700 leading-relaxed">
            Здесь можно добавить описание о себе, вашей карьере и интересах. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam nec mauris eu ligula aliquet viverra eu
            et tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
