
import actiontypes from '../../Redux/Constant/ActionType'
import TutorialDataService from "../services/TutorialService";


export const createTutorial = (user) => async (dispatch) => {
  try {
    const res = await TutorialDataService.create({ user });
    dispatch({
      type: actiontypes.ADD_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const retrieveTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.getAll();
    dispatch({
      type: actiontypes.GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};



export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await TutorialDataService.update(id, data);
    dispatch({
      type: actiontypes.UPDATE_USER,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const deleteTutorial = (id) => async (dispatch) => {
  try {
    const res= await TutorialDataService.remove(id);

    dispatch({
      type: actiontypes.DEL_USER,
      payload: { id },
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
  // } catch (err) {
  //   console.log(err);
  // }
};

// export const findTutorialsByTitle = (title) => async (dispatch) => {
//   try {
//     const res = await TutorialDataService.findByTitle(title);

//     dispatch({
//       type: RETRIEVE_TUTORIALS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };