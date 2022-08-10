import { useState } from "react";
import * as S from "../styles/tag";

export default function Tag(props: any) {
  const [tags, setTags] = useState(["#코딩", "#개발"]);
  const [tag, setTag] = useState("");

  const removeTag = (i) => {
    const clonetags = tags.slice();
    clonetags.splice(i, 1);
    setTags(clonetags);
  };
  const addTag = (e) => {
    setTag(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    setTags([...tags, tag]);
    setTag("");
  };

  return (
    <S.Wrapper>
      <S.Title>Tag</S.Title>
      <S.TagContainer>
        {tags.map((e, i) => (
          <S.Hash key={i}>
            <S.HashName>{e}</S.HashName>
            <S.HashBtn type={props.type} onClick={() => removeTag(i)}>
              x
            </S.HashBtn>
          </S.Hash>
        ))}
        <S.InputBox
          placeholder="태그를 입력하세요"
          onChange={(e) => addTag(e)}
          onKeyPress={(e) => handleKeyPress(e)}
          value={tag}
        />
      </S.TagContainer>
    </S.Wrapper>
  );
}
