import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header, Input, Dropdown } from 'semantic-ui-react';
import history from '../../history';
import '../Reviews/ReviewNavigation.css';
// import { stateOptions } from '../../redux/types';

class ProjectNavigation extends Component {
  state = {
    activeItem: this.props.placeholder,
    search_word: ''
   }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  // <Form.Field width={4}>
  //   <label> Birth Date </label>
  //   <input placeholder={this.state.birth_date ? this.state.birth_date : "Birth Date" } onChange={(event) => {this.setState({birth_date: event.target.value})}} />
  // </Form.Field>


  render () {
    console.log(this.state.search_word);
    const { activeItem } = this.state
    const stateOptions = [{text: 'Module 1'}, {text: 'Module 2'}, {text: 'Module 3'}, {text: 'Module 4'}, {text: 'Module 5'}, {text: 'Data Science'}];

    return (
      <div className="background-nav">
      <Menu pointing secondary size='large'>
        <Input focus placeholder='Search...' onChange={(event) => {this.setState({search_word: event.target.value})}}/>
        <Dropdown placeholder='State' search selection options={stateOptions}  />
        <Menu.Menu position='right'>
        <Menu.Item
          name='Add Project'
          active={activeItem === 'logout'}
          onClick={() => history.push("/add-project")}
          />
        <Menu.Item
          name='Profile'
          active={activeItem === 'logout'}
          onClick={() => history.push("/home")}
          />
        </Menu.Menu>
      </Menu>
    </div>
    )
  }
}

export default ProjectNavigation
