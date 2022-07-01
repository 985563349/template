import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';

import { useInitialState } from '@/context/InitialStateProvider';
import { fetchCurrentUser, signIn } from '@/services';
import './index.css';

type SignInFormType = {
  username: string;
  password: string;
  remember?: boolean;
};

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from?: Location };
  const from = state?.from?.pathname || '/';

  const { initialState, setInitialState } = useInitialState();

  const onFinish = async (values: SignInFormType) => {
    const token = await signIn(values);
    localStorage.setItem('TOKEN', token);
    const user = await fetchCurrentUser();
    setInitialState?.((s) => ({ ...s, token, user }));
    navigate(from, { replace: true });
  };

  if (initialState?.user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="sign-in">
      <section className="left"></section>

      <section className="right">
        <h1 className="title">Sign In</h1>
        <Form onFinish={onFinish}>
          <Form.Item name="username">
            <Input placeholder="username" />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password placeholder="password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}

export default SignIn;
