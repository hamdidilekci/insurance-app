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
    const handleSubmit = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="complex-form"
            onFinish={handleSubmit}
            scrollToFirstError
            className='form'
        >
            <Form.Item
                name="FirstName"
                label="Ad"
                rules={[
                    { required: true, message: 'Lütfen Adınızı Giriniz!' },
                ]}
            >
                <Input allowClear />
            </Form.Item>

            <Form.Item
                name="LastName"
                label="Soyad"
                rules={[
                    { required: true, message: 'Lütfen Soyadınızı Giriniz!' },
                ]}
            >
                <Input allowClear />
            </Form.Item>

            <Form.Item
                name="IDNumber"
                label="TC Kimlik No"
                rules={[
                    { required: true, message: 'Lütfen Türkiye Cumhuriyeti Kimlik Numaranızı Giriniz!' },
                    { type: Number, message: 'Bu Alana Sadece Sayı Girebilirsiniz!' }
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
                label="Telefon Numarası"
                rules={[
                    { required: true, message: 'Lütfen Cep Telefonu Numaranızı Başında 0 olmadan giriniz!' },
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
                label='Plaka'
                name="Plate"
                rules={[
                    { required: true, message: 'Lütfen plakanızı giriniz!' },
                ]}
                hasFeedback
            >
                <Input.Group compact>
                    <Form.Item
                        name={['Plate', 'cityCode']}
                        noStyle
                    >
                        <Input style={{
                            width: '20%',
                        }}
                            maxLength={2}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        name={['Plate', 'string']}
                        noStyle
                    >
                        <Input
                            style={{
                                width: '20%',
                            }}
                            onInput={e => e.target.value = e.target.value.toUpperCase()}
                            onKeyPress={(event) => {
                                if (!/[a-z]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            maxLength={5}
                        />
                    </Form.Item>
                    <Form.Item
                        name={['Plate', 'lastNumber']}
                        noStyle
                    >
                        <Input style={{
                            width: '20%',
                        }}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                            maxLength={6}
                        />
                    </Form.Item>
                </Input.Group>
            </Form.Item>

            <Form.Item
                name="documentNumber"
                label="Ruhsat No"
                rules={[
                    { required: true, message: 'Lütfen Ruhsat No Giriniz!' },
                ]}
            >
                <Input allowClear />
            </Form.Item>


            <Form.Item
                name="Address"
                label="Adres"
                style={{
                    marginBottom: '1px',
                }}
                rules={[
                    {
                        required: true,
                        message: 'Lütfen Adres Giriniz',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
                name="BirthDate"
                label="Doğum Tarihi"
                rules={[
                    {
                        type: 'object',
                        required: true,
                        message: 'Lütfen Doğum Tarihinizi Seçiniz!',
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
                            value ? Promise.resolve() : Promise.reject(new Error('Sözleşmeyi Kabul Etmeden İlerleyemezsiniz')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    Kullanıcı <a href="#/">Sözleşmesini</a> Okudum.
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Kaydol
                </Button>
            </Form.Item>
        </Form>
    );
};
export default MyForm;