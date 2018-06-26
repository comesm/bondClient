import { locationChange } from '../actions/routingActions';

export function startListener(history, store) {
    store.dispatch(locationChange({
        pathname: history.location.pathname,
        search: history.location.search,
        hash: history.location.hash       
    }));       

    history.listen((location) => {
    console.log(11, location);
    store.dispatch(locationChange({
        pathname: location.pathname,
        search: location.search,
        hash: location.hash 
    })) 
    })

}