
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

const DynamicPage = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").pop().replace("-", " ");

  return (
    <>
      <Header title={`${pageName} page`} />

      <div className="p-4 text-xl font-semibold text-gray-700 capitalize">
        {pageName} Page
      </div>
    </>
  );
};

export default DynamicPage;
