import {Head} from '@inertiajs/react';
import {User} from '@/types';
import DashboardLayout from "@/Layouts/DashboardLayout";

interface Props {
    auth: {
        user: User
    },
    userCount: number
}

export default function Users({auth}: Props) {
    return (
        <DashboardLayout
            user={auth.user}
            header={<h2 className="text-2xl font-bold tracking-tight">Users</h2>}
        >
            <Head title="Users"/>
            USERS
        </DashboardLayout>
    );
}
