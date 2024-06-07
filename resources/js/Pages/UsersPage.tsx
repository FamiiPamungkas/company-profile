import {Head} from '@inertiajs/react';
import {User} from '@/types';
import DashboardLayout from "@/Layouts/DashboardLayout";
import React, {useEffect, useState} from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/Components/ui/table";
import {axiosInstance} from "@/lib/axiosInstance";

interface Props {
    auth: {
        user: User
    },
    userCount: number
}

interface Invoice {
    invoice: string
    paymentStatus: string
    paymentMethod: string
    totalAmount: string
}

export default function UsersPage({auth}: Props) {
    const [invoices, setInvoices] = useState<Invoice[]>([])

    useEffect(() => {
        const fetchData = async (url:string) => {
            try {
                const response = await axiosInstance.get(url);
                console.log(" response ",response)

                const data = response.data;
                setInvoices(data);

            } catch (error:any){
                alert(error)
            }
        };

        // fetchData("/api/users");
        fetchData("/api/authenticated");
    }, []);

    return (
        <DashboardLayout
            user={auth.user}
            header={<h2 className="text-2xl font-bold tracking-tight">Users</h2>}
        >
            <Head title="Users"/>

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Email</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/*{invoices.map((invoice) => (*/}
                    {/*    <TableRow key={invoice.invoice}>*/}
                    {/*        <TableCell className="font-medium">{invoice.invoice}</TableCell>*/}
                    {/*        <TableCell>{invoice.paymentStatus}</TableCell>*/}
                    {/*        <TableCell>{invoice.paymentMethod}</TableCell>*/}
                    {/*        <TableCell className="text-right">{invoice.totalAmount}</TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </DashboardLayout>
    );
}
