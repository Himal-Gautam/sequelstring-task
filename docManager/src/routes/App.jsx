import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { UploadButton } from "@bytescale/upload-widget-react";

// -----
// Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration
// -----
const options = {
  apiKey: "free", // Get API key: https://www.bytescale.com/get-started
  maxFileCount: 1,
};

function App() {
  const navigate = useNavigate();

  // Redirect to home page if user not avialable
  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      console.log(localStorage.getItem("user"));
      navigate(`/signin`);
    }
  }, []);

  return (
    <>
      <Navigation />
      <UploadButton
        options={options}
        onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
      >
        {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
      </UploadButton>
    </>
  );
}

export default App;
