
import useTools from '../../Hooks/useTools';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Footer from './Footer';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Service from './Service';
import Tools from './Tools';
import Subscribe from './Subscribe';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Home = () => {
    const [user, loading] = useAuthState(auth)
    const [tools] = useTools('https://tranquil-brook-25862.herokuapp.com/tools')
    if (loading) {
        return <Loading />
    }
    return (
        <div className='mx-auto'>
            <Navbar />
            <Banner />
            <section>
                <p className='text-5xl text-primary font-medium my-20 text-center'>TOOLS</p>
                <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3  gap-10 p-5'>
                    {
                        tools.slice(0, 6).map(tool => <Tools
                            key={tool._id}
                            tool={tool} />)
                    }
                </div>
            </section>
            <section>
                <p className='text-5xl text-primary font-medium my-16 text-center'>customer reviews</p>
                <div className='mx-auto'>
                    <Reviews />
                </div>
            </section>
            <div className="divider my-20"></div>
            <section>
                <div className='flex justify-center my-8'>
                    <Service />
                </div>
            </section>
            <section>
                <div className='flex justify-center items-center'>
                    <BussinessSummary />
                </div>
            </section>
            <section>
                <div className='my-8 flex justify-center'>
                    <Subscribe />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;