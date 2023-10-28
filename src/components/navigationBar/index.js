import React, { useContext } from "react";
import { AppStateContext } from "../../App";
import prev from '../../icons/chevron-arrow-left.svg';
import next from '../../icons/chevron-arrow-right.svg';
import './navbar.scss';

const SearchBar = React.lazy(() => import('../searchbar/index'));
const LoginButton = React.lazy(() => import('./loginButton'));
const UserProfile = React.lazy(()=> import('../userProfile'));

const NavigationBar = () => {
    const { appState, setAppState } = useContext(AppStateContext);
    const { currentPage } = appState;

    const renderUser = () =>{
        if(appState?.is_user_logged_in) return <UserProfile/>;
        return <LoginButton />
    };

    const renderSearchBar = () =>{
        if(currentPage?.page !== 'search') return null;
        return <SearchBar />;
    };

    return (
        <div className="navigation-bar flex justify-between">
            <div className="flex px-6 py-4">
                <div className="flex">
                    <div className="flex gap-2">
                        <div className="nav-prev-btn flex items-center justify-center cursor-not-allowed" aria-label="Go Back" title="Go Back">
                            <img src={prev}></img>
                        </div>
                        <div className="nav-prev-next flex items-center justify-center cursor-not-allowed" aria-label="Go Forward" title="Go Forward">
                            <img src={next}></img>
                        </div>
                    </div>
                    {renderSearchBar()}
                </div>
            </div>
            <div className="flex items-center px-6">{renderUser()}</div>
        </div>
    )
}

export default NavigationBar;