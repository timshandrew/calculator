import type { AppTheme } from "../types/sharedTypes";

type ThemeSelectorProps = {
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
};

export default function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
  function clickHandler(e) {
    e.preventDefault();
    if (theme === "1") {
      setTheme("2");
    } else if (theme === "2") {
      setTheme("3");
    } else {
      setTheme("1");
    }

    console.log("clicked");
  }
  return (
    // Div was used instead of the more semantic 'fieldset', as the latter has some weird positioning quirks.
    <div
      className="grid tripleSwitch justify-items-center"
      onClick={clickHandler}>
      <span className="col-start-1 row-start-2 mr-2">Theme</span>

      <label
        className="col-start-2 row-start-1"
        htmlFor="1"
        onClick={clickHandler}>
        1
      </label>
      <input
        className="row-start-2 col-start-2"
        type="radio"
        name="theme"
        id="1"
        value="1"
        checked={theme === "1"}
      />

      <label
        className="col-start-3 row-start-1"
        htmlFor="2"
        onClick={clickHandler}>
        2
      </label>
      <input
        className="row-start-2 col-start-3"
        type="radio"
        name="theme"
        id="2"
        value="2"
        checked={theme === "2"}
      />

      <label
        className="col-start-4 row-start-1"
        htmlFor="3"
        onClick={clickHandler}>
        3
      </label>
      <input
        className="row-start-2 col-start-4"
        type="radio"
        name="theme"
        id="3"
        value="3"
        checked={theme === "3"}
      />

      <span
        className="tripleSwitch-slider col-start-2 col-end-5 w-[70px] bg-bg-keypad"
        aria-hidden></span>
    </div>
  );
}
