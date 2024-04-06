import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa' ;

const Header = ({title, width}) => {
  return (
    <header className="Header">
        <h1>{title}</h1>
        {  
          (width.width < 768) ? <FaMobileAlt/> 
            : (width.width < 992) ? <FaTabletAlt/>
              : <FaLaptop/>    
        }
    </header> 
  )
}

export default Header ;