import React, { Component } from 'react'


import { Form, Input } from 'antd';

export default class ChangeForm extends Component {
    changeFormRef = React.createRef()

    render() {

        return (
            <Form
                ref={this.changeFormRef}
                initialValues={null}
                onValuesChange={(v) => {
                    if (v.name) {
                        this.props.changeName(v.name);
                    } else if (v.hint) {
                        this.props.changeRemark(v.hint);
                    }
                }}
            >
                <span>修改代辦事項名稱:</span>
                <Form.Item name="name">
                    <Input />
                </Form.Item>

                <span>修改備註:</span>
                <Form.Item name="hint">
                    <Input />
                </Form.Item>
            </Form>
        )
    }
}
