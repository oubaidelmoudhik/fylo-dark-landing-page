import profile_1 from "./profile-1.jpg";
import profile_2 from "./profile-2.jpg";
import profile_3 from "./profile-3.jpg";

function Testimonial({ quote, profile, name, title }) {
    return (
        <>
            <p>{quote}</p>
            <div>
                <img src={profile} alt={name} />
                <div>
                    <p>{name}</p>
                    <p>{title}</p>
                </div>
            </div>
        </>
    );
}

function Testimonials() {
    return (
        <>
            <Testimonial
                quote={
                    "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                }
                profile={profile_1}
                name={"Satish Patel"}
                title={"Founder & CEO, Huddle"}
            />
            <Testimonial
                quote={
                    "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                }
                profile={profile_2}
                name={"Bruce McKenzie"}
                title={"Founder & CEO, Huddle"}
            />
            <Testimonial
                quote={
                    "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                }
                profile={profile_3}
                name={"Iva Boyd"}
                title={"Founder & CEO, Huddle"}
            />
        </>
    );
}

export default Testimonials;
