import React from 'react';

const InstallmentPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Рассрочка</h2>
        <p className="text-gray-700 leading-relaxed">
          Рассрочка - это форма оплаты, при которой покупатель может разделить
          стоимость товара или услуги на несколько частей и выплачивать их
          в течение определенного периода времени.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Рассрочка позволяет покупателям получить доступ к товарам или услугам,
          которые они могли бы не могли бы себе позволить сразу, и разделить
          платежи на более удобные порции.
        </p>
      </div>
    </div>
  );
};

export default InstallmentPage;
