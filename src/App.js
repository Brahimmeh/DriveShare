import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LocationInputs, hotelInputs, pathInputs, userInputs, vehiculeInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { VehiculeColumns, userColumns, LocationColumns, PathColumns, HotelColumns, ReservationColumns } from "./datatablesource";
import NewVehicule from "./pages/newVehicule/NewVehicule";
import NewLocation from "./pages/newLocation/NewLocation";
import NewPath from "./pages/newPath/NewPath";
import NewHotel from "./pages/newHotel/NewHotel";


function App() {
  const { darkMode } = useContext(DarkModeContext);
   const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route 
            index 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
              />

            <Route path="user">
              <Route index element={
              <ProtectedRoute>
              <List columns={userColumns}/>
            </ProtectedRoute>
            } />
            <Route path=":userId" element={
              <ProtectedRoute>
              <Single />
            </ProtectedRoute>
            } />
              <Route
                path="new"
                element={ <ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>}
              />
            </Route>

            <Route path="location">
              <Route index element={
              <ProtectedRoute>
              <List columns={LocationColumns}/>
            </ProtectedRoute>
            } />
              <Route path=":locationId" element={
              <ProtectedRoute>
              <Single />
            </ProtectedRoute>
            } />
              <Route
                path="new"
                element={ <ProtectedRoute><NewLocation inputs={LocationInputs} title="Add New Location" /></ProtectedRoute>}
              />
            </Route>

            <Route path="path">
              <Route index element={
              <ProtectedRoute>
              <List columns={PathColumns}/>
            </ProtectedRoute>
            } />
              <Route path=":pathId" element={
              <ProtectedRoute>
              <Single />
            </ProtectedRoute>
            } />
              <Route
                path="new"
                element={ <ProtectedRoute><NewPath inputs={pathInputs} title="Add New Path" /></ProtectedRoute>}
              />
            </Route>

            <Route path="hotel">
              <Route index element={
              <ProtectedRoute>
              <List columns={HotelColumns}/>
            </ProtectedRoute>
            } />
              <Route path=":hotelId" element={
              <ProtectedRoute>
              <Single />
            </ProtectedRoute>
            } />
              <Route
                path="new"
                element={ <ProtectedRoute><NewHotel inputs={hotelInputs} title="Add New Hotel" /></ProtectedRoute>}
              />
            </Route>

            <Route path="reservation">
              <Route index element={
              <ProtectedRoute>
              <List columns={ReservationColumns}/>
            </ProtectedRoute>
            } />
              <Route path=":reservationId" element={
              <ProtectedRoute>
              <Single />
            </ProtectedRoute>
            } />
              <Route
                path="new"
                element={ <ProtectedRoute><New inputs={userInputs} title="Add New Reservation" /></ProtectedRoute>}
              />
            </Route>

            <Route path="vehicule">
              <Route index element={
              <ProtectedRoute>
              <List columns={VehiculeColumns}/>
            </ProtectedRoute>} />
              <Route path=":vehiculeId" element={
              <ProtectedRoute>
              <Single />
            </ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute><NewVehicule inputs={vehiculeInputs} title="Add New Vehicule" /></ProtectedRoute>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
