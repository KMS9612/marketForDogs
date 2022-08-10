import { v4 as uuidv4 } from "uuid";

export default function BasketPresenter(props: any) {
  return (
    <div>
      {props.data?.fetchUseditemsIPicked.map((el: any, index) => (
        <div key={uuidv4()}>
          <div>
            <div>{index + 1}</div>
            {el.images[0] === "" ? (
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  backgroundColor: "gray",
                }}
              >
                이미지가 없습니다
              </div>
            ) : (
              <img
                style={{ width: "200px", height: "100px" }}
                src={`http://storage.googleapis.com/${el.images[0]}`}
                alt=""
              />
            )}
          </div>
          <div>{el.remark}</div>
          <div>{el.price}</div>
        </div>
      ))}
    </div>
  );
}
