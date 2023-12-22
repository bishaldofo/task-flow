import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";
import Banner from "./Banner";
import Audience from "../../Components/Audience/Audience";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Task Flow | Home</title>
         </Helmet>
         <Container>
            <Banner></Banner>
         </Container>
         <Audience></Audience>
      </div>
   );
};

export default Home;