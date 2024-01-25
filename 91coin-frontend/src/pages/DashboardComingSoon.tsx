import { useLocation } from "react-router";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardFooter from "../components/DashboardFooter";
import ProfileBlock from "../components/Profile";

export default function DashboardComingSoon () {
    const location = useLocation()

    return (
        <div className="main__dashboard">
            <div className="dashboard__wrapper">
                <DashboardSidebar />

                <div className="content">
                    <div className="dashboard">
                        <div className="content__head">
                            <h1 className="content__title">Dashboard</h1>

                            <time className="content__time">
                                Jan 15, 2024 3:35 AM
                            </time>
                        </div>

                        <div className="transition-history">
                            <div className="content__head">
                                <h2 className="content__title">{location?.pathname?.split('/dashboard/')?.join('')} - coming soon</h2>
                            </div>
                        </div>

                    </div>

                    <DashboardFooter />
                </div>

                <ProfileBlock />
            </div>
        </div>
    )
}
