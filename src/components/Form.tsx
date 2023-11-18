import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: #333;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #bf5656;
  }
`;

const Form = () => {
  const formRef = useRef(null);

  const scriptUrl = process.env.GATSBY_SHEETS_URL;
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <StyledForm
        method="post"
        ref={formRef}
        onSubmit={handleSubmit}
        name="google-sheet"
      >
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" placeholder="Email" name={"email"} />
        <SubmitButton type="submit">Stay Up To Date</SubmitButton>
      </StyledForm>
    </>
  );
};

export default Form;
