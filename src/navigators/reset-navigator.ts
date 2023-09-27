import {
  CommonActions,
  createNavigationContainerRef,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const resetNavigation = (screen, params = {}, route = "") => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: route,
            state: {
              routes: [{ name: screen }],
              params,
            },
          },
        ],
      }),
    );
  }
};

export const navigateOutsideComponent = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
