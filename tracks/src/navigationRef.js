import { NavigationActions } from 'react-navigation';
// get access to navigation anywhere in app


// want to reassign value at some point in future
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};