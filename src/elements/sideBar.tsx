type SideBar = {
    profileImg: string;
    userName: string;
    userId: string;
    logged: boolean;
  };

export const SideBar: React.FC<SideBar> = ({ profileImg, userName, userId, logged }) => {
    return (
        <>
            <div className='sidebar-top not-logged'>
                { logged ? (
                    <>
                        <div className='sidebar-profile-pic' style={{
                        backgroundImage: `url(${profileImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                        }}>
                        </div>
                        <div className='sidebar-user-text'>
                            <div className='user-name'>
                                <p>{userName}</p>
                            </div>
                            <div className='user-id'>
                                <p>{userId}</p>
                            </div>
                        </div>
                    </>
                ): (
                    <>
                        <div className='sidebar-user-text'>
                            <div className='user-name'>
                                <p>Clique <a href="#">aqui</a> para entrar.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}