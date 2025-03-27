'use client'
import Image from "next/image"
import salto from '../../public/salto.png'
export default function HomePage(){

    const sideLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

    sideLinks.forEach(item => {
        const li = item.parentElement as HTMLLIElement;
        item.addEventListener('click', () => {
            sideLinks.forEach(i => {
                i.parentElement?.classList.remove('active');
            });
            li.classList.add('active');
        });
    });
    
    const menuBar: HTMLElement | null = document.querySelector('.content nav .bx.bx-menu');
    const sideBar: HTMLElement | null = document.querySelector('.sidebar');
    
    menuBar?.addEventListener('click', () => {
        sideBar?.classList.toggle('close');
    });
    
    const searchBtn: HTMLButtonElement | null = document.querySelector('.content nav form .form-input button');
    const searchBtnIcon: HTMLElement | null = document.querySelector('.content nav form .form-input button .bx');
    const searchForm: HTMLFormElement | null = document.querySelector('.content nav form');
    
    searchBtn?.addEventListener('click', function (e: Event) {
        if (window.innerWidth < 576) {
            e.preventDefault();
            searchForm?.classList.toggle('show');
            if (searchForm?.classList.contains('show')) {
                searchBtnIcon?.classList.replace('bx-search', 'bx-x');
            } else {
                searchBtnIcon?.classList.replace('bx-x', 'bx-search');
            }
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            sideBar?.classList.add('close');
        } else {
            sideBar?.classList.remove('close');
        }
        if (window.innerWidth > 576) {
            searchBtnIcon?.classList.replace('bx-x', 'bx-search');
            searchForm?.classList.remove('show');
        }
    });
    
    const toggler: HTMLInputElement | null = document.getElementById('theme-toggle') as HTMLInputElement;
    
    toggler?.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
    
    return(
    <>
    <body>

    {/* <!-- Sidebar --> */}
    <div className="sidebar">
        <a href="#" className="logo">
            <i className='bx bxs-coffee-bean'></i>
            <div className="logo-name"><span>Gula</span></div>
        </a>
        <ul className="side-menu">
            <li className="active"><a href="#"><i className='bx bxs-dashboard'></i>Menu Iniciar</a></li>
            <li><a href="#"><i className='bx bx-package' ></i>Estoque</a></li>
            <li><a href="#"><i className='bx bx-line-chart'></i>Gráficos</a></li>
            <li><a href="#"><i className='bx bx-message-square-dots'></i>Notificações</a></li>
            <li><a href="#"><i className='bx bx-help-circle'></i>Ajuda</a></li>
            <li><a href="#"><i className='bx bx-cog'></i>Configurações</a></li>
        </ul>
        <ul className="side-menu">
            <li>
                <a href="#" className="logout">
                    <i className='bx bx-log-out'></i>
                    Sair
                </a>
            </li>
        </ul>
    </div>
    {/* <!-- End of Sidebar --> */}

    {/* <!-- Main Content --> */}
    <div className="content">
    {/* <!-- Navbar --> */}
        <nav>
            <i className='bx bx-menu'></i>
            <form action="#">
                <div className="form-input">
                    <input  type="search" placeholder="Search...">
                    <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden>
            <label htmlFor="theme-toggle" className="theme-toggle"></label>
            <a href="#" className="profile">
                <Image src={salto}>
            </a>
        </nav>

    {/* <!-- End of Navbar --> */}

    <main>
        <div className="header">
            <div className="left">
                <h1>Dashboard</h1>
            </div>
            {/* <!-- <a href="#" className="report">
                <i className='bx bx-cloud-download'></i>
                <span>Download CSV</span>
            </a> --> */}
        </div>

        {/* <!-- Insights --> */}

        <ul className="insights">
            <li>
                <i className='bx bx-calendar-check'></i>
                <span className="info">
                    <h3>
                        1.000.000
                    </h3>
                    <p>Dias trabalhados</p>
                </span>
            </li>
            <li><i className='bx bx-show-alt'></i>
                <span className="info">
                    <h3>
                        1
                    </h3>
                    <p>Pessoa comeu no refeitorio</p>
                </span>
            </li>
            <li><i className='bx bx-line-chart'></i>
                <span className="info">
                    <h3>
                        100%
                    </h3>
                    <p>de aproveitamento da comida</p>
                </span>
            </li>
            <li><i className='bx bx-dollar-circle'></i>
                <span className="info">
                    <h3>
                        seila
                    </h3>
                    <p>dengue</p>
                </span>
            </li>
        </ul>

        {/* <!-- End of Insights --> */}

        <div className="bottom-data">
            <div className="orders">
                <div className="header">
                    <i className='bx bx-receipt'></i>
                    <h3>Pedidos</h3>
                    <i className='bx bx-filter'></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Order Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Image src="assets/96552159-9119-4796-a708-dd841d8deae2-780x520.jpeg">
                                <p>Lula</p>
                            </td>
                            <td>1bilhaodecalango</td>
                            <td><span className="status completed">Completed</span></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Luangameplays</p>
                            </td>
                            <td>Luangameplays   </td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Ferrari</p>
                            </td>
                            <td>1bilhaodecarne</td>
                            <td><span className="status process">Processing</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <!-- Sugestões --> */}
            <div className="sugestoes">
                <div className="header">
                    <i className='bx bxs-bell-ring'></i>
                    <h3>Sugestões/Pedidos</h3>
                </div>
                <ul className="task-list">
                    <li className="completed">
                        <div className="task-title">

                            <p>Carne modia de pato com berinjela</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li>
                    <li className="completed">
                        <div className="task-title">

                            <p>Moela de ema a passarinho</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li>
                    <li className="completed">
                        <div className="task-title">

                            <p>Perna de gavião com bico de lula</p>
                        </div>
                        <i className='bx bx-dots-vertical-rounded'></i>
                    </li>
                </ul>
            </div>

            {/* <!-- End of Reminders--> */}

            </div>

        </main>

    </div>

    <script src="index.js"></script>
    </body>
    </>
    )
}
    