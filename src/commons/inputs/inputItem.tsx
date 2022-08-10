import styled from "@emotion/styled";

const InputItems = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export default function InputItem(props: any) {
  return (
    <InputItems
      placeholder={props.placeholder}
      {...props.register}
      defaultValue={props.default}
    />
  );
}
