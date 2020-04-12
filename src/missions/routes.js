import Missions from "./Missions";
import CreateMission from "./CreateMission";
import MissionDetails from "./MissionDetails";

export default [{
        path: "/missions",
        name: "missions",
        component: Missions
    },
    {
        path: "/createMission",
        name: "createMission",
        component: CreateMission
    },
    {
        path: "/missions/:id",
        name: "mission",
        component: MissionDetails,
        props: true
    }
];