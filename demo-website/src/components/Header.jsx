import DueTimeProductions from '../assets/images/dtplogo.png'


function Header() {
    return (
        <div className='fixed top-0 left-0 m-4'>
            <img className='w-30 sm:w-30 md:w-30 lg:w-30 h-auto mb-4' src={DueTimeProductions} alt="Due Time Productions Logo" />
        </div>
    )
}

export default Header