import styled from "@emotion/styled";

const Btn = styled.button`
  padding: 10px 20px 10px 20px;
  border: 1px solid #ffd600;
  background-color: #bdbdbd;
  color: #000;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ffd600;
    color: #fff;
  }
`;

export default function BtnLogin(props: any) {
  return (
    <Btn id={props.id} type={props.type} onClick={props.onClickEvent}>
      {props.BtnName}
    </Btn>
  );
}
