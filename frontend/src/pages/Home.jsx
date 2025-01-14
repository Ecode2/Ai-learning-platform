import { Helmet } from "react-helmet";
import {useLocation, useNavigate} from "react-router-dom";
import Banner from "/banner_1.jpg"
import JobImg1 from "/courses_provide_1.jpg"
import JobImg2 from "/features_2_1.jpg"
import JobImg3 from "/courses_provide_2.jpg"
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBarItem } from "../components/navigaton/NavBar";
import { SmallCard, CourseCard } from "../components/Card";
import Computer from "/computer.png"
import Course1 from "/courses_1.jpg";
import Course2 from "/courses_2.jpg";
import Course3 from "/courses_3.jpg";
import Course4 from "/courses_4.jpg";
import Course5 from "/courses_5.jpg";
import Course6 from "/courses_6.jpg";
import { useEffect } from "react";


const courses = [
    {image: Course1, title: "Make Better Decisions", tutor: "Jhonthan Smith", price: "$150", duration: "50 Days", rating: [1,1,1,0], ratingCount: 100},
    {image: Course2, title: "How To Be A Speaker", tutor: "Denise Wood", price: "Free", duration: "100 Days", rating: [1,1,1,1], ratingCount: 400},
    {image: Course3, title: "Network Introductions", tutor: "Preston Marshall", price: "$120", duration: "75 Days", rating: [1,1,1,0], ratingCount: 200},
    {image: Course4, title: "Brand Management", tutor: "John Porter", price: "$250", duration: "150 Days", rating: [1,1,1,1,1], ratingCount: 500},
    {image: Course5, title: "Moralities Of Everyday", tutor: "Mittie Hill", price: "$180", duration: "60 Days", rating: [1,1,1,1], ratingCount: 150},
    {image: Course6, title: "Life Coach Training", tutor: " Marian Dupre", price: "$130", duration: "150 Days", rating: [1,1,1,1,0], ratingCount: 330},
]

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.change_modal) {
            navigate(location.state?.modal, {state: {background: location}})
        }
    }, [location, navigate]);

  return (
    <>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of our application." />
        </Helmet>

        <section className=" text-black w-screen">
        
            <section className="w-screen h-screen pt-[100px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Banner})` }}>

                <div className="w-full h-full flex flex-col flex-wrap gap-4 space-y-4 justify-center items-center text-honeydew">

                    <div className="text-lg font-semibold">Empowering Careers in the Age of AI </div>
                    <div className="text-4xl flex pb-4 flex-col flex-wrap justify-center items-center font-bold">
                        <span className="inline-block">Learn new skills and</span> <span>Find jobs that match your talents</span>
                    </div>
                    <ul className="list-none flex gap-4 items-center">
                        <div className='text-base font-semibold'>
							<NavBarItem to='/sign-in'
                                state={{ background: location }}
								icon={<FontAwesomeIcon icon="fa-solid fa-user-plus" />} 
								name='Apply Now' 
                                linkClass={"text-honeydew bg-berkeley_blue rounded-lg p-5"} />
						</div>
                        <div className='text-base font-semibold'>
                            <NavBarItem href='#courses'  
									name='Explore Courses'
                                    linkClass={"text-berkeley_blue bg-honeydew rounded-lg p-5"} />
                        </div>
                    </ul>
                </div>
            </section>

            <section id="about" className="py-8 w-screen">
                <div className="w-full flex justify-center items-center flex-col">
                    <h2 className="text-4xl text-center text-berkeley_blue font-bold">Unlimited Possibilities</h2>
                    <p className="text-base text-gray-800 font-thin py-4 px-6 md:px-24 lg:px-32">
                        We are a platform dedicated to helping individuals reskill and find opportunities 
                        in a technology-driven world. Our mission is to bridge the gap between your skills and the 
                        ever-evolving job market.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap justify-around items-center gap-5 p-4">

                    <SmallCard title="Next Scheduled" icon={<img src={Computer} className="h-[65px]" alt=" office computer" />} 
                        className="min-w-[345px] max-w-sm"
                        contentClass={"text-gray-800"}
                        titleClass={"text-berkeley_blue"}
                        content="Lorem ipsum dolor consectetur sed do tempor incididunt ut laboris ut aliquip 
                        ex commodo nt ut laboris ut aliquip ex commodo conquat." />

                    <SmallCard title="Online Courees" icon={<img src={Computer} className="h-[65px]" alt=" office computer" />} 
                        className="min-w-[345px] max-w-sm"
                        contentClass={"text-gray-800"}
                        titleClass={"text-berkeley_blue"}
                        content="Lorem ipsum dolor consectetur sed do tempor incididunt ut laboris ut aliquip 
                        ex commodo nt ut laboris ut aliquip ex commodo conquat." />

                    <SmallCard title="Education Equip" icon={<img src={Computer} className="h-[65px]" alt=" office computer" />} 
                        className="min-w-[345px] max-w-sm"
                        contentClass={"text-gray-800"}
                        titleClass={"text-berkeley_blue"}
                        content="Lorem ipsum dolor consectetur sed do tempor incididunt ut laboris ut aliquip 
                        ex commodo nt ut laboris ut aliquip ex commodo conquat." />
                </div>
            </section>

            <section id="jobs" className="grid w-screen grid-rows-2 md:grid-rows-1 py-8 md:grid-cols-2">
                <div className="flex flex-col flex-wrap justify-center items-start px-4 lg:px-8 xl:px-16 ">
                    <h2 className="text-4xl lg:text-5xl font-bold text-berkeley_blue mb-4">
                        Take The First Step Towards Your Dream Job
                    </h2>

                    <p className="text-base text-gray-800 font-thin mb-6">
                        Discover your perfect career path with our AI-powered job matching tool. 
                        Our advanced algorithms connect you with opportunities tailored to your 
                        unique skills and experiences. Let us help you navigate the job market 
                        and find positions that truly fit your professional profile.
                    </p>

                    <div className="w-full flex justify-center md:justify-start list-none">
                        <NavBarItem to='/jobs'
                            name='Find Jobs' 
                            linkClass={"text-honeydew bg-berkeley_blue rounded-lg p-3"} />
                    </div>
                </div>

                <div className="flex flex-row flex-nowrap px-4 pt-4 md:pt-0 justify-center items-center">
                    <div className="min-w-20 max-w-sm space-y-6">
                        <img src={JobImg1} width={"90%"} alt="JobImg1" />
                        <img src={JobImg2} width={"90%"} alt="JobImg2" />
                    </div>
                    <div className="min-w-20 max-w-md">
                        <img src={JobImg3} width={"90%"} alt="JobImg3" />
                    </div>
                </div>

            </section>

            <section id="courses" className="w-screen py-8">
                <div className="w-full flex justify-center items-center flex-col">
                    <h2 className="text-4xl text-center text-berkeley_blue font-bold">Our Popular Courses</h2>
                    <p className="text-base text-gray-800 font-thin py-4 px-6 md:px-24 lg:px-32">
                        Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra. Pede phasellus eget. Etiam maecenas vel vici quis dictum rutrum nec nisi et.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap justify-around items-center gap-5 p-4">
                    {courses.map((course, index)=>(
                        <CourseCard title={course.title}
                            image={course.image}col
                            tutor={course.tutor}
                            price={course.price}
                            duration={course.duration}
                            rating={course.rating}
                            ratingCount={course.ratingCount}
                            className={"min-w-[300px] max-w-sm"}
                            key={index}
                            />
                    ))}
                </div>
            </section>

        </section>
    </>
  );
};

export default Home;
