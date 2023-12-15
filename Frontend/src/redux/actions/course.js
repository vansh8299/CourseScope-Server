import { server } from '../store';
import axios from 'axios';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCourseRequest' });

      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );
      dispatch({ type: 'allCourseSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'allCourseFail',
        payload: error.response.data.message,
      });
    }
  };

export const getCourseLectures = id => async dispatch => {
  try {
    dispatch({ type: 'getCourseRequest' });

    const { data } = await axios.get(
      `${server}/course/${id}`,

      {
        withCredentials: true, //we have to give this while using cookies
      }
    );
    dispatch({ type: 'getCourseSuccess', payload: data.lectures }); // data.lectures getting from backend as getCourseLecture is returning lectures
  } catch (error) {
    dispatch({
      type: 'getCourseFail',
      payload: error.response.data.message,
    });
  }
};
