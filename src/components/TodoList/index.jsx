import React, { Component } from 'react'
import { Card, Table, Tag, Space ,Checkbox  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './index.css';




export default class TodoList extends Component {
    // addTodo = (todoObj) => {
    //     const { todos } = this.state
    //     const newTodos = [todoObj, ...data]
    //     this.setState({ todos: newTodos })
    // }
    
    render() {


        const extra = (
            <div>
                <input  type="text" placeholder="輸入你的任務名稱" />
                <button>+添加</button>
            </div>
        )

        const columns = [
            
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
                        <a>準備倒數</a>
                        <a>修改</a>
                        <a>刪除</a>
                    </Space>
                ),
            },
        ];
        
        const data = [
            {
                key: '1',
                name: '吃飯',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: '打Code',
                tags: ['loser'],
            },
            {
                key: '3',
                name: '運動',
                tags: ['cool', 'teacher'],
            },
        ];

        return (
            <div className="card">
                <Card title="代辦事項"  extra={extra} >
                    <Table columns={columns} dataSource={data}/>
                </Card>
            </div>
        )
    }
}
