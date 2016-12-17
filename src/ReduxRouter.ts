import Redux from './types/Redux';

export default angular.module('app')
.run([
    '$state', '$stateParams', 'Redux',
    function ($state, $stateParams, Redux: Redux) {

        let navigationState = Redux.getState().navigation;
        Redux.subscribe(() => {
            const nextNavigation = Redux.getState().navigation;
            const prevState = JSON.stringify(navigationState);
            const nextState = JSON.stringify(nextNavigation);
            if (prevState !== nextState) {
                navigationState = Redux.getState().navigation;
                $state.transitionTo(nextNavigation.to, nextNavigation.params);
            }
        });
    }]);
