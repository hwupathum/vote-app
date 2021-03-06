/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/admin/Register.jsx";
import Login from "views/admin/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
// 
import Candidates from "views/admin/Candidates.jsx"
import AddCandidates from "views/admin/AddCandidates.jsx"
import Elections from "views/admin/Elections.jsx"
import AddElections from "views/admin/AddElections.jsx"
import EditElections from "views/admin/EditElections.jsx"
import Voters from "views/admin/Voters.jsx"
import AddVoters from "views/admin/AddVoters.jsx"
import EditVoters from "views/admin/EditVoters.jsx"
import Admins from "views/admin/Admins.jsx"
import AddAdmins from "views/admin/AddAdmins.jsx"
import EditAdmins from "views/admin/EditAdmins.jsx"

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },{
    path: "/voters",
    name: "Voters",
    icon: "ni ni-single-02 text-primary",
    component: Voters,
    layout: "/admin",
    // invisible: true
  },{
    path: "/addvoters",
    name: "AddVoters",
    icon: "ni ni-tv-2 text-primary",
    component: AddVoters,
    layout: "/admin",
    invisible: true
  },{
    path: "/editvoters",
    name: "EditVoters",
    icon: "ni ni-tv-2 text-primary",
    component: EditVoters,
    layout: "/admin",
    invisible: true
  },{
    path: "/elections",
    name: "Elections",
    icon: "ni ni-world-2 text-primary",
    component: Elections,
    layout: "/admin",
    // invisible: true
  },{
    path: "/addelections",
    name: "AddElections",
    icon: "ni ni-world-2 text-primary",
    component: AddElections,
    layout: "/admin",
    invisible: true
  },{
    path: "/editelections",
    name: "EditElections",
    icon: "ni ni-world-2 text-primary",
    component: EditElections,
    layout: "/admin",
    invisible: true
  },{
    path: "/admins",
    name: "Admins",
    icon: "ni ni-single-02 text-primary",
    component: Admins,
    layout: "/admin",
    // invisible: true
  },{
    path: "/addadmins",
    name: "AddAdmins",
    icon: "ni ni-tv-2 text-primary",
    component: AddAdmins,
    layout: "/admin",
    invisible: true
  },{
    path: "/editadmins",
    name: "EditAdmins",
    icon: "ni ni-tv-2 text-primary",
    component: EditAdmins,
    layout: "/admin",
    invisible: true
  },{
    path: "/candidates",
    name: "Candidates",
    icon: "ni ni-world-2 text-primary",
    component: Candidates,
    layout: "/admin",
    invisible: true
  },{
    path: "/addcandidate",
    name: "AddCandidates",
    icon: "ni ni-world-2 text-primary",
    component: AddCandidates,
    layout: "/admin",
    invisible: true
  },{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
    invisible: true

  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    invisible: true

  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
    invisible: true

  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    invisible: true,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    invisible: true
  }
];
export default routes;
