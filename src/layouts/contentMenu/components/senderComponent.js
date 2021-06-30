import { useState } from 'react';
import {Row, Input, Col, Select, AutoComplete, Space, Typography} from 'antd';

import {
    PhoneOutlined,
    SmileOutlined,
    SmileFilled,
    InteractionOutlined
} from '@ant-design/icons';
import { Children } from 'react';
const {Option} = Select;
const {Paragraph} = Typography;
const children = [];

for(let i=10;i<36;i++){
    children.push(<Option value={i.toString(36)+1}>{i.toString(36)+1}</Option>)
}
export default function SenderScreen() {
    console.log(children);
    const [inputValue, setInputValue] = useState([]);
    console.log(inputValue);
    return (
        <>
        <Row style={{textAlign:'center'}}>
            <Col span={24}>
            <Paragraph
        copyable={{
          icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
          tooltips: ['click here', 'you clicked!!'],
        }}
        style={{display:"inline-block"}}
      >
        Hello Sender Page
      </Paragraph>
            </Col>
        </Row>
        <Row>
            <Col span={12} style={{padding:'12px'}}>
            
                <Row className="edit-input-type">
                    <Input.Group>
                        <Input addonBefore={<PhoneOutlined />}
                            style={{width:37}}
                        >  
                        </Input>
                        <Select
                            showSearch
                            style={{ width: '87%' }}
                            placeholder="Please choose device"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                            
                        >
                            {children}
                        </Select>
                    </Input.Group>
                </Row>
                <Row className="edit-input-type">
                        <Input 
                            addonBefore={<InteractionOutlined />}
                            style={{width:37}} />
                        <Select
                            showSearch
                            style={{ width: '87%' }}
                            placeholder="Please choose Action"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                            
                        >
                            <Option value="message">SMS</Option>
                            <Option value="Call">Call</Option>
                        </Select>
                </Row>
            </Col>
            <Col span={12}>
                this is col 2
            </Col>
        </Row>
        </>
    )
}
