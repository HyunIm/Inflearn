import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3;

  constructor(props) {
    super(props);

    this.state = {
      information: [
        {
          id: 0,
          name: '홍길동',
          phone: '010-0000-0001',
        },
        {
          id: 1,
          name: '임현',
          phone: '010-0000-0002',
        },
        {
          id: 2,
          name: '리액트',
          phone: '010-0000-0003',
        },
      ],
      keyword: '',
    }
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  handleCreate(data) {
    this.setState({
      information: this.state.information.concat({
        name: data.name,
        phone: data.phone,
        id: this.id++,
      }),
    })
  }

  handleRemove(id) {
    this.setState({
      information: this.state.information.filter(info => info.id !== id),
    });
  }

  handleUpdate(id, data) {
    this.setState({
      information: this.state.information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ... data,
            };
          }
          return info;
        }
      )
    })
  }

  handle

  render() {
    return (
      <div>
        <PhoneForm onCreate={(data) => this.handleCreate(data)}/>
        <input
          value={this.state.keyword}
          onChange={(e) => this.handleChange(e)}
          placeholder="검색..."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={(id) => this.handleRemove(id)}
          onUpdate={(id, data) => this.handleUpdate(id, data)}
        />
      </div>
    );
  }
}

export default App;
