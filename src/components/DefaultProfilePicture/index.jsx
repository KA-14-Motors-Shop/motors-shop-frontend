import { ProfileIconContainer } from "./styles";
const DefaultProfilePicture = ({
  username = "User",
  width = "40px",
  height = "40px",
}) => {
  const fullName = username.toUpperCase().split(" ");
  const initials =
    fullName.length === 1
      ? fullName[0].split("")[0]
      : `${fullName.shift().charAt(0)}${fullName.pop().charAt(0)}`;

  return (
    <ProfileIconContainer width={width} height={height}>
      {initials}
    </ProfileIconContainer>
  );
};

export default DefaultProfilePicture;
