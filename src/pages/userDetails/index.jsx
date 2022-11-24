import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCurrentUser } from "../../redux/features/users/usersSlice";
import "./userDetails.css";

const UserDetails = () => {
    const { userId } = useParams();
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCurrentUser(userId));
    }, [dispatch, userId]);

    const { 
        gender,
        name, 
        location: { street },
        city,
        state,
        country,
        postcode,
        email,
        login,
        dob,
        phone,
        picture
    } = currentUser;

    const userDOB = new Date(dob.date);
    const userDobDate = userDOB.getDate();
    const userDobMonth = userDOB.toLocaleString("default", { month: "long" })
    const userDobYear = userDOB.getFullYear();
    
    return(
        <main className="page-wrapper">
            <button 
                className="back-button flex flex-row"
                onClick={() => navigate(-1)}
            >
                <i className="fa-solid fa-arrow-left"></i>
                <span>Back to list</span>
            </button>
            <header className="page-header">
                <h1>User Details</h1>
            </header>
            <div className="user-details flex flex-col flex-align-cn">
                <img    
                    className="user-image" 
                    src={picture.large} 
                    alt="user"
                />

                <section className="user-details-section-1 flex flex-col flex-align-cn">
                    <p className="user-name">{name.title}. {name.first} {name.last}</p>
                    <p className="username-text">
                        <span>Username: </span> 
                        <span>{login.username}</span>
                    </p>
                </section>

                <section className="user-details-section-2 flex flex-col flex-align-cn">
                    <p className="flex flex-col flex-align-cn">
                        <span className="user-detail-title">D.O.B</span>
                        <span>{userDobDate} {userDobMonth}, {userDobYear}</span>
                    </p>
                    <p className="flex flex-col flex-align-cn">
                        <span className="user-detail-title">Gender</span> 
                        <span>{gender}</span>
                    </p>
                    <p className="flex flex-col flex-align-cn">
                        <span className="user-detail-title">Address</span>
                        <span>
                            {street.number && <span>{street.number} </span>}
                            {street.name && <span>{street.name} </span>}
                            {city && <span>,{city} </span>}
                            {state && <span>,{state} </span>}
                            {country && <span>,{country} </span>}
                            {postcode && <span> - {postcode}</span>}
                        </span>
                    </p>
                    <p className="flex flex-col flex-align-cn">
                        <span className="user-detail-title">Email</span>
                        <span>{email}</span>
                    </p>
                    <p className="flex flex-col flex-align-cn">
                        <span className="user-detail-title">Phone</span> 
                        <span>{phone}</span>
                    </p>
                </section>
            </div>
        </main>
    );
}

export { UserDetails };