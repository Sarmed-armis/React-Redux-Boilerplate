/**
 * Created by Sarmad alazawi on 4/16/2017.
 * this  for handel the actions of selected user to show the details
 */

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'choose_user',
        payload: user
    }
};