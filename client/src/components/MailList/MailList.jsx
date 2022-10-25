import "./MailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Экономьте время и деньги!</h1>
      <span className="mailDesc">Зарегистрируйтесь, и мы отправим вам лучшие предложения</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email" />
        <button>Подписаться</button>
      </div>
    </div>
  )
}

export default MailList