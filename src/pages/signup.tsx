import { Form, Checkbox, Input, Button } from "antd";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import router from "next/router"
import Link from "next/link";
import Logo from "../assets/4373234_hackerrank_logo_logos_icon.svg";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { AuthContext, RegisterTypes } from '../context/authProvider'

export default function Signup() {
  const [loading, setLoading] = useState(false)
  const authContext = useContext(AuthContext)
  const onFinish = (data: RegisterTypes) => {
    setLoading(true)
    authContext?.register(data)
    setLoading(false)
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
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              <span className="text-[#1677FF] text-3xl">Sign up</span> and code...
            </h1>
            <Form
              className="space-y-4 md:space-y-6"
              layout="vertical"
              onFinish={onFinish}
              action="#"
            >
              <div className="flex">
                <Form.Item
                  name="Email"
                  label="Your Email"
                  className="text-sm font-medium text-gray-900 dark:text-white flex-1 mr-2"
                >
                  <Input placeholder="Enter Email..." size="large" />
                </Form.Item>
                <Form.Item
                  name="UserName"
                  label="UserName"
                  className="text-sm font-medium text-gray-900 dark:text-white flex-1 ml-2"
                >
                  <Input placeholder="UserName..." size="large" />
                </Form.Item>
              </div>
              
              <div className="flex">
                <Form.Item
                  name="Password"
                  label="Password"
                  className="text-sm font-medium text-gray-900 dark:text-white flex-1 mr-2"
                >
                  <Input.Password
                    placeholder="input password"
                    size="large"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="Confirm Password"
                  label="Confirm Password"
                  className="text-sm font-medium text-gray-900 dark:text-white flex-1 ml-2"
                >
                  <Input.Password
                    placeholder="input password"
                    size="large"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </div>

              <Form.Item name="Terms">
                <Checkbox className="font-light text-gray-500 dark:text-gray-300" checked>
                  I accept the{" "}
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </Checkbox>
              </Form.Item>

              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="w-full bg-primary-600 hover:bg-primary-700"
                loading={loading}
              >
                Create an account
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
