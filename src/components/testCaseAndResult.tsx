import { Input, Tabs, Form } from "antd";
import {
  ChangeEvent,
  ReactNode,
  useEffect,
  useState,

} from "react";
import { TabTypes } from "./Forms/problemForm";

interface TestCaseAndResultPropTypes {
  TestCases: { Value: string }[];
}

export default function TestCaseAndResult({
  TestCases,
}: TestCaseAndResultPropTypes) {
  const [testCase, setTestCase] = useState<
    { key: string; label: string; children: ReactNode }[]
  >([]);
  const [tabsActiveKey, setTabsActiveKey] = useState(0);

  const onChangeHandler = (
    idx: number,
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(idx, e);
    const ts = [...testCase];
    ts[idx] = {
      key: new Date().getTime() + "",
      label: "Case " + (idx + 1),
      children: (
        <Input.TextArea
          onChange={(e) => onChangeHandler(idx, e)}
          defaultValue={e.target.value}
        />
      ),
    };
    setTestCase(ts);
  };

  

  useEffect(() => {
    const tc = TestCases.map((t, idx) => ({
      key: idx + "",
      label: "Case " + (idx + 1),
      children: (
        <Input.TextArea
          onChange={(e) => onChangeHandler(idx, e)}
          defaultValue={t.Value}
        />
      ),
    }));
    setTestCase(tc);
  }, []);
  return (
    <div className="p-2">
      <Form.List name="ManuallyTestCases">
                {(fields, { add, remove }) => (
                  <Tabs
                    type="editable-card"
                    activeKey={tabsActiveKey as unknown as string}
                    onChange={(activeKey) => {
                      console.log(activeKey)
                      setTabsActiveKey(activeKey as unknown as number)
                    }
                      
                    }
                    onEdit={(key, action) => {
                      if (action === "add") {
                        add();
                        setTabsActiveKey(fields.length);
                      } else
                        remove(
                          typeof key === "number"
                            ? key
                            : parseInt(key as string)
                        );
                      setTabsActiveKey(key-1)
                    }}
                    items={
                      fields.map(({ ...restField }, idx) => ({
                        label: `Case ${idx}`,
                        key: idx,
                        children: (
                          <Form.Item
                            {...restField}
                            rules={[{ required: true }]}
                            className="h-full"
                          >
                            <Input.TextArea
                              placeholder="Enter Code"
                              className="h-full"
                              autoSize={{ minRows: 9, maxRows: 9 }}
                            />
                          </Form.Item>
                        ),
                      })) as unknown as TabTypes[] | undefined
                    }
                  />
                )}
              </Form.List>
    </div>
  );
}
