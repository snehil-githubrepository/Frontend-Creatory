import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
// import { Dropdown } from "../../context/";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Mellisa Brown",
      img: "https://images.pexels.com/photos/9653763/pexels-photo-9653763.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Jack Doe",
      img: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Amelia Smith",
      img: "https://images.pexels.com/photos/714063/pexels-photo-714063.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Natalia Kiwi",
      img: "https://images.pexels.com/photos/3279885/pexels-photo-3279885.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>+{/* <Dropdown placeHolder="+" /> */}
        {/* <input type="image" placeholder="+" /> */}
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
