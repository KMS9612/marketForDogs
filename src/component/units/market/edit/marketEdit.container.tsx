import { useForm } from "react-hook-form";
import MarketNewPresenter from "../new/marketNew.presenter";
import "react-quill/dist/quill.snow.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;
const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        address
        addressDetail
        zipcode
      }
    }
  }
`;
export default function MarketEditContainer() {
  const [fileUrl, setFileUrl] = useState(["", "", ""]);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const router = useRouter();
  // const [fileUrl, setFileUrl] = useState([
  //   `http://storage.googleapis.com/${data?.fetchUseditem.images[0]}`,
  //   `http://storage.googleapis.com/${data?.fetchUseditem.images[1]}`,
  //   `http://storage.googleapis.com/${data?.fetchUseditem.images[2]}`,
  // ]);
  const { data: dataUpdate, loading } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.MarketId,
    },
  });
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const schema = yup.object({
    name: yup.string().required("상품명을 변경해주세요"),
    remarks: yup.string().required("한줄설명을 변경해주세요!"),
    price: yup.number().required("가격을 변경해주세요"),
    tags: yup.string(),
    contents: yup.string().required("내용을 변경해주세요!"),
  });

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickUpdate = (data: any) => {
    console.log("hello");
    const result = updateUseditem({
      variables: {
        updateUseditemInput: {
          name: data?.name,
          remarks: data?.remarks,
          price: data?.price,
          tags: data?.tags,
          contents: data?.contents,
          images: fileUrl,
          useditemAddress: {
            address,
            addressDetail,
            zipcode,
          },
        },
        useditemId: router.query.MarketId,
      },
    });
    router.push(`/market/detail/${router.query.MarketId}`);
  };
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
  };
  const onChangeFileUrl = (fileUrls: any, index: number) => {
    const newFileUrls = [...fileUrl];
    newFileUrls[index] = fileUrls;
    setFileUrl(newFileUrls);
  };

  return loading ? (
    ""
  ) : (
    <MarketNewPresenter
      data={dataUpdate}
      isEdit={true}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      trigger={trigger}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      onChangeFileUrl={onChangeFileUrl}
      formState={formState}
      fileUrl={fileUrl}
      setAddressEdit={setAddress}
      setAddressDetailEdit={setAddressDetail}
      setZipcodeEdit={setZipcode}
      zipcodeEdit={zipcode}
      addressEdit={address}
      addressDetailEdit={addressDetail}
    />
  );
}
