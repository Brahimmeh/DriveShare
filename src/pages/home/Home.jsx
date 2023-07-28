import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import List from "../list/List";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
  <p>
    Welcome to the exhilarating Admin Dashboard! <br/><br/> Get ready to take control of your system like never before. Buckle up and brace yourself for a thrilling adventure through the realms of hotels, reservations, users, paths, locations, and vehicles!<br/><br/>

    With this cutting-edge platform, you hold the keys to unlock a world of endless possibilities. Create! Read! Update! Delete! Feel the power surge through your fingertips as you effortlessly navigate the intricacies of data management.<br/><br/>

    Immerse yourself in the vibrant universe of hotels, where luxury and comfort converge. Dive into the pool of reservations, effortlessly managing bookings with a flick of your wrist. Harness the potential of user management, sculpting the perfect experience for every individual.<br/><br/>

    But wait, there's more! Traverse uncharted paths, customizing travel itineraries with a dash of creativity. Explore exotic locations, their secrets unveiled at your command. Rev up the engines of your vehicle inventory, racing towards efficiency and optimization.<br/><br/>

    Within this centralized hub of power, efficiency reigns supreme. Seamlessly streamline operations, defying boundaries and pushing the limits of what is possible. With every click, every stroke, you sculpt a masterpiece of administration, shaping a symphony of success.<br/><br/>

    So, buckle up, adrenaline junkie! It's time to embark on this epic journey through the Admin Dashboard, where you wield the power to craft unforgettable experiences and unleash the full potential of your system. Enjoy the ride, and may your adventures be as thrilling as the possibilities that lie ahead!
  </p>
</div>



        
      </div>
    </div>
  );
};

export default Home;
