import Container from "./Container";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-100 sticky top-0">
      <Container>
        <div className="h-16 flex items-center justify-between ">
          <div>
            <div className=" text-gray-700 font-medium">Dashboard </div>
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
