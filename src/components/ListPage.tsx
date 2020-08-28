import React, { Component } from 'react'
import User from '../class/User'
import axios from 'axios';
import '../css/ListPage.css';

interface State {
  users: User[];
}

export class ListPage extends Component<{}, State> {
  state: State = {
    users: []
  };

  async componentDidMount() {
    let users: User[] = [];

    await axios.get('https://reqres.in/api/users')
      .then(response => { return response.data })
      .then( obj => {
        obj.data.forEach((d: any) => {
          users.push(new User(
            d.id,
            d.email,
            d.first_name,
            d.last_name,
            d.avatar
          ));
        });
      });

    this.setState({users});
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.users.map(user => 
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td><img src={user.avatar} alt={user.first_name} /></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  };
}