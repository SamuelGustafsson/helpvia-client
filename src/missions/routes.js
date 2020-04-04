import Missions from "./Missions";
import MissionDetails from "./MissionDetails";

export default [
    { 
        path: "/missions", 
        name: "missions", 
        component: Missions
    },
    { 
        path: "/missions/:id", 
        name: "mission", 
        component: MissionDetails,
        props: true
    }
];
