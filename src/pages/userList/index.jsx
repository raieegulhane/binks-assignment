import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserNameCard } from "../../components";
import { fetchUserList } from "../../redux/features/users/usersSlice";
import "./userList.css";

const UserList = () => {
    const navigate = useNavigate();
    const { loading, userList, loadingError } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserList());
    }, [])

    return(
        <main className="page-wrapper">
            <header className="page-header">
                <h1>User List</h1>
            </header>
            {
                !loadingError ?
                <>
                {
                    loading ? 
                    <div className="user-list-loading">Loading...</div> :
                    <ul className="users-list-wrapper">
                    {
                        userList?.map((user) => {
                            return(
                                <li 
                                    key={user?.login?.uuid}
                                    onClick={() => navigate(`/user-details/${user?.login?.uuid}`)}
                                >
                                    <UserNameCard 
                                        name={user.name}
                                    />
                                </li>
                            );
                        })
                    }
                    </ul>
                } 
                </> : 
                <p className="user-list-loading">Unable to fetch users.</p>
            }
        </main>
    );
}

export { UserList };
