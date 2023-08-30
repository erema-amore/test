import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">О Нас</h2>
        <p className="text-gray-700 leading-relaxed">
          Мы команда профессионалов, стремящихся предоставлять качественные услуги нашим клиентам.
          Наша цель - удовлетворить потребности наших клиентов и помочь им достичь успеха в своих
          проектах и идеях.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Мы специализируемся на разработке высококачественных веб-приложений и предоставляем
          консультации по различным аспектам информационных технологий.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
