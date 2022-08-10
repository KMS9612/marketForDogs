import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      images
    }
  }
`;
