import React from 'react';

const CreditPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Кредит</h2>
        <p className="text-gray-700 leading-relaxed">
          Кредит - это финансовая услуга, при которой кредитор предоставляет
          определенную сумму денег заемщику на определенный срок с обязательством
          вернуть сумму вместе с процентами.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Кредиты используются для покупки товаров, услуг, недвижимости и других
          потребительских и инвестиционных целей. Они позволяют заемщикам
          распределить свои расходы и реализовать долгосрочные планы.
        </p>
      </div>
    </div>
  );
};

export default CreditPage;
