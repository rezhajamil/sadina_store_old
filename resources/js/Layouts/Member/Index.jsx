import { Head } from "@inertiajs/react";

export default function Member({ auth, children }) {
    return (
        <>
            <Head title="SADINA" />
            <div className="">
                <main auth={auth}>{children}</main>
            </div>
        </>
    );
}
