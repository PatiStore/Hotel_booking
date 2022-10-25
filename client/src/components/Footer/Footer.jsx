import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Страны</li>
          <li className="fListItem">Регионы</li>
          <li className="fListItem">Города</li>
          <li className="fListItem">Районы</li>
          <li className="fListItem">Аэропорты</li>
          <li className="fListItem">Отели</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Дома </li>
          <li className="fListItem">Апартаменты </li>
          <li className="fListItem">Курорты </li>
          <li className="fListItem">Хижины</li>
          <li className="fListItem">Хостелы</li>
          <li className="fListItem">Гостинницы</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Уникальные места проживания </li>
          <li className="fListItem">Обзоры</li>
          <li className="fListItem">Туристические статьи </li>
          <li className="fListItem">Сообщества путешественников </li>
          <li className="fListItem">Сезонные предложения </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Прокат автомобилей </li>
          <li className="fListItem">Поиск рейсов</li>
          <li className="fListItem">Заказ столика в ресторане </li>
          <li className="fListItem">Туристические агенты </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Обслуживание клиентов</li>
          <li className="fListItem">Помощь партнера</li>
          <li className="fListItem">Карьера</li>
          <li className="fListItem">Устойчивость</li>
          <li className="fListItem">Пресс-центр</li>
          <li className="fListItem">Центр по безопасности</li>
          <li className="fListItem">Отношения с инвесторами</li>
          <li className="fListItem">Условия</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 GurzHotel.</div>
    </div>
  );
};

export default Footer;