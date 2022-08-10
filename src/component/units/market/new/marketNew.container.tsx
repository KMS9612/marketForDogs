import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { CREATE_USED_ITEM } from "./marketNew.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import MarketNewPresenter from "./marketNew.presenter";
import { useState } from "react";
import { useCheck } from "../../../../commons/hooks/useCheck";

export default function MarketNewContainer(props: any) {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  // 카카오지도

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [fileUrl, setFileUrl] = useState(["", "", ""]);
  // const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const router = useRouter();
  const schema = yup.object({
    name: yup.string().required("1"),
    remarks: yup.string().required("1"),
    price: yup.number().required("1"),
    tags: yup.string(),
    contents: yup.string().required("내용을 입력해주세요!"),
    images: yup.string(),
  });

  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: any) => {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: data.price,
          tags: data.tags,
          images: [...fileUrl],
          useditemAddress: {
            address,
            zipcode,
            addressDetail,
          },
        },
      },
    });
    router.push(`/market/detail/${result.data?.createUseditem._id}`);
  };
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
    console.log(value);
  };
  const onChangeFileUrl = (fileUrls: any, index: number) => {
    const newFileUrls = [...fileUrl];
    newFileUrls[index] = fileUrls;
    setFileUrl(newFileUrls);
  };
  useCheck();

  return (
    <MarketNewPresenter
      onChangeContents={onChangeContents}
      onChangeFileUrl={onChangeFileUrl}
      onClickSubmit={onClickSubmit}
      isEdit={false}
      handleSubmit={handleSubmit}
      register={register}
      uuidv4={uuidv4}
      fileUrl={fileUrl}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
      setAddress={setAddress}
      setAddressDetail={setAddressDetail}
      setZipcode={setZipcode}
    />
  );
}
