import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./NewBoard.queries";
import NewBoardpresenter from "./NewBoard.presenter";

export default function NewBoardContainer(props: any) {
  // ---routor
  const router = useRouter();
  // --API
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  // ---States for API
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // ---States
  const [saveWriter, setSaveWriter] = useState("");
  const [savePwd, setSavePwd] = useState("");
  const [saveTitle, setSaveTitle] = useState("");
  const [saveMain, setSaveMain] = useState("");
  const [youtubeUrl, setYoutube] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imgUrl, setImgUrl] = useState();

  // ---errStates
  const [WriterErr, setWriterErr] = useState("");
  const [PwdErr, setPwdErr] = useState("");
  const [TitleErr, setTitleErr] = useState("");
  const [MainErr, setMainErr] = useState("");

  // ---useRef
  const imgRef = useRef<HTMLInputElement>(null);

  // --eventHandler
  const saveWrite = (event: any) => {
    setSaveWriter(event.target.value);
    setWriter(event.target.value);
  };
  const savePwdF = (event: any) => {
    setSavePwd(event.target.value);
    setPassword(event.target.value);
  };
  const saveTitleF = (event: any) => {
    setSaveTitle(event.target.value);
    setTitle(event.target.value);
  };
  const saveMainF = (event: any) => {
    setSaveMain(event.target.value);
    setContents(event.target.value);
  };

  const onChangeYoutube = (event: any) => {
    setYoutube(event.target.value);
  };

  const onChangeSaveAddressDetail = (event: any) => {
    setAddressDetail(event.target.value);
  };

  const onClickRef = () => {
    imgRef.current?.click();
  };

  const onChangeSaveImg = async (event: any) => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadFile({
        variables: { file },
      });

      setImgUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // --- errCheker _id
  const check = async () => {
    if (saveWriter === "") {
      setWriterErr("작성자를 작성해 주세요.");
    } else {
      setWriterErr("");
    }
    if (savePwd === "") {
      setPwdErr("비밀번호를 작성해 주세요.");
    } else {
      setPwdErr("");
    }
    if (saveTitle === "") {
      setTitleErr("글 제목을 작성해 주세요.");
    } else {
      setTitleErr("");
    }
    if (saveMain === "") {
      setMainErr("내용을 작성해 주세요.");
    } else {
      setMainErr("");
    }

    // ---Cut api when State dont saved
    try {
      // ---API CONNECT
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            images: [imgUrl],
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      router.push("/board/board-detail/" + result.data.createBoard._id);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  // 모달
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    console.log(data.address);
    console.log(data.zonecode);

    onToggleModal();
  };

  // 수정하기
  const onClickEdit = async () => {
    if (!title && !contents && !youtubeUrl) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력하세요");
      return;
    }

    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    const result = await updateBoard({
      variables: {
        updateBoardInput,
        boardId: router.query._id,
        password,
      },
    });
    router.push(`/board/board-detail/${result.data?.updateBoard._id}`);
    console.log("작동중!");
  };

  // ---button disabled

  let btnDisabled = true;
  if (
    saveWriter !== "" &&
    saveTitle !== "" &&
    savePwd !== "" &&
    saveMain !== ""
  ) {
    btnDisabled = false;
  }

  return (
    <NewBoardpresenter
      // 밸류저장 스테이트
      saveWrite={saveWrite}
      savePwdF={savePwdF}
      saveTitleF={saveTitleF}
      saveMainF={saveMainF}
      youtubeUrl={youtubeUrl}
      Address={address}
      zipcode={zipcode}
      saveAddressDetail={onChangeSaveAddressDetail}
      // 에러메세지 스테이트
      PwdErr={PwdErr}
      WriterErr={WriterErr}
      TitleErr={TitleErr}
      MainErr={MainErr}
      // API
      router={router}
      createBoard={createBoard}
      CREATE_BOARD={CREATE_BOARD}
      // 이벤트 핸들러
      check={check}
      btnDisabled={btnDisabled}
      onChangeYoutube={onChangeYoutube}
      onClickEdit={onClickEdit}
      onClickRef={onClickRef}
      onChangeSaveImg={onChangeSaveImg}
      // 모달
      isModalVisible={isModalVisible}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      // etc
      isEdit={props.isEdit}
      data={props.data}
      imgRef={imgRef}
      imgUrl={imgUrl}
    />
  );
}
