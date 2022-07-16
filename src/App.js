import React from "react";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Users from "./components/Users";
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1" 

class App extends React.Component {
  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState({users: res.data.data})
    })

    this.state = {
        users: []
    }
    this.AddUser = this.AddUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}
render () {
    return (
    <div className="App">         
    <Header />       
      <aside>
        <AddUser onAdd={this.AddUser} />
      </aside>
      <main>
        <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
      </main>
    </div>
  );
}

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
      this.setState({users: [...allUsers] })
    })
  }

  AddUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, { id, ...user}] })
  }

}

export default App;
