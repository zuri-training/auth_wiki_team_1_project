import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
    const user = useSelector((state) => state.account.user);
    const router = useRouter();

    if (!isLoggedIn) {
        router.push("/account/login");
    }

    return (
        <div>Dashboard {user !== null && user.first_name}</div>
    );
};

export default Dashboard;
