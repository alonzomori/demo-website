import DueTimeProductions from '../assets/images/dtplogo.png'


function Header() {
    return (
        <div className='fixed top-0 left-0 m-4'>
            <img className='w-32 sm:w-48 md:w-64 lg:w-80 h-auto mb-4' src={DueTimeProductions} alt="Due Time Productions Logo" />
        </div>
    )
}

export default Header