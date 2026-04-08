import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountSettings, Home, Login, Registration } from "./pages/pages";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />
          <Route path="profile" element={<AccountSettings />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}