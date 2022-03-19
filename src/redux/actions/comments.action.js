import {
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_LIST_FAIL,
} from "../actionType";

import request from "../../api";

export const getCommentsOfVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_LIST_REQUEST,
    });

    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });

    dispatch({
      type: COMMENT_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: COMMENT_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};
