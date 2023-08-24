import Image from "next/image"
import UnorderedList from '../components/UnorderedList';
import Navbar from "../components/navbar"
import Section from '../components/section';

export default function About() {
	return (
		<>
			<Navbar links={[
				{ text: "Home", path: "/" },
				{ text: "about", path: "/about" },
			]} />
			<div style={{display: "flex", flexDirection: "row" }}>
				<h2>
					<img style={{overflow: "clip", width: "50vw", height: "100wh", paddingTop: "60px", position:'sticky', top: "0px" }} src="/images/resized_bella.jpeg" alt="profile photo of me" />
				</h2>
				<div className='container' style={{paddingTop: "60px", overflow: "scroll"}} >
				    <Section bgcolor = "primary">
					<h4 >About Me</h4>
					<p>Hi! My name is Isabella Bertagnolli. I am a Senior studying computer science at the <a href="https://www.utah.edu">University of Utah</a>. I am interested in Machine Learning, Web developement and Art. My expected graduation date is May 2024 and I am interested in pursuing a career in software development/Computer Science. Check out my experience at <a href=".localized/Resume"> the resume page</a>. </p>
					<p> </p>
					</Section>
					<Section bgcolor = "secondary">
						<h4>Interests</h4>
						<h6> Books</h6>
						<p>
						I love to read and if I don&apos;t have other obligations would gladly sit and read all day. I enjoy fantasy and sci fi series as well as poetry and non fiction. Some of my recent favorites are Spinning Silver by Naomi Novik and Six of Crows by Leigh Bardugo.
						</p>
						<h6> Sports</h6>
						<p>I love to mountain bike, ski, climb and hike. Living in Utah theres a great selection of outdoor activities. I raced XC mountain bikes through junior high and highschool. I love to be outside in any fashion. </p>
						<h6> Art</h6>
						<p>I&apos;ve been painting for over 10 years now. I love to paint people and subjects from my dreams or mythology. In my sktechbook you&apos;ll find more surrealist art and charcoal drawings. I have won several awards for my chalk art and paintings and would love to have my work in a gallery someday.</p>
					</Section>
					<Section bgcolor = "primary">
					<h4>Skills</h4>
					<UnorderedList
						items={["C#",
							"C++",
							"C",
							"Go",
							"Python",
							"Java",
							"HTML",
							"CSS",
							"Javascript"]}
						/>
					</Section>
					<Section bgcolor = "secondary">
						<h4>Expertise</h4>
						{/* <div style={{display:"grid", gridTemplateColumns: "1fr 1fr",  }} > */}
						<div>
							<h6>Machine Learning</h6> 
							<p> I&apos;ve worked on multiple Machine learning projects related to image recognition and generation in professional and personal settings.</p>
					    </div>
						<div>
							<h6>Full Stack Development</h6> 
							<p> I&apos;ve worked on multiple projects across the front end and back end. Most recently a rework of the University of Utah&apos;s TA application website.</p>
					    </div>
						<div>
							<h6>Agile Development</h6> 
							<p> I develop using Agile techniques and have been on multiple crossfunctional teams that use the scrum methodology to make great software.</p>
					    </div>
						<div>
							<h6>Collaboration and Teamwork</h6> 
							<p>  I love to work in teams to bounce ideas off of one another and work together to make better products. I recently won Hashicorp&apos;s Intern culture award for outstanding communication during the internship</p>
					    </div>
					</Section>
					<Section bgcolor="primary">
					<h4> Relevant Coursework </h4>
					<UnorderedList
						items={[
							'Object Oriented Programming',
							'Algorithms and Data structures',
							'Computer Organization',
							'Software Practice I',
							'Software Practice II',
							'Web Software Architecture',
							'Foundations of Data Analysis',
							'Computer Systems',
							' UI/UX design',
							'Linear Algebra',
							'Statistics',
							'Calc I, II and III',

						]}
					/>
					</Section>
				</div>
			</div>
		</>
	);
}

