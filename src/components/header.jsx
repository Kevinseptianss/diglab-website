/* eslint-disable react/prop-types */
import COLORS from "./color";

const Header = ({
  items,
  handlerPagination,
  pagination,
  handlerSelection,
  selection,
}) => {
  return (
    <div
      className="flex flex-row justify-between items-center"
      style={{ backgroundColor: COLORS.blue, height: 100, marginTop: -30 }}
    >
      <div style={{ width: 50 }} onClick={handlerPagination}>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="20,50 80,20 80,80" fill="white" />
        </svg>
      </div>

      {items
        .slice(pagination === 0 ? 0 : 4, pagination === 0 ? 4 : 8)
        .map((item, index) => {
          const actualIndex = index + pagination * 4;
          return (
            <div
              className="flex-1 border border-white h-[100px] px-10 flex items-center"
              style={{
                backgroundColor:
                  selection === actualIndex ? "white" : COLORS.blue,
              }}
              key={actualIndex}
              onClick={() => handlerSelection(actualIndex)}
            >
              <h1
                className="text-4xl font-semibold"
                style={{
                  color: selection === actualIndex ? COLORS.blue : COLORS.green,
                }}
              >
                {item.title}
              </h1>
            </div>
          );
        })}

      <div style={{ width: 50 }} onClick={handlerPagination}>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="80,50 20,20 20,80" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
