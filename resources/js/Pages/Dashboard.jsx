import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout

            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }

        >
            <Head title="Dashboard" />

            <div className="py-12 " >
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800  ">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-between items-center">
                            Create Your Brand

                            <Link
                                href={route("project.create")}
                                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                            >
                                Creat Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
}
