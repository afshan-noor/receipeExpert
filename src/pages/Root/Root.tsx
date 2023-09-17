import { Outlet,useNavigation } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

function RootLayout() {
  const navigate=useNavigation();
 
  return (
    <>
      <MainNavigation />
      <main>
       {navigate.state==='loading'&& <p>Loading....</p>}
       <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
