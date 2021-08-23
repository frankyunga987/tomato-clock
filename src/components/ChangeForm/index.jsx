import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Form, Input } from 'antd';

export default class ChangeForm extends Component {
    static propTypes = {
        setName: PropTypes.func.isRequired,
        setRemark: PropTypes.func.isRequired
    }

    
       
    

    render() {
       
        
        return (
            <Form initialValues={''}>
                <Form.Item>
                    <span>修改代辦事項名稱:</span>
                    <Input onChange={(e)=>{this.props.setName(e.target.value)}} defaultValue={this.props.listName}/>
                </Form.Item>

                <Form.Item>
                <span>修改備註:</span>
                    <Input onChange={(e)=>{this.props.setRemark(e.target.value)}} defaultValue={this.props.listRemark}/>
                </Form.Item>
            </Form>
        )
    }
}
