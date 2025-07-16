export default function ThemeSelector() {
  return (
    // Div was used instead of the more semantic 'fieldset', as the latter has some weird positioning quirks.
    <div className="grid gap-2 tripleSwitch">
      <span className="col-start-1 row-start-2">Theme</span>

      <label className="col-start-2 row-start-1" htmlFor="1">
        1
      </label>
      <input
        className="row-start-2 col-start-2"
        type="radio"
        name="theme"
        id="1"
        value="1"
        defaultChecked
      />

      <label className="col-start-3 row-start-1" htmlFor="2">
        2
      </label>
      <input
        className="row-start-2 col-start-3"
        type="radio"
        name="theme"
        id="2"
        value="2"
      />

      <label className="col-start-4 row-start-1" htmlFor="3">
        3
      </label>
      <input
        className="row-start-2 col-start-4"
        type="radio"
        name="theme"
        id="3"
        value="3"
      />

      <span className="tripleSwitch-slider" aria-hidden></span>
    </div>
  );
}
