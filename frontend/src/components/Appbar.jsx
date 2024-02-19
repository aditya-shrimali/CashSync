export const Appbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  const handleLogin = () => {
    window.location.href = "/signin";
  };
  const isUserLoggedIn = !!localStorage.getItem("token");
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">
        CashSync App
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <button
            className="flex flex-col justify-center h-full"
            onClick={isUserLoggedIn ? handleLogout : handleLogin}
          >
            {isUserLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};
