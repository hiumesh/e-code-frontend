import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Modal } from "antd";
import { useQuill } from "react-quilljs";
import { Delta } from "types-quill-delta";

import "quill/dist/quill.snow.css";

interface QuillPropTypes {
  quillData: Delta | null;
  setQuillData: (data: any) => void;
  discriptionModal: boolean;
  setDiscriptionModal: Dispatch<SetStateAction<boolean>>;
}

export default function Quill({
  quillData,
  setQuillData,
  discriptionModal,
  setDiscriptionModal,
}: QuillPropTypes) {
  const { quill, quillRef } = useQuill();

  const onClose = () => {
    setQuillData(quill?.getContents());
    setDiscriptionModal(false);
  };

  useEffect(() => {
    quill?.setContents(quillData as Delta);
  }, []);

  return (
    <Modal
      title="Description"
      open={discriptionModal}
      onOk={onClose}
      okButtonProps={{
        className: "bg-[#1677FF]",
      }}
      onCancel={onClose}
      width={900}
    >
      <div>
        <div style={{ width: 852, height: 700 }} className="mx-auto mb-14">
          <div ref={quillRef} />
        </div>
      </div>
    </Modal>
  );
}
