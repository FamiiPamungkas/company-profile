import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {Head} from '@inertiajs/react';
import {PageProps} from '@/types';
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Edit({auth, mustVerifyEmail, status}: PageProps<{
    mustVerifyEmail: boolean,
    status?: string
}>) {
    return (
        <DashboardLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="TEST"/>

            <div className="max-w-7xl mx-auto sm:px-3 lg:px-5 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg border">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg border">
                    <UpdatePasswordForm className="max-w-xl"/>
                </div>
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg border">
                    <DeleteUserForm className="max-w-xl"/>
                </div>
            </div>
        </DashboardLayout>
    );
}
