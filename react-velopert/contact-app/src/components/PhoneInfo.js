import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            name: '',
            phone: '',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    

    handleRemove() {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEidt() {
        if (this.state.editing) {
            this.props.onUpdate(this.props.info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }
        else {
            this.setState({
                name: this.props.info.name,
                phone: this.props.info.phone,
            })
        }

        this.setState({
            editing: !this.state.editing,
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const { name, phone } = this.props.info;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        console.log(name);

        return (
            <div style={style}>
                {
                    this.state.editing ? (
                        <Fragment>
                            <div>
                                <input
                                    name="name"
                                    onChange={(e) => this.handleChange(e)}
                                    value = {this.state.name}
                                />
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    onChange={(e) => this.handleChange(e)}
                                    value = {this.state.phone}
                                />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={(id) => this.handleRemove(id)}>삭제</button>
                <button onClick={(id, data) => this.handleToggleEidt(id, data)}>
                    { this.state.editing ? '적용' : '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;
