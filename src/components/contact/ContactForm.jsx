'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactForm = ({ translations }) => {
  // Состояние формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Состояние отправки
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error' или null
  
  // Обработка изменений полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Здесь будет реальная отправка данных на сервер
      // В демо-версии просто имитируем задержку
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Имитация успешной отправки
      setSubmitStatus('success');
      // Сброс формы
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Сброс статуса через некоторое время
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Сброс статуса ошибки через некоторое время
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark-surface p-6 md:p-8 rounded-lg border border-dark-surface-2/50 dark:bg-dark-surface dark:border-dark-surface-2/50 light:bg-light-surface light:border-light-gray/10">
      {submitStatus === 'success' ? (
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
          <svg className="mx-auto h-12 w-12 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-heading font-semibold mb-2 text-dark-white dark:text-dark-white light:text-light-black">
            {translations?.contact?.form?.success?.title || 'Сообщение отправлено!'}
          </h3>
          <p className="text-dark-gray dark:text-dark-gray light:text-light-gray">
            {translations?.contact?.form?.success || 'Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.'}
          </p>
          <Button
            variant="primary"
            className="mt-6"
            onClick={() => setSubmitStatus(null)}
          >
            {translations?.contact?.form?.backToForm || 'Вернуться к форме'}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Сообщение об ошибке */}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 mb-6">
              <p>{translations?.contact?.form?.error || 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.'}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Имя */}
            <div>
              <label htmlFor="name" className="block mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                {translations?.contact?.form?.name || 'Ваше имя'}
                <span className="text-primary ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-dark-surface-2/50 border border-dark-surface-2 rounded-lg placeholder:text-dark-gray/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-dark-white dark:bg-dark-surface-2/50 dark:border-dark-surface-2 dark:text-dark-white light:bg-light-surface-2/50 light:border-light-gray/20 light:text-light-black"
                placeholder={translations?.contact?.form?.name || 'Ваше имя'}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                {translations?.contact?.form?.email || 'Ваш email'}
                <span className="text-primary ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-dark-surface-2/50 border border-dark-surface-2 rounded-lg placeholder:text-dark-gray/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-dark-white dark:bg-dark-surface-2/50 dark:border-dark-surface-2 dark:text-dark-white light:bg-light-surface-2/50 light:border-light-gray/20 light:text-light-black"
                placeholder={translations?.contact?.form?.email || 'Ваш email'}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                {translations?.contact?.form?.phone || 'Ваш телефон'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-dark-surface-2/50 border border-dark-surface-2 rounded-lg placeholder:text-dark-gray/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-dark-white dark:bg-dark-surface-2/50 dark:border-dark-surface-2 dark:text-dark-white light:bg-light-surface-2/50 light:border-light-gray/20 light:text-light-black"
                placeholder={translations?.contact?.form?.phone || 'Ваш телефон'}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            {/* Тема */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-dark-white dark:text-dark-white light:text-light-black">
                {translations?.contact?.form?.subject || 'Тема'}
                <span className="text-primary ml-1">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-dark-surface-2/50 border border-dark-surface-2 rounded-lg placeholder:text-dark-gray/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-dark-white dark:bg-dark-surface-2/50 dark:border-dark-surface-2 dark:text-dark-white light:bg-light-surface-2/50 light:border-light-gray/20 light:text-light-black"
                placeholder={translations?.contact?.form?.subject || 'Тема'}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {/* Сообщение */}
          <div>
            <label htmlFor="message" className="block mb-2 text-dark-white dark:text-dark-white light:text-light-black">
              {translations?.contact?.form?.message || 'Ваше сообщение'}
              <span className="text-primary ml-1">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 bg-dark-surface-2/50 border border-dark-surface-2 rounded-lg placeholder:text-dark-gray/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-dark-white dark:bg-dark-surface-2/50 dark:border-dark-surface-2 dark:text-dark-white light:bg-light-surface-2/50 light:border-light-gray/20 light:text-light-black"
              placeholder={translations?.contact?.form?.message || 'Ваше сообщение'}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          {/* Кнопка отправки */}
          <div>
            <Button
              variant="primary"
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting 
                ? (translations?.contact?.form?.sending || 'Отправка...') 
                : (translations?.contact?.form?.submit || 'Отправить сообщение')}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;