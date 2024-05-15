

function ProfileCard() {
  return (
    <div className="flex flex-row h-14">
      <img src="https://avatars.githubusercontent.com/u/73502425?v=4" alt="profile" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col ml-2 justify-center">
        <span className="text-lg font-semibold">Diego Valenzuela</span>
        <span className="text-sm">Full-Stack software developer</span>
      </div>
    </div>
  );
}

export default ProfileCard;