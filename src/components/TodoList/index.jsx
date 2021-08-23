import React, { Component } from 'react'
import { Card, Table, Space, Modal } from 'antd';
import { data } from '../../config/todo_list'

import AddForm from '../AddForm'
import ChangeForm from '../ChangeForm'

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

    showChange = (list) => {
        console.log(list)
        this.list = list
        this.setState({ isModalVisible: 2, currentKey: list.key });
    };

    addList = () => {
        const { data } = this.state
        const list = { key: data.length + 1, name: this.state.addname, remark: this.state.addremark }
        const newData = [list, ...data]

        this.setState({ isModalVisible: 0, data: newData, });

    };



    changeList = () => {

        const data = this.state.data.map(d => {
            if (d.key === this.state.currentKey) {
                d.name = this.state.name;
                d.remark = this.state.remark;
            }
            return d
        })


        this.setState({ isModalVisible: 0, data, });


    };

    handleCancel = () => {

        this.setState({ isModalVisible: 0 });

    };

    deleteList = (list) => {
        const { data } = this.state
        const newData = data.filter((d) => {
            return d.key !== list.key
        })
        this.setState({ data: newData })
    }

    


    // 獲取表格標題
    initColums = () => {
        this.columns = [

            {
                title: '代辦事項',
                dataIndex: 'name',
                key: 'name',

            },
            {
                title: '備註',
                width: 250,
                key: 'remark',
                dataIndex: 'remark',

            },
            {
                title: '操作',
                width: 200,
                key: 'action',
                render: (list) => (
                    <Space size="middle">
                        <button>準備倒數</button>
                        <button onClick={() => this.showChange(list)}>修改</button>
                        <button onClick={() => this.deleteList(list)}>刪除</button>
                    </Space>
                ),
            },
        ];

    }
    // 獲取表格資料
    getData = () => {

        this.setState({ data: list })
    }



    componentWillMount() {
        this.initColums()
        this.getData()
    }

    render() {


        const { data, isModalVisible } = this.state
        const list = this.list || {}


        const extra = (
            <div>

                <button onClick={this.showAdd}>+添加任務事項</button>
            </div>
        )




        return (
            <div className="card">
                <Card title="代辦事項" extra={extra} >
                    <Table columns={this.columns} dataSource={data} pagination={false} />
                    <Modal title="添加任務事項" visible={isModalVisible === 1} onOk={this.addList} onCancel={this.handleCancel}>
                        <AddForm
                            addName={(addname) => { this.setState({ addname }) }}
                            addRemark={(addremark) => { this.setState({ addremark }) }}
                        />
                    </Modal>
                    <Modal title="修改任務事項" visible={isModalVisible === 2} onOk={this.changeList} onCancel={this.handleCancel}>
                        <ChangeForm
                            listName={list.name}
                            listRemark={list.remark}
                            setName={(name) => { this.setState({ name }) }}
                            setRemark={(remark) => { this.setState({ remark }) }}
                        />
                    </Modal>
                </Card>
            </div>
        )
    }
}
