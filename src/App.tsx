import './App.css'
import BookDetails from './elements/bookDetails';
import { SideBar } from './elements/sideBar';
import Card from './elements/elementos';
import personalSotry from './assets/icons/reading.png'
import { TbHome, TbLogout  } from "react-icons/tb";
import { IoLibraryOutline, IoSettingsOutline } from "react-icons/io5";
import { MdContactSupport, MdOutlineMail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { CiSquarePlus } from "react-icons/ci";

function App(){
    const imgUrl = '/src/assets/profile.jpg';
    const bookUrl = "/src/assets/book.jpg";
    const harry = "/src/assets/harry.jpg";
    const sherlock = "/src/assets/sherlock.jpg";
    const anne = "/src/assets/anne.jpg";

    return (
        <>
        <div className='sidebar'>
            <SideBar
                profileImg={imgUrl}
                userName='Fernanda'
                userId='@cacciamani1218'
                logged={false}
            />
            <div className='sidebar-menu'>
                <a href="#home" className='selected'> <TbHome/>Home</a>
                <a href="#home" className=''><IoLibraryOutline />Biblioteca</a>
                <a href="#sobre"><MdContactSupport/>Sobre</a>
                <a href="#contato"><MdOutlineMail/>Contato</a>
                <a href="#contato"><IoSettingsOutline/>Configurações</a>
                <div className='menu-bottom'>
                    <a href="#contato"><TbLogout />Sair</a>
                </div>
            </div>

        </div>

        <div className='right-bar display'>
            <BookDetails
                bookUrl = {bookUrl}
                bookTitle = 'Prelúdio a Fundação Testando titulos grandes'
                bookAuthor = 'Isaac Asimov'
                analytics = {[200, 20, 200]}
                saved = {true}
                description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit laboriosam rerum minus culpa voluptate sint totam doloribus maxime magnam tempora quidem nihil debitis libero fuga, facere suscipit? Blanditiis, sapiente. \n \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias illum repellat itaque cum, inventore ipsum quod vero praesentium, optio voluptatum porro voluptatibus blanditiis. Eius expedita molestias atque recusandae accusamus.'
            />
        </div>
        <section className='middle'>
            <nav className="posts nav">
                <div className='search-bar'>
                    <FiSearch /><input placeholder='Buscar texto' />
                </div>
                <a href="#" className='nav-text'>
                    <CiSquarePlus/>
                    <span>Enviar um novo texto</span>
                </a>
            </nav>
            
            <nav className="posts nav genere" style={{marginTop: '1rem !important'}}>
                <div className='genere-title'>
                    <h2>Gêneros</h2>
                </div>
                <div className='genere-body'>
                    <div className='genere-element'>
                        <button><img src={personalSotry} alt="" /> Relato Pessoal</button>
                    </div>
                    <div className='genere-element'>
                        <button className='selected'><img src={personalSotry} alt="" /> Relato Pessoal</button>
                    </div>
                    <div className='genere-element'>
                        <button><img src={personalSotry} alt="" /> Relato Pessoal</button>
                    </div>
                    <div className='genere-element'>
                        <button><img src={personalSotry} alt="" /> Relato Pessoal</button>
                    </div>
                    <div className='genere-element'>
                        <button><img src={personalSotry} alt="" /> Relato Pessoal</button>
                    </div>
                    <div className='genere-element'>
                        <button className='selected'><img src={personalSotry} alt="" /> Relato Pessoal</button>
                    </div>
                </div>
            </nav>

            <section className="posts">
                <div className='posts-title'>
                    <h2>Meus textos salvos</h2>
                    <a href='#'>ver todos</a>
                </div>
                <Card
                    imagem={bookUrl}
                    tituloImagem={"Titulo da imagem"}
                    titulo="Relatos pessoais"
                    conteudo="80 textos."
                    cor='#fff'
                />
                <Card
                    imagem={harry}
                    tituloImagem="Contos"
                    titulo="Contos"
                    conteudo="120 textos."
                    cor='#fff'
                />
                <Card
                    imagem={sherlock}
                    tituloImagem="Contos"
                    titulo="Contos"
                    conteudo="120 textos."
                    cor='#fff'
                />

                <Card
                    imagem={anne}
                    tituloImagem="Contos"
                    titulo="Contos"
                    conteudo="120 textos."
                    cor='#fff'
                />
            </section>

            <section className="posts">
                <div className='posts-title'>
                    <h2>Textos de relato pessoal</h2>
                    <a href='#'>ver todos</a>
                </div>
                <Card
                    imagem={bookUrl}
                    tituloImagem={"Titulo da imagem"}
                    titulo="Relatos pessoais"
                    conteudo="80 textos."
                    cor='#fff'
                />
                <Card
                    imagem={harry}
                    tituloImagem="Contos"
                    titulo="Contos"
                    conteudo="120 textos."
                    cor='#fff'
                />
                <Card
                    imagem={sherlock}
                    tituloImagem="Contos"
                    titulo="Contos"
                    conteudo="120 textos."
                    cor='#fff'
                />

                <Card
                    imagem={anne}
                    tituloImagem="Contos"
                    titulo="Contos"
                    conteudo="120 textos."
                    cor='#fff'
                />
            </section>
        </section>
        </>
    )
}
export default App
