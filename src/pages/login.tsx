import { Form, Checkbox, Input, Button } from "antd";
import { useContext, useState, useEffect } from "react";
import { AuthContext, LoginTypes } from "../context/authProvider";
import Image from "next/image";
import router from "next/router";
import Link from "next/link";
import Logo from "../assets/4373234_hackerrank_logo_logos_icon.svg";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";

export default function Login() {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const onFinish = (data: LoginTypes) => {
    console.log(data)
    setLoading(true);
    authContext?.login(data);
    setLoading(false);
  };

  useEffect(() => {
    if (authContext?.auth.user?.Email) router.push('/dashboard')
  }, [])
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image src={Logo} className="w-14 h-12 mr-3" alt="Flowbite Logo" />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              <span className="text-[#1677FF] text-3xl">Sign in</span> to your
              account
            </h1>
            <Form
              layout="vertical"
              className="space-y-4 md:space-y-6"
              action="#"
              onFinish={onFinish}
            >
              <Form.Item
                name="Email"
                label="Your Email"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                <Input placeholder="Enter Email..." size="large" />
              </Form.Item>
              <Form.Item
                name="Password"
                label="Password"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                <Input.Password
                  placeholder="input password"
                  size="large"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <div className="flex justify-between">
                <Form.Item name="Remember">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link
                  href="#"
                  className="h-8 leading-9 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="w-full bg-primary-600 hover:bg-primary-700"
                loading={loading}
              >
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
