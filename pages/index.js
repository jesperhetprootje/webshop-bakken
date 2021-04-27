import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1 className="text-5xl text-center mt-9 font-semibold">Welkom bij Jesper's bakkunsten!</h1>
            <div className="text-2xl text-center font-semibold ml-20 mt-40">
                <div>
                    <p className="text-2xl">Luxe Chocolademuffins</p>
                    <br/>
                    <Link href="/Luxe-Chocolade-Muffins">
                        <a className="bg-green-500 text-white p-1.5">Klik hier</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
