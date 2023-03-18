import Banner from "@/Components/Banner";
import CarouselBanner from "@/Components/CarouselBanner";
import Navigation from "@/Components/Navigation";
import Member from "@/Layouts/Member/Index";
import { Link, Head } from "@inertiajs/react";
import QuickNav from "./Partials/QuickNav";

export default function Welcome(props) {
    return (
        <>
            <Member auth>
                <div className="justify-center w-full pb-8 bg-premier">
                    <Navigation />
                    <div className="sm:hidden">
                        <QuickNav />
                    </div>
                    <Banner image={{ url: "https://picsum.photos/500/500" }} />
                </div>
            </Member>
        </>
    );
}
