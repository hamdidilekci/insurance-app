import { Button, Checkbox, DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 36,
        },
        sm: {
            span: 8,
        },
        lg: {
            span: 12,
        }
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        }
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 12,
        },
    },
};

const MyForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            className='form'
        >
            <Form.Item
                name="FirstName"
                label="First Name"
                rules={[
                    { required: true, message: 'Please input your First Name!' },
                ]}
            >
                <Input allowClear />
            </Form.Item>

            <Form.Item
                name="LastName"
                label="Last Name"
                rules={[
                    { required: true, message: 'Please input your Last Name!' },
                ]}
            >
                <Input allowClear />
            </Form.Item>

            <Form.Item
                name="TC"
                label="TC Kimlik No"
                rules={[
                    { required: true, message: 'Please input your TC!' },
                    { type: Number, message: 'Field must be number!'}
                ]}
                hasFeedback
            >
                <Input
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    minLength={11}
                    maxLength={11}
                    showCount
                    allowClear
                />
            </Form.Item>

            <Form.Item
                name="PhoneNumber"
                label="Phone Number"
                rules={[
                    { required: true, message: 'Please input your Phone Number!' },
                ]}
                hasFeedback
            >
                <Input
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    minLength={10}
                    maxLength={10}
                    showCount
                    allowClear
                />
            </Form.Item>

            <Form.Item
                name="Plate"
                label="Plate"
                rules={[
                    { required: true, message: 'Please input your Plate!' },
                ]}
            >
                <Input allowClear />
            </Form.Item>

            <Form.Item
                name="documentNumber"
                label="Document Number"
                rules={[
                    { required: true, message: 'Please input your document number!' },
                ]}
            >
                <Input allowClear />
            </Form.Item>


            <Form.Item
                name="Address"
                label="Address"
                style={{
                    marginBottom: '1px',
                  }}
                rules={[
                    {
                        required: true,
                        message: 'Please enter your address',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
                name="BirthDate" 
                label="Birth Date"
                rules= {[
                    {
                        type: 'object',
                        required: true,
                        message: 'Please select time!',
                    },
                ]}
            >
                <DatePicker
                    defaultValue={dayjs('01-01-2023', 'DD/MM/YY')}
                    format={['DD/MM/YYYY', 'DD/MM/YY']} 
                    style={{ display: 'flex', width: '200px' }}
                />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="#/">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
export default MyForm;