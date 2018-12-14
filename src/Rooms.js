import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import io from 'socket.io-client';

import SelectRoom from './SeletRoom';
import Room from './Room';
class Rooms extends Component {
  constructor(props) {
    super(props)
    const token = window.localStorage.getItem('token')
    const socket = io(`http://localhost:3030?token=${token}`)

    this.state = {
      rooms: [],
      msgs: {}
    }

    // addRoom
    socket.on('newRoom', room => {
      this.setState({
        rooms: [...this.state.rooms, room]
      })
    })
    // recebe a lista inicial de rooms
    socket.on('roomList', rooms => {
      this.setState({
        rooms: rooms
      })
    })
    socket.on('newMsg', msg => {
      // if(selectedRoom === msg.room){
      //   addMsg(msg)
      // }else{
      //   console.log(msg)
      // atualizar contador de msgs nao lidas
      //   const id = msg.room
      //   console.log($('#'+id+' .notifications span'))
      //   let count = parseInt($('#'+id+' .notifications span').text())
      //   count++
      //   $('#'+id+' .notifications span').text(count)
      // }
    })

    socket.on('newAudio', msg => {
      // if(selectedRoom === msg.room){
      //   addMsg(msg)
      // }else{
      // atualizar contador de msgs nao lidas
      // }
    })

    socket.on('msgsList', msgs => {
      //   $('.messages').html('')
      //   msgs.map(addMsg)
    })
  }


  render () {
    return (
    <div className="container w-container">
      <div className="rooms">
        <h1 className="title-rooms">Salas Disponíveis</h1>
        <ul className="room-list w-list-unstyled">
        {
          this.state.rooms.map(room => {
            return (
              <li className="room-item" key={room._id} >
                <Link to={`/rooms/${room._id}` }>
                  {room.name}
                </Link>
              </li>
            )
          })
          /** 
          <li className="room-item">Sala 3 <span className="notifications">(2)</span></li>*/
        }
        </ul>
        <div className="add-room">+</div>
      </div>
      <Route path='/rooms' exact component={SelectRoom}/>
      <Route path='/rooms/:room' component={Room}/>
    </div>
  )
  }
}

export default Rooms
