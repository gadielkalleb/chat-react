import React from 'react';

const Rooms = (props) => {
  return (
    <div className="container w-container">
      <div className="rooms">
        <h1 className="title-rooms">Salas Disponíveis</h1>
        <ul className="room-list w-list-unstyled">
          <li className="room-item">Sala 1</li>
          <li className="room-item">Sala 2</li>
          <li className="room-item">Sala 3 <span className="notifications">(2)</span></li>
        </ul>
        <div className="add-room">+</div>
      </div>
      <div className="room">
        <div className="messages">
          <div className="message">
            <span className="author">Tulio Faria</span><br/>
            <span className="msg-body">Mensagem aqui</span>
          </div>
        </div>
        <div className="new-message-form w-form">
          <form className="form">
            <textarea id="field" name="field" maxlength="5000" placeholder="Digite sua mensagem e pressione &lt;Enter&gt;" autofocus="true" className="msg w-input"></textarea>
            <button type="button" className="send-audio w-button">Enviar<br/>Áudio</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Rooms
