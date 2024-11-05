import './App.css';
import { useEffect, useState, useRef } from 'react';
import { RiHome2Line } from "react-icons/ri";
import BookDetails from './elements/bookDetails';
import { SideBar } from './elements/sideBar';
import Card from './elements/elementos';
import personalSotry from './assets/icons/reading.png';
import { TbHome, TbLogout } from "react-icons/tb";
import { IoLibraryOutline, IoSettingsOutline } from "react-icons/io5";
import { MdContactSupport, MdOutlineMail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";
import { getSaveds, getTextsByGenId } from './integration/texts';

interface Author {
    name: string;
    id: string;
}

interface SavedItem {
    title: string;
    author: Author;
    converImg: string;
    discription: string;
    id: string;
    textGenre: string;
    categories: string[];
    publishDate: string;
    analytics: string[];
}

function App() {
    const imgUrl = '/src/assets/profile.jpg';
    const bookUrl = "/src/assets/book.jpg";
    const harry = "/src/assets/harry.jpg";
    const sherlock = "/src/assets/sherlock.jpg";
    const anne = "/src/assets/anne.jpg";
    const ads = "src/assets/ads.png";
    const email = "src/assets/message.png";
    const poem = "src/assets/poetry.png";
    const chronic = "src/assets/novel.png";
    const group = "src/assets/group-discussion.png";

    const [savedData, setSavedData] = useState<SavedItem[] | SavedItem | null>(null);
    const [loading, setLoading] = useState(false); 

    const [genreResults, setGenreResults] = useState<SavedItem[]>([]);

    const hasRun = useRef(false); 

    const SearchText = async (id: string) => {
        setLoading(true); 
        try {
            const data: SavedItem[] = await getSaveds(id);
            setSavedData(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false); 
        }
    };

    const searchByGenre = async (genreId: string) => {
        setLoading(true);
        try {
            const data: SavedItem[] = await getTextsByGenId(genreId);
            setGenreResults(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        if (genreResults.length == 0) {
            searchByGenre("I2E7dK2oNSyT9sTjFxsL");
        }
    }, [genreResults]);

    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-menu'>
                    <a href="#home" className='selected'> <RiHome2Line /></a>
                    <a href="#home" className=''><IoLibraryOutline /></a>
                    <a href="#sobre"><MdContactSupport /></a>
                    <a href="#contato"><MdOutlineMail /></a>
                    <a href="#contato"><IoSettingsOutline /></a>
                    <div className='menu-bottom'>
                        <a href="#contato"><TbLogout /></a>
                    </div>
                </div>
            </div>

            <div className='left-side'>
                <SideBar
                    profileImg={imgUrl}
                    userName='Fernanda'
                    userId='@cacciamani1218'
                    logged={false}
                />
            </div>

            <div id='right-bar' className='right-bar display'>
                {loading ? (
                    <div className='load loader'></div>
                ) : savedData ? (
                    Array.isArray(savedData) ? (
                        <div></div>
                    ) : (
                    <div id={savedData?.id}>
                        <BookDetails
                            bookUrl={savedData?.converImg}
                            bookTitle={savedData?.title}
                            bookAuthor={savedData?.author?.name}
                            analytics={savedData?.analytics}
                            saved={true}
                            description={savedData?.discription}
                        />
                    </div>
                )) : (
                    <div className='following'>Seguindo</div>
                )}
            </div>

            <section id='middle' className='middle'>
                <nav className="posts nav">
                    <div className='search-bar'>
                        <FiSearch /><input placeholder='Buscar texto' />
                    </div>
                    <a href="#" className='nav-text'>
                        <CiSquarePlus />
                        <span>Enviar um novo texto</span>
                    </a>
                </nav>

                <section className="posts">
                    <div className='posts-title'>
                        <h2>Meus textos salvos</h2>
                        <a href='#'>ver todos</a>
                    </div>
                    <Card
                        imagem={bookUrl}
                        onClick={() => SearchText("JizP5biwpPtATDMus1mo")}
                    />
                    <Card
                        imagem={harry}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />
                    <Card
                        imagem={sherlock}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />
                    <Card
                        imagem={anne}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />
                </section>

                <section className="posts">
                    <div className='posts-title'>
                        <h2>Explorar</h2>
                    </div>
                    <div className='genere-body'>
                        <div className='genere-element'>
                            <button>Relato Pessoal</button>
                        </div>
                        <div className='genere-element'>
                            <button className='selected'> Anúncio Publicitário</button>
                        </div>
                        <div className='genere-element'>
                            <button>E-mail</button>
                        </div>
                        <div className='genere-element'>
                            <button>Poema</button>
                        </div>
                        <div className='genere-element'>
                            <button>Crônicas</button>
                        </div>
                        <div className='genere-element'>
                            <button>Escrita Colaborativa</button>
                        </div>
                    </div>
                {genreResults.map(item => (
                    <Card
                        key={item.id} 
                        imagem={item.imgUrl} 
                        onClick={() => SearchText(item.id)}
                    />
                ))}
                <Card
                        imagem={anne}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />
                <Card
                        imagem={anne}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />
                
                <Card
                        imagem={anne}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />

                <Card
                        imagem={anne}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />
                
                <Card
                        imagem={anne}
                        onClick={() => SearchText("CtRXhnatTCvqMGBuVtpD")}
                    />
                
                </section>
            </section>
        </>
    );
}

export default App;
