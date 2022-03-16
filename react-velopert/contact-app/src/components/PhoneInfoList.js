import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defalutProps = {
        data: [],
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        console.log('rendering list');
        
        const list = data.map(
            info => (
            <PhoneInfo
              onRemove={(id) => onRemove(id)}
              onUpdate={(id, data) => onUpdate(id, data)}
              info={info}
              key={info.id}
            />)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
