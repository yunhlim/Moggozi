import type { RootState } from "../../store/store";

import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

const PasswordReissueForm: React.FC = () => {
  const dispatch = useDispatch();

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputName = useRef<HTMLInputElement>(null);

  const userData = {
    email: inputEmail,
    name: inputName,
  };

  const passwordFindHandler = (event: React.FormEvent) => {
    // 입력된 input값 변수에 담기
    const enteredEmail = inputEmail.current!.value;
    const enteredName = inputName.current!.value;
    // 둘다 비어있다면 에러 출력 / 이후에 수정해야함.
    if (enteredEmail.trim().length === 0 || enteredName.trim().length === 0) {
      alert("입력을 해주세요.");
      return;
    } else {
      const option: object = {
        url: "url 채워 넣어야 함",
        method: "POST",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTP-8",
        },
        data: {
          email: enteredEmail,
          name: enteredName,
        },
      };
      axios(option)
        .then((res) => {
          //dispatch(password(res.data));
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <div>
      <form onSubmit={passwordFindHandler}>
        <div>
          <label htmlFor="email">email : </label>
          <input type="text" required id="email" ref={inputEmail} />
        </div>
        <div>
          <label htmlFor="name">name : </label>
          <input type="text" required id="name" ref={inputName} />
        </div>
        <button type="submit">비밀번호 재발급</button>
      </form>
    </div>
  );
};

export default PasswordReissueForm;