import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Обработчик для открытия/закрытия секций
  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    // Обработчик прокрутки для параллакса
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



  return (

    // ПЕРВАЯ СЕКЦИЯ 
    <div className="App">
   <section className='header_section'>
    <header className="header">
      <div className="navigation_bar">
        <div className="logo">DARK TACTICS UNIT</div>
        <nav className="menu">
          <a href="#">Кейсы</a>
          <a href="#">Технологии</a>
          <a href="#">Процессы</a>
          <a href="#">Цифры</a>
        </nav>
        <button className="cta_button">Обсудить проект</button>
      </div>
      <div className="header_content">
        <h1>Разрабатываем сайты и сервисы любой сложности</h1>
        <p>Создаем функциональные проекты на основе реальных данных. От простых лендингов до сложных порталов. Делаем ваш бизнес мощнее.</p>
        <div className="header_buttons">
          <button className="primary_button">Написать нам</button>
          <button className="showreel_button">Showreel →</button>
        </div>
        <div className="tags">
          <span>UX/UI дизайн</span>
          <span>Разработка</span>
          <span>Аналитика</span>
          <span>+20</span>
        </div>
      </div>
    </header>
   </section>


{/* ВТОРАЯ СЕКЦИЯ */} 
<section className="services-section">
        <h2>Что мы умеем</h2>
        <div className="services-list">
          {[
            { title: 'Сайты и интернет-магазины', content: 'Содержимое для сайтов и интернет-магазинов' },
            { title: 'Интеграции, порталы, личные кабинеты', content: 'Содержимое для интеграций и порталов' },
            { title: 'Мобильные приложения', content: 'Содержимое для мобильных приложений' },
            { title: 'Лендинги и промо-страницы', content: 'Содержимое для лендингов и промо-страниц' },
          ].map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-header" onClick={() => toggleSection(index)}>
                <span>{service.title}</span>
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
      </section>
  

    {/* Третья секция - Скроллинг текста */}
    <section className="scrolling-text-section">
    <h2>Современные веб-решения для успешного онлайн-присутствия</h2>
    <div className="scrolling-container">
      {[
        "Прототипирование", "Проектирование", "Исследования", "Дизайн-системы", "UX/UI дизайн", 
        "Базы данных", "Python", "React.js", "Vue.js", "Node.js", "JavaScript", 
        "Laravel", "Strapi", "Docker", "PostgreSQL", "MySQL", "Интеграции", "GoLang"
      ].map((text, index) => (
        <div
          key={index}
          className="scrolling-item"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }} // Параллаксовый эффект
        >
          {text}
        </div>
      ))}
    </div>
  </section>

   {/* Новая секция с текстом и аватарами */}
   <section className="team-section">
        <div className="team-content">
          <h2>
            Мы верим в командную работу, инновации и постоянное развитие.
            Наша цель — создавать настоящие цифровые продукты, которые будут полезны и интересны пользователям.
          </h2>
          <button className="contact-button">Связаться с нами</button>
        </div>
        <div className="team-avatars">
          <img src="avatar1.jpg" alt="Член команды 1" className="avatar" />
          <img src="avatar2.jpg" alt="Член команды 2" className="avatar" />
          <img src="avatar3.jpg" alt="Член команды 3" className="avatar" />
          <img src="avatar4.jpg" alt="Член команды 4" className="avatar" />
          <img src="avatar5.jpg" alt="Член команды 5" className="avatar" />
          <img src="avatar6.jpg" alt="Член команды 6" className="avatar" />
        </div>
        <p className="team-description">
          С нами всегда комфортно и эффективно. Каждый член команды привносит свои уникальные навыки и опыт, что позволяет нам решать сложные задачи.
        </p>
      </section>

      <section className="work-formats-section">
  <h2>Форматы работы</h2>
  <div className="formats-grid">
    <div className="format-card">
      <h3>Fixed Price</h3>
      <p>Для проектов с фиксированными сроками и бюджетом</p>
    </div>
    <div className="format-card">
      <h3>Time & Material</h3>
      <p>Для гибкого планирования длинных и сложных проектов</p>
    </div>
    <div className="format-card">
      <h3>Retainer</h3>
      <p>Выделенная команда с настроенными процессами</p>
    </div>
    <div className="format-card active">
      <h3>Outstaff</h3>
      <p>Усилим вашу команду нашими специалистами с разным опытом</p>
    </div>
  </div>

  <h2>Как мы работаем</h2>
  <div className="steps-grid">
    <div className="step-card">
      <h4>01</h4>
      <p>Собираем требования</p>
    </div>
    <div className="step-card">
      <h4>02</h4>
      <p>Прозрачно планируем</p>
    </div>
    <div className="step-card">
      <h4>03</h4>
      <p>Прозрачно планируем</p>
    </div>
    <div className="step-card">
      <h4>04</h4>
      <p>Делаем дизайн под ключ</p>
    </div>
    <div className="step-card">
      <h4>05</h4>
      <p>Начинаем фронт- и бэк-разработку</p>
    </div>
    <div className="step-card">
      <h4>06</h4>
      <p>Оказываем поддержку и продолжаем развитие</p>
    </div>
  </div>
</section>

<section className="discuss-project-section">
  <div className="contact-info">
    <h2>Обсудить проект</h2>
    <div className="contact-details">
      <img
        src="https://via.placeholder.com/100" /* Замените на реальную картинку менеджера */
        alt="Менеджер"
        className="contact-photo"
      />
      <p>Sales-менеджер Темирлан ответит на ваши вопросы и организует встречу</p>
      <a href="https://t.me/username" className="telegram-button">
        Написать в Телеграм
      </a>
    </div>
  </div>
  <div className="form-wrapper">
    <form className="project-form">
      <label htmlFor="name">Имя *</label>
      <input type="text" id="name" required />
      
      <label htmlFor="phone">Телефон *</label>
      <input type="tel" id="phone" required />
      
      <label htmlFor="task">Опишите вашу задачу</label>
      <textarea id="task"></textarea>

      <label htmlFor="file-upload" className="file-upload-label">+ Выбрать файл</label>
      <input type="file" id="file-upload" className="file-upload-input" />

      <button type="submit" className="submit-button">Отправить</button>
      <p className="disclaimer">
        Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  </div>
</section>


<footer className="footer">
      <div className="footer-container">
        {/* Логотип и информация */}
        <div className="footer-logo">
          <img src="https://via.placeholder.com/150" alt="Logo" />
          <p>Мы создаем современные веб-решения для вашего бизнеса.</p>
        </div>

        {/* Навигационные ссылки */}
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/about">О нас</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/projects">Проекты</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </div>

        {/* Социальные сети */}
        <div className="footer-social">
          <h4>Мы в соцсетях</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </div>

        {/* Контактная информация */}
        <div className="footer-contact">
          <h4>Контакты</h4>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: info@company.com</p>
          <p>Адрес: Санкт-Петербург, ул. Примерная, д. 1</p>
        </div>
      </div>

      {/* Копирайт */}
      <div className="footer-bottom">
        <p>&copy; 2024 Все права защищены.</p>
      </div>
    </footer>
</div>




  );
}

export default App;
