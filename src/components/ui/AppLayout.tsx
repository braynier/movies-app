import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import Loader from "./Loader";

function AppLayout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";

  return (
    <div>
      {/* {isLoading && <Loader />} */}

      <Header />

      <main className="max-w-7xl mx-auto px-3">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
