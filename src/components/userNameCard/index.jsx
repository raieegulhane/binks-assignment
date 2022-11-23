import "./userNameCard.css";

const UserNameCard = ({ name }) => {
    return(
        <div className="user-name-card-wrapper">
            <p>
                <span>{name.title} </span>
                <span>{name.first} </span>
                <span>{name.last} </span>
            </p>
        </div>
    );
}

export { UserNameCard }