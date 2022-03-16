import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                      name="name"
                      placeholder="이름"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.name}
                      ref={this.input}
                    />
                    <input
                      name="phone"
                      placeholder="전화번호"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.phone}
                    />
                    <button type="submit">등록</button>
                </form>
            </div>
        );
    }
}

export default PhoneForm;
