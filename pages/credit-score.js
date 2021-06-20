import React, { useState } from "react";
import Layout from "@components/layout";
import { Form, Input, Button, Checkbox, Progress, Steps, message } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const layout = {
  labelCol: {
    // span: 8,
  },
  wrapperCol: {
    // span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 8,
    // span: 16,
  },
};

export default function CreditScorePage() {
  const [step, setStep] = useState(1);
  const [form] = Form.useForm();
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    increase();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const increase = () => {
    if (step < 4) setStep(step + 1)
  };
  const decrease = () => {
    if (step > 1) setStep(step - 1)
  };
  return (
    <>
      <Layout title="Credit Score">
        <div className="p-5 md:px-20">
          <p className="text-lg font-semibold mb-2">
            Cek Credit Score
          </p >
          <p className="">
            Langkah {step} dari 4
          </p>
          <div className="my-5">
            <Progress strokeWidth={15} percent={step * 25} showInfo={false} />
          </div>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
          <Form
            {...layout}
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              className="dark:text-white"
              label="Nama"
              name="nama"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Lanjut
              </Button>
              <Button onClick={() => decrease()}>
                Kembali
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Layout>
    </>
  );
}