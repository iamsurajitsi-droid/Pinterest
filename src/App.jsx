import "./App.css";
import Body from "./Body";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Body className={"min-h-screen max-w-[100vw] flex"}>
      <Sidebar className={"fixed top-0 left-0 py-4"} />
      <div className={`contentDiv flex-1 h-8`}>
        {/* Navbar */}
        <Navbar className={""} />
      </div>
    </Body>
  );
}

export default App;
