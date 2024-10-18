// РАЗДЕЛ С ХУКАМИ - ПОЗВОЛЯЕТ ИСПОЛЬЗОВАТЬ СОСТОЯНИЕ ФУНКЦИЙ 
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import './App.css';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Стейт для активной секции
  const [scrollY, setScrollY] = useState(0); // Стейт для отслеживания вертикальной прокрутки
  const scrollSectionRef = useRef(null); // Ссылка на секцию для прокрутки

  // Функция для переключения активной секции
  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Переключаем активную секцию
  };

  // Хук для отслеживания прокрутки страницы и обновления значения scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Обновляем позицию прокрутки
    };

    window.addEventListener('scroll', handleScroll); // Добавляем обработчик события прокрутки
    return () => {
      window.removeEventListener('scroll', handleScroll); // Убираем обработчик при размонтировании
    };
  }, []);











  return (
    <body>
    <div className='App'>
      {/* ЗАГОЛОВОК СТРАНИЦЫ */}
      <header className="header">
        <section className='header_section'>
          <div className="navigation_bar">
            <div className="logo">SHG</div>
            <nav className="menu">
              <a href="#">Агенство</a>
              <a href="#">Услуги</a>
              <a href="#">Технологии</a>
              <a href="#">Формат работы</a>
              <a href="#">Контакты</a>
            </nav>
            <button className="cta_button">Обсудить проект</button>
          </div>
        </section>
      </header>

      {/* ПЕРВАЯ СЕКЦИЯ - ИНФОРМАЦИЯ О КОМПАНИИ */}
      <section className="company_information">
        <div className='company_content'>
          <div className="left">
            <h1>Мы занимаемся разработкой веб-приложений и телеграм-ботов</h1>
          </div>
          <div className="right">
            <p>Мы создаем функциональные проекты, основанные на реальных данных. От простых целевых страниц до сложных порталов. Мы делаем ваш бизнес более мощным.</p>
            <div className="company_bottons">
              <button className="primary_button">Написать нам</button>
            </div>
            <div className="tags">
              <span>Боты</span>
              <span>Разработка</span>
              <span>Монтаж</span>
              <span>Трафик</span>
            </div>
          </div>
        </div>
      </section>

      {/* ВТОРАЯ СЕКЦИЯ - ЧТО УМЕЕТ КОМПАНИЯ */}
      <section className="services_section">
        <div className="services_container">
          <h2>Что мы умеем</h2>
          <div className="services_list">
            {[
              { 
                title: 'Сайты и интернет-магазины', 
                content: (
                  <div>
                    <p>Содержимое для сайтов и интернет-магазинов</p>
                    <div className="service-content-images">
                      <img src="image1.jpg" alt="Пример 1" />
                      <img src="image2.jpg" alt="Пример 2" />
                    </div>
                  </div>
                ) 
              },
              { 
                title: 'Интеграции, порталы, личные кабинеты', 
                content: <p>Содержимое для интеграций и порталов</p> 
              },
              { 
                title: 'Мобильные приложения', 
                content: <p>Содержимое для мобильных приложений</p> 
              },
              { 
                title: 'Лендинги и промо-страницы', 
                content: <p>Содержимое для лендингов и промо-страниц</p> 
              },
            ].map((service, index) => (
              <div key={index} className="service_item">
                <div className="service_header" onClick={() => toggleSection(index)}>
                  <span className="custom_title">{service.title}</span>
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="service-content">
                    {service.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Третья секция - Прокрутка */}
<section ref={scrollSectionRef} className="scroll_section">
  <h2>Современные веб-решения для успешного онлайн-присутствия</h2>
  <div className="scroll_container">
    
    {/* Первый ряд - бесконечное движение влево */}
    <motion.div
      className="scroll_row"
      animate={{ x: [0, -200, 0] }}  // Движение влево
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {["Прототипирование", "Проектирование", "Исследования", "Дизайн-системы", "UX/UI дизайн"].map((item, index) => (
        <div key={index} className="scroll_item">
          {item}
        </div>
      ))}
    </motion.div>

    {/* Второй ряд - бесконечное движение вправо */}
    <motion.div
      className="scroll_row"
      animate={{ x: [0, 200, 0] }}  // Движение вправо
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
    >
      {["React.js", "Vue.js", "Node.js", "JavaScript", "Базы данных", "Python", "UX-редактура"].map((item, index) => (
        <div key={index} className="scroll_item">
          {item}
        </div>
      ))}
    </motion.div>

    {/* Третий ряд - бесконечное движение влево */}
    <motion.div
      className="scroll_row"
      animate={{ x: [0, -300, 0] }}  // Движение влево
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      }}
    >
      {["Docker", "Laravel", "Strapi", "Интеграции", "PostgreSQL", "MySQL", "PHP", "Golang"].map((item, index) => (
        <div key={index} className="scroll_item">
          {item}
        </div>
      ))}
    </motion.div>
    
  </div>
</section>




   {/* ЧЕТВЕРТАЯ СЕКЦИЯ - РАЗДЕЛ ПРО КОМАНДУ */}
<section className="team_section">
        <div className="team_content">
          <h2>
          Мы ценим командное взаимодействие, новаторство и непрерывное развитие. Наша миссия — разрабатывать качественные цифровые продукты, которые будут полезны и интересны для пользователей.
          </h2>
          <a href="https://ваша-ссылка.com" target="_blank" className="contact_button">Связаться с нами</a>
        </div>
    
        <p className="team_description">
          С нами всегда комфортно и эффективно. Каждый член команды привносит свои уникальные навыки и опыт, что позволяет нам решать сложные задачи.
        </p>
      </section>
    



{/* ПЯТАЯ СЕКЦИЯ - ФОРМАТ РАБОТЫ */}

<section className="work-formats-section">
  <h2>Форматы работы</h2>
  <div className="formats-grid">
    <div className="format-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>Fixed Price</h3>
          <p>Для проектов с фиксированными сроками и бюджетом</p>
        </div>
        <div className="card-back">
          <p>Детальная информация о Fixed Price</p>
        </div>
      </div>
    </div>

    <div className="format-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>Time & Material</h3>
          <p>Для гибкого планирования длинных и сложных проектов</p>
        </div>
        <div className="card-back">
          <p>Детальная информация о Time & Material</p>
        </div>
      </div>
    </div>

    <div className="format-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>Retainer</h3>
          <p>Выделенная команда с настроенными процессами</p>
        </div>
        <div className="card-back">
          <p>Детальная информация о Retainer</p>
        </div>
      </div>
    </div>

    <div className="format-card">
      <div className="card-inner">
        <div className="card-front">
          <h3>Outstaff</h3>
          <p>Усилим вашу команду нашими специалистами с разным опытом</p>
        </div>
        <div className="card-back">
          <p>Детальная информация о Outstaff</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ШЕСТАЯ СЕКЦИЯ - ОБСУДИТЬ ПРОЕКТ */}

<section className="discuss-project-section">
  <div className="contact_info">
    <h2>Обсудить проект</h2>
    <div className="contact-details">
      
      <p>Sales-менеджер Темирлан ответит на ваши вопросы и организует встречу</p>
      <div className='container_for_button'>
      <a href="https://t.me/username" className="telegram-button">
        Написать в Телеграм
      </a>
      </div>
    </div>
  </div>
  <div className="form-wrapper">
    <form className="project-form">
      <label htmlFor="name">ИМЯ *</label>
      <input type="text" id="name" required />
      
      <label htmlFor="phone">Телефон *</label>
      <input type="tel" id="phone" required />
      
      <label htmlFor="task">Опишите вашу задачу</label>
      <textarea id="task"></textarea>

      <label htmlFor="file-upload" className="file-upload-label">+ Выбрать файл</label>
      <input type="file" id="file-upload" className="file-upload-input" />

      <button type="submit" className="submit_button">Отправить</button>
      <p className="disclaimer">
        Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  </div>
</section>



{/* ПОДВАЛ */}

<footer className='footer_socials'>
  <section className='footer_info'>

  <div className='socials'>
   
    <h2>Написать</h2>
    <p>/почта/</p>
    <a href="@">telegram</a>
  </div>

  <div className='design'>
    <p>designed by<span class="highlight">PRX</span></p>
  </div>

  <div className="footer-bottom">
        <p>&copy; 2024 Dark Tactics Unit.</p>
  </div>


  </section>

</footer>

























</div>
</body>
  );
}
export default App;