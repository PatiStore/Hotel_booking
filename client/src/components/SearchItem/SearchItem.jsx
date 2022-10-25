import './SearchItem.css'

const SearchItem = () => {
    return (
        <div className="searchItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500м от центра</span>
            <span className="siTaxiOp">Бесплатное такси с аэропорта</span>
            <span className="siSubtitle">
            Апартаменты-студио с кондиционером
            </span>
            <span className="siFeatures">
              Вся студия • 1 ванная • 21м² 1 кровать
            </span>
            <span className="siCancelOp">Бесплатное аннулирование </span>
            <span className="siCancelOpSubtitle">
            Вы можете отменить позже, так что зафиксируйте эту отличную цену сегодня!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Отлично!</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">60000р</span>
              <span className="siTaxOp">Включая налоги и сборы</span>
              <button className="siCheckButton">Посмотреть наличие</button>
            </div>
          </div>
        </div>
  )
}

export default SearchItem