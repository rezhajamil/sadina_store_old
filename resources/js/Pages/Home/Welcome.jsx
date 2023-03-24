import Banner from "@/Components/Banner";
import CarouselBanner from "@/Components/CarouselBanner";
import Navigation from "@/Components/Navigation";
import Member from "@/Layouts/Member/Index";
import { Link, Head } from "@inertiajs/react";
import QuickNav from "./Partials/QuickNav";

export default function Welcome(props) {
    console.log(props.auth);
    return (
        <>
            <Member auth>
                <div className="justify-center w-full pb-8 bg-premier">
                    <Navigation auth={props.auth} />
                    <div className="sm:hidden">
                        <QuickNav />
                    </div>
                    <Banner
                        image={{
                            url: "https://tecdn.b-cdn.net/img/new/slides/041.webp",
                        }}
                    />
                </div>
            </Member>
        </>
    );
}
