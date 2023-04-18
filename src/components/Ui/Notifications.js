import classes from "./Notifications.module.css";
import { useSelector } from "react-redux";

const NotificationElement = () => {
  const message = useSelector((state) => state.ui.message);
  return (
    <div className={`${classes.message} ${classes[message.status]}`}>
      <h3>{message.title}</h3>
      <p>{message.text}</p>
    </div>
  );
};

export default NotificationElement;
