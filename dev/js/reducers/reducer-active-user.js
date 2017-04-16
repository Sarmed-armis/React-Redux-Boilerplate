/**
 * Created by lenovo on 4/17/2017.
 */

export default function (state = null, action) {
    switch (action.type) {
        case 'choose_user':
            return action.payload;
            break;
    }
    return state;
}
