import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import './FormToRegister.css'

const FormToRegister = () => {
  
  const [form] = Form.useForm();
  const userName = Form.useWatch('username', form);
  console.log(userName);

 



  const onFinish = (values) => {
    localStorage.setItem("registrationPasseddd", "true");
    const usernamee = values.username;
    localStorage.setItem("username", {usernamee});
    location.reload();
  
  };
  return (
    <Layout style={{
      'marginTop': "30px"
    }}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      requiredMark
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите имя!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомните меня</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="http://google.com">
          Забыли пароль?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary"  htmlType="submit" className="login-form-button">
          Зарегистрироваться
        </Button>
         <a className="register-now" href="http://google.com">Войти</a>
      </Form.Item>
    </Form>
    </Layout>
  );
};

export default FormToRegister;      