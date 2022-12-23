import React, { Dispatch, SetStateAction } from "react";
import {Modal} from 'antd'
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";

interface QuillPropTypes {
  setQuillData: (data:any) => void,
  discriptionModal: boolean,
  setDiscriptionModal: Dispatch<SetStateAction<boolean>>
}

export default function Quill({ setQuillData, discriptionModal, setDiscriptionModal }: QuillPropTypes) {
  const { quill, quillRef } = useQuill();

  const onClose = () => {
    setQuillData(quill?.getContents());
    setDiscriptionModal(false)
  }
  return (
    <Modal
      title="Discription"
      open={discriptionModal}
      onOk={onClose}
      okButtonProps={{
        className: "bg-[#1677FF]",
      }}
      onCancel={onClose}
      width={900}
    >
      <div style={{ width: 852, height: 700 }} className="mx-auto mb-14">
        <div ref={quillRef} />
      </div>
    </Modal>
  );
}
