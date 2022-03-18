import banner from '../../lib/imagens/banner.jpg';
const Home = () => {
    return (
        <div>
            <main role="main" className="pb-3">
                <section style={{margin: 0}}>
                    <div class="banner-index text-center">
                        <img src={banner} />
                    </div>
                </section> 
            </main>
        </div>
    );
}
export default Home;