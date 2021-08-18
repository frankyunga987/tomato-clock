import React, { Component } from 'react'
import { Card, Table, Tag, Space, Modal } from 'antd';
import { data } from '../../config/todo_list'



import './index.css';

const list = data


export default class TodoList extends Component {
    state = {
        isModalVisible: 0,

        data: []
    }

    showAdd = () => {
        this.setState({ isModalVisible: 1 });
    };

    showChange = () => {
        this.setState({ isModalVisible: 2 });
    };

    handleOk = () => {
        this.setState({ isModalVisible: 0 });

    };

    handleCancel = () => {
        this.setState({ isModalVisible: 0 });

    };

    initColums = () => {
        this.columns = [

            {
                title: '代辦事項',
                dataIndex: 'name',
                key: 'name',

            },
            {
                title: '標籤',
                width: 250,
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: '操作',
                width: 200,
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <button>準備倒數</button>
                        <button onClick={this.showChange}>修改</button>
                        <button>刪除</button>
                    </Space>
                ),
            },
        ];

    }

    getData = () => {

        this.setState({ data: list })
    }

    componentWillMount() {
        this.initColums()
        this.getData()
    }

    render() {
        const { data, isModalVisible, } = this.state

        const extra = (
            <div>
                <input type="text" placeholder="輸入你的任務名稱" />
                <button onClick={this.showAdd}>+添加</button>
            </div>
        )




        return (
            <div className="card">
                <Card title="代辦事項" extra={extra} >
                    <Table columns={this.columns} dataSource={data} pagination={false} />
                    <Modal title="添加任務事項" visible={isModalVisible === 1} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                    <Modal title="修改任務事項" visible={isModalVisible === 2} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </Card>
            </div>
        )
    }
}
