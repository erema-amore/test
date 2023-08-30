import React from 'react';

const LeasingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Лизинг</h2>
        <p className="text-gray-700 leading-relaxed">
          Лизинг - это способ аренды предмета долгосрочного пользования, при котором
          арендодатель (лизингодатель) предоставляет лизингополучателю (арендатору)
          предмет аренды с правом последующего выкупа.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Лизинг позволяет компаниям использовать оборудование или другие ресурсы,
          не внося большие капиталовложения, а распределяя платежи на протяжении
          определенного периода времени.
        </p>
      </div>
    </div>
  );
};

export default LeasingPage;
