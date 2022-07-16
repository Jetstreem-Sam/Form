import React, { Component } from 'react'

export class AddUser extends Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "", 
            img: 1,
            isHappy: false
        }
    }
  render() {
    return (
      <form ref={(el) => this.myForm = el}>
        <input placeholder='Имя' onChange={(e) => this.setState({ first_name: e.target.value })} />
        <input placeholder='Фамилия' onChange={(e) => this.setState({ last_name: e.target.value })} />
        <textarea placeholder='эл.почта' onChange={(e) => this.setState({ email: e.target.value })} ></textarea>
        <input placeholder='Возраст'onChange={(e) => this.setState({ age: e.target.value })} />
        <label htmlFor="isHappy">Счастлив?</label>
        <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
        <button type='button' onClick={() => {
            this.myForm.reset()
            this.userAdd = {
                    first_name:  this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                }
                if(this.props.user)
                    this.userAdd.id = this.props.user.id
            this.props.onAdd(this.userAdd)
        }
    }>Добавить</button>
      </form>
    )
  }
}

export default AddUser