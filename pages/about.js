import styles from '../styles/about.module.css'
import UnorderedList from '../components/UnorderedList';

export default function About() {
    return (
        <>
        
          <h1>About me</h1>
          <h2>
            <img className={styles.profile} src="/images/resized_bella.jpeg" alt="profile photo of me"/>
          </h2>
    <div className='container'>
	<p>Hi My name is Isabella Bertagnolli. I am a Junior studying computer science at the <a href="https://www.utah.edu">University of Utah</a> I am interested in Machine Learning, Web developement and Art. My expected graduation date is May 2024 and I am interested in pursuing a career in software development/Computer Science. Check out my experience at <a href= ".localized/Resume"> the resume page</a> </p>
	<h1>Hobbies</h1>
	{/* <ul>
		<li>I love to draw, paint, ski, hike, mountain bike and get outdoors outside of school.</li>
		<li>I also love to problem solve and learn new things so you'll likely find me with a new hobby every month. 
		</li>
	</ul> */}
	<UnorderedList
		items={[
			'I love to draw, paint, ski, hike, mountain bike and get outdoors outside of school.',
			'I also love to problem solve and learn new things so you\'ll likely find me with a new hobby every month.',
			'This shit really worked',
		]}
		fontColor='#594655'
	/>
	<UnorderedList
		items={[
			'Item 1',
			'Item 2',
		]}
		fontColor='red'
	/>
	<h1> Courses completed in computer science</h1>
		<ul>
			<li> Object Oriented Programming</li>
			<li> Algorithms and Data structures</li>
			<li> Computer Organization</li>
			<li> Software Practice I</li>
			<li> Software Practice II</li>
			<li> Web Software Architecture</li>
			<li> Foundations of Data Analysis</li>
			<li>Computer Systems</li>
			<li> Ui/Ux design</li>
			<li>Linear Algebra</li>
			<li>Statistics</li>
			<li>Calc I, II and III</li>
		</ul>
	</div>
    </>
      );
    } 

