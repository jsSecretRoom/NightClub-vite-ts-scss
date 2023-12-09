import './DropdownMain.scss';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dropMainArrow from '../../../assets/ico/drop-main-arrow.svg'
import dropMainArrowRewersed from '../../../assets/ico//drop-main-arrow-reverced.svg'

function DropdownMain({forSomevone, puncts} : {forSomevone : string, puncts : string[]}) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    let dyspleywidth = window.innerWidth;
    useEffect(() => {
        if(dyspleywidth >= 560){
            setMenuOpen(true)
        }else{
            setMenuOpen(false)
        }
    },[dyspleywidth]);

    const toggleMenu = () => {
        if(dyspleywidth <= 560){
            setMenuOpen(!isMenuOpen);
        }
      
    };
    return ( 
        <section className="dropdown-main">
            <button 
                style={{ background: isMenuOpen ? 'black' : '#147de0' }} 
                onClick={toggleMenu}>
                {forSomevone} 
                {isMenuOpen 
                    ? <img src={dropMainArrow} alt="dropMainArrow" />
                    : <img src={dropMainArrowRewersed} alt="dropMainArrow" />
                }
            </button>
             
            {isMenuOpen && (
                <div className="dropdown-content">
                {puncts.map((item, index) => (
                    <NavLink to="" key={index}>{item}</NavLink>
                ))}
                </div>
            )}
        </section>
    );
}

export default DropdownMain;