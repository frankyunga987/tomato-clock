import React, { Component } from 'react'

import { Form, Input } from 'antd';

export default class AddForm extends Component {
    addFormRef = React.createRef();

    render() {
        return (
            <Form
                ref={this.addFormRef}
                initialValues={null}
                onValuesChange={(v) => {
                    if (v.name) {
                        this.props.addName(v.name);
                    } else if (v.hint) {
                        this.props.addRemark(v.hint);
                    }
                }}
            >
                <span>新增代辦事項名稱:</span>
                <Form.Item name="name"  >
                    <Input />
                </Form.Item>

                <span>新增備註:</span>
                <Form.Item name="hint">
                    <Input />
                </Form.Item>
            </Form>
        )
    }
}
