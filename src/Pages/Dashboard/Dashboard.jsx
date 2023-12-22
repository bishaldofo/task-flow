import { Helmet } from "react-helmet-async";
import Container from "../../Components/Container/Container";

const Dashboard = () => {
   return (
      <div>
         <Helmet>
            <title>Task Flow | Dashboard</title>
         </Helmet>
         <Container>
            <div>
               <h1>Dashboard</h1>
            </div>
         </Container>
      </div>
   );
};

export default Dashboard;