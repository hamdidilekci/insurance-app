import { Button, Checkbox, DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';
import Label from './Label';

// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 36,
//         },
//         sm: {
//             span: 8,
//         },
//         lg: {
//             span: -10,
//         }
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 16,
//         },
//         lg: {
//             span: 16,
//         }
//     },
// };
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
            // {...formItemLayout}
            form={form}
            name="complex-form"
            onFinish={handleSubmit}
            scrollToFirstError
        >
            <div className='leftItems'>
                <Form.Item
                    name="FirstName"
                    label={<Label>İsim</Label>}
                    rules={[
                        { required: true, message: 'Lütfen İsminizi Giriniz!' },
                    ]}
                    
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    name="LastName"
                    label={<Label>Soy İsim</Label>}
                    rules={[
                        { required: true, message: 'Lütfen Soyisminizi Giriniz!' },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>
            </div>

            <div className='rigthItems'>
                <Form.Item
                    name="IDNumber"
                    label={<Label>TC Kimlik No</Label>}
                    rules={[
                        { required: true, message: 'Lütfen TC Kimlik Numaranızı Giriniz!' },
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
                        style={{width: '200px'}}
                        minLength={11}
                        maxLength={11}
                        showCount
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    name="BirthDate"
                    label={<Label>Doğum Tarihi</Label>}
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
            </div>

            <div className='leftItems'>
                <Form.Item
                    name="PhoneNumber"
                    label={<Label>Telefon Numarası</Label>}
                    rules={[
                        { required: true, message: 'Telefon Numaranızı Başında 0 olmadan giriniz!' },
                    ]}
                    hasFeedback
                >
                    <Input
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        style={{width: '200px'}}
                        minLength={10}
                        maxLength={10}
                        showCount
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    name="Address"
                    label={<Label>Adres</Label>}
                    style={{
                        marginBottom: '1px',
                    }}
                    rules={[
                        { required: true, message: 'Lütfen Adres Giriniz' }
                    ]}
                >
                    <Input.TextArea 
                        style={{ width: '200px' }}
                        maxLength={100} 
                        showCount 
                        allowClear
                    />
                </Form.Item>
            </div>

            <div className='rigthItems'>
                <Form.Item 
                    name="Plate"
                    label={<Label>Plaka</Label>}
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
                                width: '67px',
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
                                    width: '67px',
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
                                width: '67px',
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
                    label={<Label>Ruhsat No</Label>}
                    rules={[
                        { required: true, message: 'Lütfen Ruhsat No Giriniz!' },
                    ]}
                >
                    <Input allowClear  style={{  width: '200px' }}/>
                </Form.Item>
            </div>
            
            <div className='agreementForm'>
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
                    <Checkbox 
                        style={{
                            width: '300px',
                            cursor: 'pointer',
                            WebkitAppearance: 'none',
                            appearance: 'none',
                        }}
                    >
                        Kullanıcı <a href="#/">Sözleşmesini</a> Okudum.
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Kaydol
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};
export default MyForm;