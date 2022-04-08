import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import SocialCard from "../util/SocialCard";

export default function Home() {
    return (
        <>
            <section>
                <h2>{<FaHandPointRight />} Our Story</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi similique blanditiis libero veniam voluptates nostrum
                    laborum doloribus veritatis fuga ea perferendis vero,
                    architecto mollitia quaerat earum nesciunt hic magni quam?
                </p>
            </section>
            <section>
                <h2>{<FaHandPointRight />} Our Leading</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi similique blanditiis libero veniam voluptates nostrum
                    laborum doloribus veritatis fuga ea perferendis vero,
                    architecto mollitia quaerat earum nesciunt hic magni quam?
                </p>
            </section>
            <section>
                <div className="card">
                    <h2>{<FaHandPointRight />} Contact Us</h2>
                    <SocialCard />
                </div>
            </section>
        </>
    );
}
