import {Link} from 'react-router-dom'

export default function Layout() {
    return (<div>
        <header className="headerClass">
            <menu className={"menuButtonsList"}>
                <Link to={'port_blair'} className={"headerButtons"}>PortBlair</Link>
                <Link to={'delhi'} className={"headerButtons"}>Delhi</Link>
                <Link to={'mumbai'} className={"headerButtons"}>Mumbai</Link>
                <Link to={'bangalore'} className={"headerButtons"}>Bangalore</Link>
                <Link to={'kolkata'} className={"headerButtons"}>Kolkata</Link>
            </menu>
        </header>
    </div>);
}