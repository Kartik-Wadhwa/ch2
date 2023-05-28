import useUsers from '@/hooks/useUsers';

import Avatar from '../Avatar';

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-4 hidden lg:block">
      
      <div className="flex
                    items-center 
                    justify-center ">
          <img className="
                    rounded
                    h-14
                    w-14
                    p-4 
                    hover:bg-green-500 
                    hover:bg-opacity-20 
                    cursor-pointer
          " src="../images/gift.png" alt="" />
          <span className="text-sm">
            <b>Earn Rewards</b> on Donations and live campaigns.
          </span>
        </div>
            
        <div className="carousel">
    <div className="carousel-inner">
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden checked/>
        <div className="carousel-item">
            <img src="../images/img1.jpg"/>
        </div>
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden/>
        <div className="carousel-item">
            <img src="../images/img2.jpg"/>
        </div>
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden/>
        <div className="carousel-item">
            <img src="../images/img5.jpg"/>
        </div>
        <label htmlFor="carousel-3" className="carousel-control prev control-1"/>
        <label htmlFor="carousel-2" className="carousel-control next control-1"/>
        <label htmlFor="carousel-1" className="carousel-control prev control-2"/>
        <label htmlFor="carousel-3" className="carousel-control next control-2"/>
        <label htmlFor="carousel-2" className="carousel-control prev control-3"/>
        <label htmlFor="carousel-1" className="carousel-control next control-3"/>
        <ol className="carousel-indicators">
            <li>
                <label htmlFor="carousel-1" className="carousel-bullet">•</label>
            </li>
            <li>
                <label htmlFor="carousel-2" className="carousel-bullet">•</label>
            </li>
            <li>
                <label htmlFor="carousel-3" className="carousel-bullet">•</label>
            </li>
        </ol>
    </div>
</div>

  
      <div className="bg-green-500 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-black-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
