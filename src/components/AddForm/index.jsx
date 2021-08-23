import React, { Component } from 'react'

import { Form, Input } from 'antd';

export default class AddForm extends Component {



    render() {
        return (
            <Form >
                <Form.Item>
                    <span>新增代辦事項名稱:</span>
                    <Input onChange={(e)=>{this.props.addName(e.target.value)}} />
                </Form.Item>

                <Form.Item>
                <span>新增備註:</span>
                    <Input onChange={(e)=>{this.props.addRemark(e.target.value)}} />
                </Form.Item>
            </Form>
        )
    }
}
