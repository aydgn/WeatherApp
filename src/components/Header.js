import Loading from "./Loading";
import Error from "./Error";

const Header = ({ data, error, city, open, setOpen }) => {
  if (error) return <Error city={city} />;
  if (!data) return <Loading />;
  return (
    <header className="flex flex-col items-center justify-center font-thin text-center text-white bg-gradient-to-b from-green-400 to-blue-500 h-96">
      <button
        aria-label="menu"
        onClick={() => setOpen(!open)}
        className="self-end mr-5 text-3xl rounded"
      >
        <svg viewBox="0 0 10 8" width="40">
          <path
            d="M1 1h8M1 4h8M1 7h8"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <div className="px-10 py-5 bg-white shadow-sm rounded-xl bg-opacity-5">
        <h1 className="text-9xl">{data.current.temp_c}&#176;</h1>
        <span className="capitalize ">
          {data.location.name} - {data.location.country}
        </span>
        <div>{data.current.condition.text}</div>

        <div>
          <img
            src={`https://${data.current.condition.icon}`}
            alt={`${data.location.name} - ${data.current.condition.text}`}
            title={`${data.location.name} - ${data.current.condition.text}`}
            className="inline"
            height="64px"
            width="64px"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
