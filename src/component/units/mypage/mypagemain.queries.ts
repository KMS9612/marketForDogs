import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      seller {
        name
      }
    }
  }
`;
