import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import Loader from "./Loader";

function AppLayout() {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";

  return (
    <>
      {/* A cool loader, since we have access to isLoading from react Router */}
      {/* {isLoading && <Loader />} */}

      <Header />

      <main className="mx-auto max-w-7xl px-3">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
