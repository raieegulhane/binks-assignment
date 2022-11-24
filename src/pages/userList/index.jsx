import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserNameCard } from "../../components";
import { fetchUserList } from "../../redux/features/users/usersSlice";
import "./userList.css";

const UserList = () => {
    const navigate = useNavigate();
    const { userList } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserList());
    }, [])

    return(
        <main className="page-wrapper">
            <header className="page-header">
                <h1>User List</h1>
            </header>
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
        </main>
    );
}

export { UserList };
